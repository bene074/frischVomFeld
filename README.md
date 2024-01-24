# FrischVomFeld

a [Sails v1](https://sailsjs.com) application


### Links

+ [Sails framework documentation](https://sailsjs.com/get-started)
+ [Version notes / upgrading](https://sailsjs.com/documentation/upgrading)
+ [Deployment tips](https://sailsjs.com/documentation/concepts/deployment)
+ [Community support options](https://sailsjs.com/support)
+ [Professional / enterprise options](https://sailsjs.com/enterprise)


### Version info

This app was originally generated on Thu Nov 09 2023 15:03:45 GMT+0100 (Mitteleuropäische Normalzeit) using Sails v1.5.8.

<!-- Internally, Sails used [`sails-generate@2.0.8`](https://github.com/balderdashy/sails-generate/tree/v2.0.8/lib/core-generators/new). -->



<!--
Note:  Generators are usually run using the globally-installed `sails` CLI (command-line interface).  This CLI version is _environment-specific_ rather than app-specific, thus over time, as a project's dependencies are upgraded or the project is worked on by different developers on different computers using different versions of Node.js, the Sails dependency in its package.json file may differ from the globally-installed Sails CLI release it was originally generated with.  (Be sure to always check out the relevant [upgrading guides](https://sailsjs.com/upgrading) before upgrading the version of Sails used by your app.  If you're stuck, [get help here](https://sailsjs.com/support).)
-->

## Spezifikation und Design

### 1.1. Projektziele

**Lokale Vernetzung fördern:**
Das Hauptziel der Webapplikation "FrischVomFeld" ist die Förderung der lokalen Vernetzung zwischen Lebensmittelproduzenten und Konsumenten. Durch die Bereitstellung einer Online-Plattform sollen lokale Bauern und Lebensmittelproduzenten ermutigt werden, ihre Produkte direkt an die Verbraucher in ihrer Umgebung zu verkaufen.

**Transparenz und Bildung:**
"FrischVomFeld" zielt darauf ab, die Transparenz im Lebensmittelkauf zu erhöhen und die Verbraucher über die Herkunft der Produkte sowie über nachhaltige Landwirtschaftspraktiken zu informieren. Durch klare Produktinformationen und aufklärende Inhalte über nachhaltige Praktiken wird ein bewussterer Konsum gefördert.

**Einfacher Zugang zu frischen Produkten:**
Die Applikation soll den Zugang zu frischen, lokal produzierten Lebensmitteln erleichtern. Durch einfache Such- und Bestellprozesse können Verbraucher schnell und unkompliziert frische Produkte direkt von lokalen Produzenten erwerben.

**Benutzerfreundlichkeit und Responsiveness:**
Die Entwicklung einer benutzerfreundlichen Oberfläche, die auf verschiedenen Geräten reibungslos funktioniert, ist ein wesentliches Ziel. Dies umfasst auch die Gestaltung eines einfachen und effizienten Bestell- und Liefermanagementsystems, das sowohl für Verbraucher als auch für Produzenten leicht zu nutzen ist.

**Feedback und ständige Verbesserung:**
Ein Bewertungs- und Feedbacksystem wird implementiert, um die Zufriedenheit der Nutzer zu messen und wertvolles Feedback für die Produzenten zu sammeln. Dieses Feedback soll zur kontinuierlichen Verbesserung der Plattform genutzt werden.

Mit "FrischVomFeld" wird eine Brücke zwischen lokalen Lebensmittelproduzenten und Verbrauchern geschlagen, die es ermöglicht, frische Produkte auf einfache und bequeme Weise zu erwerben, während gleichzeitig das Bewusstsein für nachhaltige und lokale Konsumpraktiken geschärft wird.

### 1.2. Personas

#### Lokaler Produzent - Hans Bauer
![Hans Bauer](assets/images/readme/hans.png)

**Alter:** 52 Jahre

**Beruf:** Landwirt und Lebensmittelproduzent

**Charakteristika:** Engagiert und stolz auf seine landwirtschaftliche Arbeit. Technisch nicht sehr versiert, bevorzugt einfache und intuitive Lösungen. Interessiert an nachhaltiger Landwirtschaft und lokaler Wirtschaftsförderung.

**Motivation, die "FrischVomFeld" zu nutzen:** Sucht nach effizienten Wegen, seine Produkte lokal zu vermarkten und neue Kunden zu gewinnen.

#### Bewusste Verbraucherin - Maria Grün
![Maria Grün](assets/images/readme/maria.png)

**Alter:** 28 Jahre

**Beruf:** Umweltwissenschaftlerin

**Charakteristika:** Engagiert in Umweltschutz und nachhaltigem Konsum. Technisch versiert und offen für neue Technologien. Gesundheitsbewusst und interessiert an lokaler, organischer Ernährung.

**Motivation, die Plattform "FrischVomFeld" zu nutzen:** Sucht eine zuverlässige Quelle für frische, lokal produzierte Lebensmittel.

#### Beschäftigter Elternteil - Tim Schmidt
![Tim Schmidt](assets/images/readme/Tim.png)

**Alter:** 35 Jahre

**Beruf:** IT-Projektmanager

**Charakteristika:** Beschäftigt mit beruflichen Verpflichtungen und der Betreuung seiner kleinen Kinder. Gesundheits- und qualitätsbewusst, legt Wert auf frische und nachhaltige Lebensmittel für seine Familie.

**Motivation, die Plattform "FrischVomFeld" zu nutzen:** Sucht eine schnelle und einfache Möglichkeit, frische und gesunde Lebensmittel zu bestellen.

### 1.3. Kontextdiagramm

![Kontextdiagramm](assets/images/readme/kontextDiagram.png)

### 1.4 Aktoren und Use Cases

![Usecasediagramm](assets/images/readme/usecaseDiagramm.png)

#### Akteure:

- **Besucher:** Potenzielle Käufer, die nach frischen, lokal produzierten Lebensmitteln suchen.
- **Käufer:** Endverbraucher, die von einem vereinfachten Zugang zu frischen Lebensmitteln profitieren.
- **Verkäufer:** Lokale Bauern und Lebensmittelproduzenten, die ihre Produkte über die Plattform anbieten.
- **Admin:** Verantwortlich für die Verwaltung und den reibungslosen Betrieb der Plattform.


#### Use-Cases:

- **Produktlisting erstellen**
  - **Beschreibung:** Der Verkäufer kann auf der Plattform ein neues Produktlisting erstellen, um seine
    Waren anzubieten. Er gibt alle notwendigen Informationen wie Produktname, Beschreibung, Preis
    und Verfügbarkeit an, und lädt Bilder des Produktes hoch, um den Kunden eine visuelle Vorstellung
    des Produktes zu bieten
  - **Akteur:** Verkäufer
  - **Auslösendes Ereignis:** Klick auf "neues Produkt".


- **Produktinformationen aktualisieren**
  - **Beschreibung:** Wenn sich Details zu einem Produkt ändern, kann der Verkäufer die
    Produktinformationen auf der Plattform aktualisieren. Dies umfasst Änderungen an der
    Produktbeschreibung, dem Preis, der Verfügbarkeit oder den Produktbildern, um sicherzustellen,
    dass die Kunden stets aktuelle und korrekte Informationen erhalten.
  - **Akteur:** Verkäufer
  - **Auslösendes Ereignis:** Klick auf "ändern" in Produktübersicht.


- **Produktlisting löschen**
  - **Beschreibung:** Der Verkäufer kann ein Produktlisting entfernen, wenn das Produkt nicht mehr
    verfügbar ist oder aus anderen Gründen nicht mehr auf der Plattform gelistet werden soll. Dies hilft,
    die Plattform aktuell und übersichtlich zu halten und vermeidet mögliche Verwirrung oder Frustration
    bei den Kunden.
  - **Akteur:** Verkäufer
  - **Auslösendes Ereignis:** Klick auf "löschen" in Produktübersicht.


- **Bestellung aufgeben**
  - **Beschreibung:** Der Kunde kann durch die Produktlistings browsen, Produkte in den Warenkorb
    legen und die Bestellung abschließen. Dabei werden ihm die ausgewählten Produkte und der
    Gesamtpreis, um ihm eine informierte Kaufentscheidung zu ermöglichen.
  - **Akteur:** Kunde
  - **Auslösendes Ereignis:** Klick auf "Bestellen" im Warenkorb.


- **Bewertung abgeben**
  - **Beschreibung:** Nach dem Erhalt und Testen der Produkte kann der Kunde auf der Plattform eine
    Bewertung abgeben. Er kann Kommentare schreiben, um seine Erfahrungen mit
    dem Produkt und dem Verkäufer zu teilen und anderen Kunden bei ihrer Kaufentscheidung zu helfen.
  - **Akteur:** Kunde
  - **Auslösendes Ereignis:** Ausfüllen des textareas und Klick auf "bewerten" Button clicken.


- **Admin-Dashboard**
  - **Beschreibung:** Der Admin hat Zugang zu einem Dashboard, von dem aus er die Plattform
    verwalten kann. Er kann Benutzer und Kategorien überprüfen, Feedback von Kunden lesen und
    ggf. Verkäufer und Käufer löschen, um die Qualität und Sicherheit der Plattform zu gewährleisten.
  - **Akteur:** Admin
  - **Auslösendes Ereignis:** Click auf "Admin" Button im header.


- **Benutzerregistrierung**
  - **Beschreibung:** Ein Besucher kann sich auf der Plattform registrieren, um als Kunde oder
    Verkäufer aufzutreten. Durch die Eingabe notwendiger Informationen wie Name, E-Mail-Adresse und
    Passwort, sowie die Auswahl der Rolle (Kunde oder Verkäufer) wird ein neues Benutzerkonto erstellt.
  - **Akteur:** Besucher
  - **Auslösendes Ereignis:** Klick auf "Registrieren".


- **Produktinformationen suchen**
  - **Beschreibung:** Der Kunde kann auf der Plattform nach bestimmten Produkten suchen oder durch
    Kategorien browsen, um Produkte zu finden, die seinen Interessen entsprechen. Durch eine Suchoption und Kategoriefilter
    kann er die angezeigten Produkte eingrenzen. Auf den Produktseiten erhält der Kunde Informationen zu den Produkten,
    einschließlich Bilder, Preis und Kundenbewertungen.
  - **Akteur:** Kunde, Besucher
  - **Auslösendes Ereignis:** Such- und Filtervorgang von Produkten.


## Design

### 2.1. Moodboard

![Moodboard](assets/images/readme/moodboard.png)

### 2.2. Style Tile

+ [Style Tile](https://www.figma.com/file/Q2ML6EVT5KXCV5eYpCgqwu/Aufgabe-2?type=design&node-id=0%3A1&mode=design&t=hCkmGMtfKtQJWjQ1-1)

### 2.3. Wireframe

+ [Wireframe](https://www.figma.com/file/Q2ML6EVT5KXCV5eYpCgqwu/Aufgabe-2?type=design&node-id=0%3A1&mode=design&t=hCkmGMtfKtQJWjQ1-1)

### 2.4. ER-Diagramm

![ER-Diagramm](assets/images/readme/ER-Diagramm.png)


## Implementierung

### Produktlisting erstellen

## Optimierung

### 4.1. SEO

### Maßnahmen
- kurze, gut von Menschen lesbare URLs mit wenig dynamische Parametern
- geringe Hierarchie in der URL
- Benutzen von HTTPS (durch Render)
- responsive, auch für Mobile Devices nutzbar
- keine dead links
- Social Media Links
- einzigartigen, auf die Zielgruppe zugeschnittenen Content
- alt-tag Hinzugefügt

### Suchbegriffe
- Lokale Lebensmittel online kaufen
- Bauernmarkt online Plattform
- Lokale Bauern finden
- Regionale Frischeprodukte
- Saisonale Produkte lokal kaufen
- Bio-Produkte von lokalen Erzeugern
- Komfortables Einkaufen von regionalen Produkten
- Nachhaltige Landwirtschaft

### Performance
Nach dem ersten Performance Test mit Lighthouse hatten wir folgendes Ergebnis:
![Performance](assets/images/readme/performance_old.png)

#### Verbesserungsmaßnahmen

- Bilder zu WebP konvertiert
- resolution switch implementieren


&#8594; eine Verbesserung von +11 Punkten in der Performance


![Performance](assets/images/readme/performance.png)


