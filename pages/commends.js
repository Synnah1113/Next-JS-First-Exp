/*
Fundamentals für eine React/Next.js-Seite:

1. React-Komponente:
   - Jede Seite oder Teil der Seite ist eine Funktion, die JSX zurückgibt.
   - Ohne Komponente passiert nichts, weil React so funktioniert.
   Beispiel: 
     export default function Home() {
       return (<div>Inhalt</div>);
     }

2. JSX:
   - HTML-ähnlicher Code, der beschreibt, wie die Seite aussieht.
   - Ohne JSX kannst du keine Inhalte anzeigen.
   Beispiel:
     return (
       <h1>Hallo Welt</h1>
     );

3. React Import:
   - Importiert React und Hooks (wie useState) für die Funktionalität.
   - In Next.js oft automatisch, aber für Hooks braucht man ihn.
   Beispiel:
     import React, { useState } from 'react';

4. useState (State):
   - Speichert veränderbare Daten, die die Anzeige beeinflussen.
   - Nötig für interaktive oder dynamische Seiten.
   Beispiel:
     const [page, setPage] = useState('home');

5. Event-Handler:
   - Ermöglicht Interaktionen, z.B. Klicks auf Buttons.
   - Ohne Event-Handler keine Benutzerinteraktion.
   Beispiel:
     <button onClick={() => setPage('mods')}>Fav Mods</button>

6. JSX Expressions:
   - JavaScript in JSX, um z.B. Inhalte bedingt anzuzeigen.
   Beispiel:
     { page === 'home' ? <p>Startseite</p> : <p>Andere Seite</p> }

7. Import von Komponenten (optional):
   - Für spezielle Funktionen wie Bilder.
   Beispiel:
     import Image from 'next/image';

Was man nicht unbedingt braucht:
- Inline-Styling (kann man durch CSS ersetzen)
- React.Fragment (kann durch div ersetzt werden)
- target="_blank" im Link (nützlich, aber kein Muss)

Kurz gesagt: 
Für eine funktionierende Seite brauchst du auf jeden Fall eine React-Komponente mit JSX. 
Wenn du Interaktivität möchtest, brauchst du useState und Event-Handler.

*/




/*
Erklärung wichtiger Begriffe und Code-Teile aus dem Beispiel:

1. const
   - Steht für "Konstante".
   - Eine Variable, deren Wert nicht mehr verändert werden soll.
   - Beispiel: const name = "Minecraft"; 
   - Auch wenn der Wert eines Objekts verändert wird, bleibt die Variable selbst konstant zugeordnet.

2. function
   - Definiert eine Funktion, also einen Codeblock, der etwas tut oder einen Wert zurückgibt.
   - Beispiel: 
       function greet() {
         return "Hallo!";
       }

3. export default function Home()
   - Definiert eine React-Komponente namens "Home", die als Standard exportiert wird.
   - So kann die Komponente von anderen Dateien importiert und verwendet werden.
   - React-Komponenten geben JSX zurück (HTML-ähnlichen Code).

4. useState
   - Ein React Hook, mit dem man "State" (also Daten, die sich ändern können) speichert.
   - Beispiel:
       const [page, setPage] = useState('home');
     - page: aktuelle gespeicherte Information (hier die aktive Seite)
     - setPage: Funktion, um den Wert von page zu ändern
   - Wenn man setPage aufruft, merkt React sich die Änderung und aktualisiert die Anzeige.

5. const renderContent = () => { ... }
   - Definiert eine Funktion als Variable (Pfeilfunktion).
   - Diese Funktion entscheidet, was auf der Seite gezeigt wird, abhängig vom Wert von page.
   - "render" bedeutet "anzeigen" oder "darstellen".

6. switch/case oder if/else (in renderContent)
   - Logik, die überprüft, welchen Wert "page" hat.
   - Je nachdem wird ein anderer Inhalt (JSX) zurückgegeben und angezeigt.

7. return
   - Gibt das Ergebnis einer Funktion zurück.
   - In React-Komponenten gibt return das JSX zurück, das auf der Webseite angezeigt wird.

8. JSX
   - HTML-ähnliche Syntax, die man in JavaScript schreibt.
   - Beispiel: <h1>Hallo Welt</h1>
   - React wandelt das in echten HTML-Code für den Browser um.

9. onClick={() => setPage('mods')}
   - onClick ist ein Event-Handler: "Wenn auf das Element geklickt wird..."
   - Die Funktion hinter onClick wird ausgeführt, hier wird die Seite auf "mods" gewechselt.

10. <Image src="/cute1.jpg" ... />
    - Next.js-Komponente, die Bilder lädt und optimiert.
    - src ist der Pfad zum Bild (im public-Ordner).
    - alt beschreibt das Bild für Barrierefreiheit.

11. style={{ ... }}
    - Inline-CSS in React.
    - Stile werden als Objekt geschrieben mit Schlüssel: Wert Paaren.
    - Beispiel: style={{ color: 'white', padding: '2rem' }}

12. fragment <>...</>
    - Ein Container, der keine extra HTML-Tags erzeugt.
    - Nützlich, wenn man mehrere Elemente zusammenfassen will, ohne ein div hinzuzufügen.

Zusammenfassung:
- React-Seiten sind Funktionen (Komponenten), die JSX zurückgeben.
- useState speichert Daten, die sich verändern können.
- Funktionen wie renderContent helfen, den angezeigten Inhalt dynamisch zu steuern.
- JSX kombiniert HTML-ähnlichen Code mit JavaScript, damit Seiten flexibel sind.
- Event-Handler wie onClick reagieren auf Benutzeraktionen und ändern den State.

Wenn du diese Begriffe verstehst, hast du die wichtigsten Bausteine für React-Programmierung drauf!
*/



/*
Übersicht der wichtigsten Imports in React und Next.js:

1. React selbst importieren
----------------------------------
import React from 'react';

- Importiert die React-Bibliothek.
- Früher zwingend notwendig, damit JSX funktioniert.
- In neueren React- und Next.js-Versionen nicht immer nötig, aber Hooks brauchen React import.

2. Hooks importieren (z.B. useState, useEffect)
----------------------------------
import React, { useState, useEffect } from 'react';

- useState: Zum Speichern und Ändern von State/Daten in Komponenten.
- useEffect: Für Nebenwirkungen, z.B. Daten laden oder Code ausführen, wenn sich was ändert.

3. Next.js eigene Komponenten importieren
----------------------------------
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

- Image: Optimiertes Einfügen von Bildern (automatische Größenanpassung, Lazy-Loading).
- Head: Zum Ändern von Meta-Daten der Seite (Titel, Beschreibung, Icons).
- Link: Für interne Navigation zwischen Seiten (sorgt für schnelles clientseitiges Wechseln).

4. CSS oder Styling importieren
----------------------------------
import './styles.css';
import styles from './styles.module.css';

- Für externe CSS-Dateien (globale oder modulare Styles).
- styles.module.css gibt dir CSS-Module mit lokalen Klassennamen (Vermeidet Namenskonflikte).

5. Komponenten aus eigenen Dateien importieren
----------------------------------
import Header from '../components/Header';
import Footer from '../components/Footer';

- Eigene React-Komponenten aus anderen Dateien holen.
- Damit kannst du deine Seite modular und übersichtlich aufbauen.

6. Utility-Funktionen, Klassen, oder Variablen importieren
----------------------------------
import { formatDate, calculateScore } from '../utils/helpers';

- Funktionen oder Variablen aus anderen Dateien importieren.
- Nützlich für wiederverwendbare Hilfsfunktionen.

7. Externe Bibliotheken importieren
----------------------------------
import axios from 'axios';
import _ from 'lodash';

- Drittanbieter-Bibliotheken importieren.
- axios z.B. für HTTP-Anfragen, lodash für nützliche Funktionen.

---

Wichtig:  
- `import` holt Code oder Ressourcen aus anderen Dateien oder Paketen.
- Ohne die passenden Imports kannst du Funktionen, Komponenten oder Variablen nicht benutzen.
- In Next.js liegen Bilder z.B. im `public`-Ordner und werden meist einfach mit Pfad genutzt (außer bei `next/image`).
*/


// noopener -> Verhindert das im selben Tab der link geöffnet wird.

// noreferrer -> "The noreferrer attribute masks your referral links in destination analytics. 
// It protects your site’s information from being transferred to the website your users are navigating to.
// As a result, this causes the links to appear as Direct traffic in Google Analytics, rather than Referral traffic from your specific domain."
