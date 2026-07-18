# carlos-quant.github.io

Personal research site — economic/financial law + quantitative method.
Built as a plain Jekyll site (no theme dependency), ready for GitHub Pages.

## 1. Put it on GitHub

1. Create a new repository on GitHub named exactly **`carlos-quant.github.io`**
   (this exact name is what makes GitHub Pages serve it at the root domain).
2. Push these files to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/carlos-quant/carlos-quant.github.io.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages**, and under "Build and deployment"
   set Source to **Deploy from a branch**, branch `main`, folder `/ (root)`.
4. Your site will be live at `https://carlos-quant.github.io` within a
   couple of minutes.

No build step, Gemfile, or local Ruby install is required — GitHub Pages
builds Jekyll sites automatically.

## 2. Publish a new article

Add a new file to `_posts/`, named `YYYY-MM-DD-your-title.md`, e.g.:

```
_posts/2026-08-02-materiality-and-event-studies.md
```

with this front matter at the top:

```yaml
---
title: "Materiality and Event Studies"
tag: "Securities Law"
reading_time: 6
excerpt: "A one-sentence summary shown on the homepage and articles page."
---
```

Everything below the second `---` is the article body, written in Markdown.
Commit and push — the site rebuilds automatically and the article appears
on the homepage and `/articles.html`.

## 3. Edit the "About" page or bio

- `about.html` — your background/bio text
- `index.html` — homepage hero copy, focus areas, role list
- `_config.yml` — site title, tagline, description, GitHub/Medium usernames

## 4. Preview locally (optional)

If you want to preview changes before pushing, with Ruby installed:

```bash
gem install bundler jekyll
bundle exec jekyll serve
```

Then open `http://localhost:4000`.

## Structure

```
_config.yml          site settings
index.html            homepage
about.html             about page
articles.html          full article archive
_posts/                 your articles (Markdown)
_layouts/                default.html (page shell), post.html (article shell)
_includes/                 header.html, footer.html
assets/css/style.css        design system (colors, type, layout)
assets/js/main.js            dark/light mode toggle
```
