const http = require("node:http");
const { randomUUID } = require("node:crypto");
const { readFile } = require("node:fs/promises");
const path = require("node:path");

const publicDirectory = path.join(__dirname, "public");
const maximumBodySize = 16_384;

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
};

function sendJson(response, statusCode, body) {
  response.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
  });
  response.end(JSON.stringify(body));
}

function readJsonBody(request) {
  return new Promise((resolve, reject) => {
    let body = "";

    request.setEncoding("utf8");
    request.on("data", (chunk) => {
      body += chunk;
      if (Buffer.byteLength(body, "utf8") > maximumBodySize) {
        reject(new Error("REQUEST_TOO_LARGE"));
        request.destroy();
      }
    });

    request.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch {
        reject(new Error("INVALID_JSON"));
      }
    });

    request.on("error", reject);
  });
}

async function handleData(request, response) {
  let payload;

  try {
    payload = await readJsonBody(request);
  } catch (error) {
    const statusCode = error.message === "REQUEST_TOO_LARGE" ? 413 : 400;
    sendJson(response, statusCode, {
      accepted: false,
      error: error.message,
    });
    return;
  }

  const receipt = {
    accepted: true,
    receiptId: randomUUID(),
    receivedAt: new Date().toISOString(),
    data: payload,
  };

  console.log("Data received", {
    receiptId: receipt.receiptId,
    payload,
  });

  sendJson(response, 202, receipt);
}

async function serveStaticFile(request, response) {
  const requestUrl = new URL(request.url, "http://localhost");
  const requestedPath = requestUrl.pathname === "/" ? "/index.html" : requestUrl.pathname;
  const filePath = path.resolve(publicDirectory, `.${requestedPath}`);

  if (!filePath.startsWith(`${publicDirectory}${path.sep}`)) {
    sendJson(response, 403, { error: "FORBIDDEN" });
    return;
  }

  try {
    const file = await readFile(filePath);
    const contentType = contentTypes[path.extname(filePath)] || "application/octet-stream";
    response.writeHead(200, { "Content-Type": contentType });
    response.end(file);
  } catch (error) {
    if (error.code === "ENOENT") {
      sendJson(response, 404, { error: "NOT_FOUND" });
      return;
    }
    throw error;
  }
}

function createServer() {
  return http.createServer(async (request, response) => {
    try {
      if (request.method === "GET" && request.url === "/api/health") {
        sendJson(response, 200, {
          status: "ok",
          time: new Date().toISOString(),
        });
        return;
      }

      if (request.method === "POST" && request.url === "/api/data") {
        await handleData(request, response);
        return;
      }

      if (request.method === "GET" || request.method === "HEAD") {
        await serveStaticFile(request, response);
        return;
      }

      sendJson(response, 405, { error: "METHOD_NOT_ALLOWED" });
    } catch (error) {
      console.error(error);
      if (!response.headersSent) {
        sendJson(response, 500, { error: "INTERNAL_SERVER_ERROR" });
      } else {
        response.end();
      }
    }
  });
}

if (require.main === module) {
  const port = Number(process.env.PORT) || 3000;
  createServer().listen(port, () => {
    console.log(`Team project is running at http://localhost:${port}`);
  });
}

module.exports = { createServer };
