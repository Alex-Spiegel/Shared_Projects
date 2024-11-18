# Was machen Routes, Controllers & Services
---
### KURZFASSUNG
- **Routes**: Legen die Endpunkte und HTTP-Methoden fest und leiten Anfragen an die entsprechenden Controller weiter.
- **Controllers**: Bearbeiten die HTTP-Anfragen, rufen die notwendigen Service-Methoden auf und senden eine Antwort an den Client zurück.
- **Services**: Kümmern sich um die Geschäftslogik, wie Datenbankoperationen, Datenverarbeitung und komplexe Aufgaben. Sie werden von den Controllern aufgerufen.
---
## 1. Routes

**Zweck**:

    Definieren der Routen und Zuweisung der HTTP-Methoden (GET, POST, PUT, DELETE) zu den entsprechenden Controller-Funktionen.

**Inhalt**:

    Die Routen sind nur für die Anfrageverarbeitung zuständig.
    Sie rufen die Funktionen aus den Controller-Dateien auf.

## 2. Controllers

**Zweck**:

    Verarbeiten der HTTP-Anfragen und -Antworten.
    Rufen die Service-Methoden auf, um die Geschäftslogik auszuführen.

**Inhalt**:

    Die Controller nehmen die Anfragen vom Client entgegen (z.B. req und res in Express).
    Sie sind für das Routing der Anfragen an die entsprechenden Service-Methoden verantwortlich.
    Nach der Ausführung der Geschäftslogik wird eine Antwort an den Client gesendet.

## 3. Services

**Zweck**:

    Enthalten die Geschäftslogik und kümmern sich um die Interaktion mit der Datenbank (z.B. CRUD-Operationen).
    Die Services führen die tatsächlichen Aufgaben aus, die für die Funktionsweise der Anwendung erforderlich sind.

**Inhalt**:

    Die Services führen die Hauptlogik aus, wie das Erstellen von Benutzern, Authentifizierung, Berechnungen oder Datenbankabfragen.
    Sie sind nicht für HTTP oder die Kommunikation mit dem Client verantwortlich, sondern handeln die Datenverarbeitung und Datenbankoperationen.