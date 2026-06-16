# E Ti Vengo a Cercare 2026 — Siena Music Contest

Landing page del contest di musica originale per artisti, cantautori e band under 35.
28 dicembre 2026, Teatro dei Rinnovati, Siena.

## Stack

Pagina statica in HTML con Tailwind CSS (Play CDN) e font Forma DJR Display (WOFF2).
Tipografia e spaziature fluide (`clamp`), animazioni di movimento, gallery con lightbox,
form di iscrizione collegato a Formspree.

## Sviluppo locale

```bash
cd site
npx live-server --port=5500
```

## Struttura

```
site/
  index.html        pagina
  fonts/            Forma DJR Display (woff2)
  img/
    gallery/        foto gallery (versioni web)
    hero/           foto hero (versione web)
    *.png, *.svg    logo e asset di brand
```

## Form di iscrizione (Formspree)

Sostituire `INSERISCI_FORM_ID` nell'attributo `action` del form in `site/index.html`
con l'endpoint del proprio form Formspree, e verificare la casella email di destinazione.
Demo e testo del brano sono campi link (Drive / WeTransfer / SoundCloud).
