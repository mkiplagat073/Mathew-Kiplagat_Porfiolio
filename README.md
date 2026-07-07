# Mathew Kiplagat — Portfolio

A dark-mode, industrial/process-engineering themed portfolio site built with
plain HTML, CSS and JS. No build step, no framework — just three files.

## 1. Customize the content

Everything you need to change lives in `index.html`. Search for these and replace:

| Find | Replace with |
|---|---|
| `Your Name` | Your actual name (appears ~6 times) |
| `your.email@example.com` | Your real email |
| `+254 700 000 000` | Your real phone number |
| `linkedin.com/in/yourname` | Your LinkedIn URL |
| `Embu, Kenya` | Your location |
| Project cards (`<article class="project-card">`) | Your real projects — title, description, and the `chip` tags for tools used |
| Skill gauge labels + `data-value` percentages | Your actual skills and self-rated proficiency (0–100) |
| Hero headline / About paragraphs | Your own voice — keep it, but make it yours |

Everything is plain text inside `index.html` — no templating, so `Ctrl+F` is your friend.

## 2. Preview locally

Just open `index.html` in your browser. Or, for a local server (recommended so
relative paths behave exactly like they will online):

```bash
cd portfolio
python3 -m http.server 8000
# then visit http://localhost:8000
```

## 3. Push to GitHub

```bash
cd portfolio
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

(Create the empty repo on github.com first — no README/license, so it stays empty for this push.)

## 4. Turn on GitHub Pages (free hosting)

1. Go to your repo on GitHub → **Settings** → **Pages**.
2. Under "Build and deployment", set **Source** to `Deploy from a branch`.
3. Set **Branch** to `main` and folder to `/ (root)`. Save.
4. Wait ~1 minute. Your site will be live at:
   `https://YOUR_USERNAME.github.io/YOUR_REPO/`

## 5. Updating the site later

Any time you want to change something:

```bash
# edit index.html / styles.css / script.js
git add .
git commit -m "Update projects section"
git push
```

GitHub Pages redeploys automatically within ~1 minute of every push.

## 6. Optional: custom domain

Buy a domain (Namecheap, Google Domains, etc.), then in the same GitHub Pages
settings page add it under "Custom domain" and follow GitHub's DNS
instructions (usually an A record or CNAME).

## 7. Optional: make the contact form actually send email

Right now the form just shows a confirmation message locally — it doesn't
send anywhere. To make it functional without a backend, sign up for a free
tier at [Formspree](https://formspree.io) or use
[Netlify Forms](https://docs.netlify.com/forms/setup/) (if you host on
Netlify instead of GitHub Pages), then point the form's `action` attribute at
the endpoint they give you.

## File structure

```
portfolio/
  index.html     — all content and structure
  styles.css     — all styling (colors, layout, responsive rules)
  script.js      — nav toggle, scroll-spy, gauge animations, form handler
  README.md      — this file
```
