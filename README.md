# Helk Frontend

Minimalistlik mitmeleheline disainiprojekt, mis on kirjutatud ainult HTML-i, CSS-i ja JavaScriptiga. Lehtede vahel liikumiseks kasuta sisseehitatud navigeerimist.

## Eeltingimused

- macOS või muu platvorm, kus on saadaval terminal
- Paigaldatud Python 3 (macOS Sonoma sisaldab seda vaikimisi)

## Käivitamine lokaalselt

1. Ava terminal ja liigu projekti kausta:
   ```bash
   cd /Users/robinrattasep/frontend_app
   ```
2. Käivita lihtne HTTP-server:
   ```bash
   python3 -m http.server 3000
   ```
3. Ava brauseris aadress `http://localhost:3000/index.html`.

Navigeeri päise menüüst teistele alamlehtedele (`Galerii`, `Teenused`, `Meeskond`, `Kontakt`). Kõik interaktsioonid toimivad ilma backendi toeta.

## Struktuur

- `index.html` – avaleht ja kangelassektsioon
- `galerii.html` – visuaalsete paanide kogumik
- `teenused.html` – teenuste tutvustus
- `meeskond.html` – tiimiliikmete vaatamine
- `kontakt.html` – vorm ja tegevusnupud
- `style.css` – ühtne stiil klaasistunud visuaaliga
- `app.js` – interaktiivsed funktsioonid (tume režiim, loendid, animatsioonid)

# frontend_application
