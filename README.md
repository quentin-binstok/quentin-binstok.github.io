# Personal website

Static site built with Astro and Tailwind CSS, with no frontend framework.

## Commands

```sh
pnpm install
pnpm dev      # local dev server
pnpm build    # production build in dist/
pnpm preview  # preview the production build
```

## Content

Markdown lives in `src/content/`. Filenames become URL slugs, so `src/content/portfolio/1_PIC.md` is served at `/portfolio/1_PIC/`.

- `src/content/portfolio/*.md` — project entries. Frontmatter: `title`, `excerpt`, optional `date`, `order`, `tags`, `cover`.
- `src/content/contributions/*.md` — publications, posters, talks, etc. Frontmatter: `title`, `category`, optional `date`, `venue`, `location`, `type`, `excerpt`, `citation`, `paperurl`, `slidesurl`, `bibtexurl`, `doi`, `links`.
- `src/content/pages/about.md` — the text of the index page.

Categories are grouped automatically on `/contributions/`. Known categories and their display order are defined in `src/data/site.ts`; unknown categories are appended alphabetically.

## Layout and design

- `src/layouts/BaseLayout.astro` — page shell: mobile bar, fixed side navigation, main column and optional right column.
- `src/layouts/ContentLayout.astro` — layout for portfolio and contribution detail pages.
- `src/components/` — navigation, profile card, icons, headers and theme toggle.
- `src/styles/global.css` — colour tokens (light and dark), metallic surfaces, prose styles and layout rules.
- `src/data/site.ts` — name, bio, links, navigation, CV path and category labels.

## Assets

Put public files in `public/`: images in `public/images/`, PDFs in `public/files/`. The profile picture is `public/images/profile.png`; the CV is `public/files/CV_Binstok_english.pdf`.
