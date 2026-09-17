# Technical Notes

Använd den här filen som en enkel teknisk loggbok. Skriv kort. Syftet är att kunna gå tillbaka och se hur teamets förståelse utvecklades.

## Exempel

**Problem / fråga**  
När vi klickade på knappen såg användaren en bekräftelse, men vi visste inte om något skickades till servern.

**Förväntning**  
Ett klick ska skapa en POST-request.

**Observation**  
Network visade ingen request.

**Test**  
Vi lade en `console.log` först i click-handlern.

**Resultat**  
Loggen syntes inte. Felet låg före nätverket och vi hittade att event listenern pekade på fel element.

---

## Våra anteckningar

### Observation / problem


### Vad förväntade vi oss?


### Vad kunde vi faktiskt se?


### Vad testade vi?


### Vad lärde vi oss eller ändrade?


---

Kopiera gärna sektionen ovan när ni behöver dokumentera ett nytt problem eller beslut.
