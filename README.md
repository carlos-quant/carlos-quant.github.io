# Carlos Vega — research site

Minimalist Jekyll site, ready for GitHub Pages. White background, Cormorant
Garamond for headings, Inter for body text, monochrome ink palette.

## 1. Put it on GitHub

1. Create a repository named exactly **`carlos-quant.github.io`** (this
   exact name is what makes GitHub Pages serve it at the root domain).
2. Push these files to `main`:
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/carlos-quant/carlos-quant.github.io.git
   git push -u origin main
   ```
3. In the repo: **Settings → Pages** → Source: **Deploy from a branch**,
   branch `main`, folder `/ (root)`.
4. Live at `https://carlos-quant.github.io` within a couple of minutes.

No build step or local Ruby install required.

## 2. Publish a new article

Add a file to `_posts/`, named `YYYY-MM-DD-your-title.md`:

```yaml
---
title: "Your Title"
tag: "Category"
reading_time: 5
excerpt: "One sentence shown on the homepage and articles page."
---
```

Everything below the second `---` is Markdown. Commit and push.

## 3. Edit copy

- `about.html` — bio
- `index.html` — hero, focus areas, role list
- `_config.yml` — site title & description (currently "Carlos Vega" /
  "Researching the intersection of mathematics, law, and economics.")

## Structure

```
_config.yml
index.html              homepage
about.html               about page
articles.html             full article archive
_posts/                    your articles (Markdown)
_layouts/                    default.html, post.html
_includes/                     header.html, footer.html, lang-banner.html
assets/css/style.css             design system
assets/js/main.js                 header language cycling (EN/ES/FR/ZH)
```
