# OBS Websocket Bot for Twitch
Dieser Bot hat in der Version 1.0 die Funktion die Kamera in OBS auf vordefinierte Positionen zu verschieben. 
Dies geht mittels !camera <position> (Ausführbar für den Broadcaster und die Moderatoren).

## Installation
Folgendes muss auf dem PC vorhanden sein:

* [NodeJS](https://nodejs.org/en/)
* [Open Broadcaster Software](https://obsproject.com/de)
* [OBS Websocket](https://obsproject.com/forum/resources/obs-websocket-remote-control-obs-studio-from-websockets.466/)

### Konfiguration von OBS Websocket
Zunächst gehst du in OBS über Werkzeuge auf **WebSockets-Servereinstellungen** und dann vergewisserst du dich dass in **WebSockets-Server aktivieren** ein Häkchen drinne ist.

Der Port sollte standardmäßig **4444** sein, den kannst du auch so lassen wenn dein System diesen nicht schon belegt. Danach machst du einen Haken bei **Authentifizierung aktivieren** und vergibst ein Passwort und klickst auf **Okay**

### Initiale Installation des Bots
Nachdem du dir das aktuellste [Release](https://github.com/derrobin154/OBS-Websocket-Bot-for-Twitch/releases) heruntergeladen und in einen Ordner entpackt hast, öffnest du zunächst die ```install.bat``` und gibst folgende Daten in der Kommandozeile ein:

* ``KANALNAME`` ist der Name deines Twitch Channels
* ``USERNAME`` ist der Name deines Twitch Accounts (meist der selbe wie der vom Kanal)
* ``OAUTH`` ist der Authentifizierung-Token für Twitch welchen du [hier](https://twitchapps.com/tmi/) erstellen kannst.
* ``OBS_IP`` ist die IP Adresse des WebSockets (meist 127.0.0.1 außer du benutzt das Skript auf einem anderen PC als mit welchem du Streamst)
* ``OBS_PORT`` ist der vorher festgelegte Port (Standard: 4444)
* ``OBS_PASSWORD`` ist das vorher festgelegte Passwort
* ``OBS_ITEMCAMERA`` ist der Name der Kameraquelle (Wichtig: Die Quelle muss in jeder Szene gleich heißen. Darf in einer Szene die Kamera nicht verschiebbar sein, so musst du diese umbenennen)

Als letztes drückst du ENTER und er installiert die nötigen Abhängigkeiten, danach schließt sich das Fenster automatisch.

Sobald das Kommandozeilenfenster geschlossen ist, kannst du mit der ``start.bat`` den Bot starten und im Streamchat dürfte dann stehen ``OBS Websocket Bot aktiv``

### Kamerapositionen festlegen
Sollten die vorher festgelegten Kamerapositionen bei dir nicht richtig sein oder du generell eigene möchtest kannst du diese in der ``camerapos.json`` festlegen.
Dafür kannst du die Kamera in OBS an die gewünsche Stelle verschieben und dann (wenn der Bot läuft) ``!camerapos`` ausführen um die aktuelle Position angezeigt zu bekommen.

Danach gehst du in die ``camerapos.json`` und editierst entweder einen vorhandenen Eintrag oder fügst einen neuen hinzu:
```
"untenrechts": {
    "x": 1524.938720703125,
    "y": 1038.719970703125
  },
```
* ``untenrechts`` ersetzt du mit der gewünschten Kameraposition
* ``x`` mit der X Position welche dir der Bot genannt hat
* ``y`` mit der Y Position welche dir der Bot genannt hat

**WICHTIG: Nach der geschweiften Klammer darf nur ein Komma stehen wenn ein weiterer Eintrag folgt. Sonst findet der Bot die Kamerapositionen nicht.)**

## Fehler oder Probleme
Sollten Fehler auftreten bitte ich diese unter Issues zu melden. Sollten Probleme bei der Verwendung / Einrichtung auftreten stehe ich gerne via Discord zur Verfügung.