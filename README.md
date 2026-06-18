# E Ti Vengo a Cercare 2026 — Siena Music Contest

Landing page del contest di musica originale per artisti, cantautori e band under 30.
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

Il form è collegato all'endpoint Formspree `https://formspree.io/f/mojzzgrw`.
Le candidature arrivano alla casella configurata su Formspree (notifiche anche a info@etvac.it).
Demo e testo del brano sono campi link (Drive / WeTransfer / SoundCloud).
