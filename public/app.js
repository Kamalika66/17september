const tryButton = document.querySelector("#try-button");
const result = document.querySelector("#result");
const serverStatus = document.querySelector("#server-status");

tryButton.addEventListener("click", () => {
  const time = new Date().toLocaleTimeString("sv-SE");
  result.textContent = `Handlingen registrerades i browsern kl. ${time}.`;

  console.log("Starter interaction", {
    action: "try_button_clicked",
    occurredAt: new Date().toISOString(),
  });
});

async function checkServer() {
  try {
    const response = await fetch("/api/health");
    const data = await response.json();

    serverStatus.textContent =
      data.status === "ok"
        ? "Servern svarar. Öppna Network i DevTools och hitta requesten."
        : "Servern svarade, men med ett oväntat resultat.";
  } catch (error) {
    console.error("Could not reach local server", error);
    serverStatus.textContent = "Kunde inte kontakta den lokala servern.";
  }
}

checkServer();
