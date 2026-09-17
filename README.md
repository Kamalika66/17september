# Digital Platform Project Starter

Ett gemensamt startprojekt för kursen **Teknik för digitala plattformar**.

> **Build anything. Understand what happens.**

Det här repot ger teamet en enkel lokal utvecklingsmiljö. Ni väljer själva vad ni vill bygga. Projektet behöver inte publiceras på internet och ni behöver inte använda något särskilt ramverk.

## Vad är projektets syfte?

Labbarna i kursen tränar grunderna individuellt. Teamprojektet är platsen där ni använder samma kunskaper i ett sammanhängande digitalt flöde.

Projektet ska hjälpa er att undersöka frågor som:

- Vad gör användaren?
- Vad händer i HTML och DOM när användaren gör något?
- Vilken JavaScript-kod reagerar?
- Vad sparas i webbläsaren?
- Hur kan en browser, session eller användare identifieras?
- Vilka händelser är relevanta att observera eller mäta?
- Vilka requests skickas över nätverket?
- Vad svarar servern?
- Hur påverkar consent vad som får ske?
- Hur kan ni systematiskt hitta var ett flöde går sönder?

Ni behöver inte bygga flest funktioner. Målet är att kunna **förstå, observera, testa och felsöka** det ni bygger.

## Exempel på vad ni kan bygga

Välj något litet som innehåller minst en meningsfull användarhandling. Exempel:

- bokning eller tidsbokning
- event- eller kursanmälan
- liten webshop eller beställning
- digital portfolio eller CV
- medlems- eller communitysida
- quiz eller enkät
- tränings- eller aktivitetslogg
- musik-, kultur- eller eventsida
- något helt eget

Exemplen är bara inspiration. **Ni bestämmer själva.**

## Kom igång

### 1. Skapa teamets repository

En person i teamet väljer **Use this template** på GitHub och skapar ett nytt repository för teamet.

Lägg sedan till resten av teamet som collaborators så att alla kan arbeta i samma repository.

### 2. Hämta projektet

Klona teamets repository med GitHub Desktop eller Git:

```bash
git clone <teamets-repository-url>
```

Öppna projektet i Visual Studio Code.

### 3. Starta projektet

Kontrollera att Node.js är installerat och kör:

**Windows / PowerShell**

```powershell
npm.cmd start
```

**macOS / Linux**

```bash
npm start
```

Öppna sedan:

```text
http://localhost:3000
```

Stoppa servern med `Ctrl + C`.

## Var börjar vi?

1. Öppna `PROJECT.md` och bestäm vad teamet vill bygga.
2. Ändra innehållet i `public/index.html`.
3. Anpassa utseendet i `public/style.css`.
4. Lägg till beteenden i `public/app.js`.
5. Använd DevTools medan ni arbetar: Elements, Console, Network och Application.
6. Spara arbetet ofta med commit och push.

## API som finns från början

Startern innehåller en liten lokal Node-server.

Kontrollera att servern fungerar:

```text
GET /api/health
```

Det finns också en neutral endpoint som ni kan använda när ni senare vill skicka data från browsern till servern:

```text
POST /api/data
```

Ni behöver inte använda den från första dagen.

## AI är tillåtet

Ni får använda GitHub Copilot, ChatGPT, Claude, Gemini eller andra AI-verktyg.

AI kan hjälpa med exempelvis:

- CSS och layout
- kod ni ännu inte kan skriva själva
- felsökning
- dokumentation
- förklaringar
- idéer

Men teamet ansvarar för det AI:n skapar.

För sådant som hör till kursens mål ska ni kunna visa **vad som händer och hur ni vet det**. Ett AI-svar är en hypotes tills ni har verifierat den i exempelvis browsern, DevTools, terminalen eller serverloggen.

## Teamarbete

Ni kommer ofta arbeta med en aktiv dator eller delad skärm och rotera roller. Läs `TEAMWORK.md` innan första gemensamma arbetspasset.

## Projektets dokumentation

Använd:

- `PROJECT.md` för projektidén och det viktigaste användarflödet.
- `docs/TECHNICAL-NOTES.md` för observationer, problem, tester och tekniska beslut.
- GitHub Issues för sådant ni upptäcker att ni vill göra, undersöka eller fixa.

Dokumentationen behöver inte vara lång. Den ska hjälpa er att kunna gå tillbaka och förstå **vad ni gjorde, vad ni trodde och vad ni faktiskt kunde observera**.
