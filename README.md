# Maa Kamakhya Enterprises

Static website for Maa Kamakhya Enterprises (rice mill solutions, West Champaran, Bihar).
Plain HTML, CSS and JavaScript. No build step, backend or Node.js needed, so it works as-is on GitHub Pages.

## Run locally
Open `index.html`, or run `python3 -m http.server 8000` and visit `http://localhost:8000`.

## Deploy on GitHub Pages
Push to the `main` branch. The workflow in `.github/workflows/static.yml` publishes the site.
(Or: repository Settings > Pages > choose the `main` branch and root folder.)

## TODO: upload photos
Every photo spot on the site shows a placeholder with the file name it expects.
Add your photo with **exactly that name** and it replaces the placeholder automatically.
`.jpg` is expected; `.jpeg`, `.webp` and `.png` with the same name also work.
Tip: keep each photo under about 300 KB (resize to ~1600 px wide) so pages load fast.

| Where it shows | Upload to |
|---|---|
| Home hero (large photo) | `images/hero/hero.jpg` |
| Home "About us" photo | `images/about/about-1.jpg` |
| About page photo | `images/about/about-2.jpg` |
| Parboiling (Home + Technologies) | `images/technologies/parboiling.jpg` |
| Steaming (Home + Technologies) | `images/technologies/steaming.jpg` |
| Drying (Home + Technologies) | `images/technologies/drying.jpg` |
| Projects page, Plants | `images/plants/plant-1.jpg`, `plant-2.jpg`, `plant-3.jpg` |
| Projects page, Machinery | `images/machinery/machinery-1.jpg`, `machinery-2.jpg`, `machinery-3.jpg` |
| Projects page, Projects | `images/projects/project-1.jpg`, `project-2.jpg`, `project-3.jpg` |

Until a file exists, the placeholder stays; nothing breaks. Browser dev tools may log a harmless 404 for each missing photo.
`images/gallery/` is reserved for extra photos if you add more spots later.

Logo: `images/logo/mke-logo.png` (full logo, used for link previews) and `images/logo/mke-mark.png` (square crop used in the header, footer and browser tab).

## Company details
Edit `js/company-config.js` (phone, email, GSTIN, address, WhatsApp number). Elements marked `data-company="..."` update automatically.
The same details also appear as plain text in the HTML (for search engines and no-JS visitors), so after changing them search the `.html` files for the old value. Also update `index.html` (JSON-LD block) when the address or phone changes.

## Contact form
GitHub Pages has no server, so the form on `contact.html` opens WhatsApp or the visitor's email app with the enquiry pre-filled.
For real form storage later, connect a service such as Formspree or Web3Forms.

## Files
- `index.html`, `about.html`, `services.html`, `technologies.html`, `projects.html`, `contact.html`, `404.html`
- `css/style.css` - all styling (colours and fonts are variables at the top)
- `js/script.js` - menu, photo loader, company details, contact form
- `sitemap.xml`, `robots.txt` - SEO. If the site URL changes, update the URLs in them and the `canonical` links.
