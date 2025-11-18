# Moms in Catalonia – Content Guide

This repo is set up so writers (and a future AI agent) can publish content by editing **Markdown** files in GitHub.

The blog currently reads posts from:

```text
content/
  blog/
    <slug>.md
```

Each file in `content/blog` is **one article/itinerary**.

---

## 1. File location & naming

- Folder: `content/blog`
- File name: `<slug>.md`
  - Use lowercase, words separated by `-` (kebab-case).
  - Example: `park-guell-la-salut.md`

The `slug` in the frontmatter should match the file name (without `.md`).

---

## 2. Frontmatter schema

Each file starts with a YAML frontmatter block between `---` lines.

Required keys (all simple strings):

- `slug` – URL-friendly id (same as file name without `.md`).
- `title` – Human-friendly title of the article.
- `location` – City/area, e.g. `Barcelona`, `Montserrat`.
- `distance` – Rough distance from Barcelona, e.g. `2 km`, `30 km`.
- `duration` – Visit length, e.g. `3 hours`, `Full day`.
- `age` – Recommended ages, e.g. `2–8 years`, `All ages`.
- `summary` – 1–2 sentence card summary shown on the Blog list.

### Example frontmatter

```md
---
slug: park-guell-la-salut
title: "Park Güell & La Salut"
location: "Barcelona"
distance: "2 km"
duration: "3 hours"
age: "2–8 years"
summary: "Explore the colorful mosaics of Park Güell, then relax in the nearby La Salut neighborhood."
---
```

Notes:

- Keep values as plain text strings. Quotes are optional unless you use special characters.
- Do **not** add nested objects or arrays in the frontmatter; keep it simple.

---

## 3. Body content (Markdown)

After the frontmatter block, add the article body in normal Markdown:

```md
---
slug: park-guell-la-salut
# ...other fields...
---

# Park Güell & La Salut

Short intro paragraph about why this outing is good for families.

## Before you go

- How to get there
- What to bring (snacks, water, sun hat…)

## On the day

Describe the flow of the outing in short sections.

## Tips for moms

Any small details that make life easier (toilets, shade, stroller-friendly parts, etc.).
```

You can use standard Markdown features:

- `#` / `##` / `###` headings
- bullet lists and numbered lists
- **bold** and _italic_ text

No need to embed images yet; those can come later.

---

## 4. Writer workflow (GitHub web UI)

1. Go to the repo on GitHub: `cataloniatrips/momsincatalonia`.
2. Navigate to `content/blog/`.
3. To add a new article:
   - Click **Add file → Create new file**.
   - Name the file `<slug>.md`.
   - Paste the frontmatter + body using the format above.
   - At the bottom, write a short commit message (e.g. `Add: Park Güell & La Salut itinerary`).
   - Click **Commit directly to main** (or create a branch + PR if you prefer review).
4. To edit an article:
   - Click the existing file.
   - Click the pencil ✏️ **Edit** button.
   - Update text.
   - Commit with a short description.

Vercel automatically rebuilds and deploys when changes land on the `main` branch.

---

## 5. AI agent workflow (future)

When an AI agent is in charge of generating articles, the simplest contract is:

1. **Read existing posts**

   - List files under `content/blog/` using the GitHub API.
   - Avoid clobbering existing slugs unless you intend to update them.

2. **Create a new post**

   - Choose a `slug` (kebab-case, unique).
   - Create a new file `content/blog/<slug>.md` via the GitHub API.
   - Write a valid frontmatter block with **all required keys** followed by Markdown body.

3. **Update a post**

   - Fetch the existing file.
   - Preserve the frontmatter keys; update only the values or body text.
   - Commit changes via PR so a human can review before merge (recommended).

4. **Never do**
   - Do not remove required frontmatter keys.
   - Do not change file extensions or move files out of `content/blog/`.
   - Do not commit binary blobs or HTML into these markdown files.

If you keep this structure stable, both humans and automation can safely add and update content, and the site will continue to render everything correctly.
