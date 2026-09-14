# SEO & Deployment Checklist for Jefin Agilbert Portfolio

This repository (`jefinagilbert`) is built using **Next.js 14**, **React 18**, **TypeScript**, and **Tailwind CSS**. It serves dual purposes:
1. **GitHub Profile README** rendered automatically on `github.com/jefinagilbert`
2. **Interactive Developer Portfolio** deployable to GitHub Pages (`jefinagilbert.github.io/jefinagilbert/`), Vercel, or custom domains.

---

## 🔍 SEO Implementations

- [x] **Primary Title Tag**: `Jefin Agilbert | Software Engineer | Node.js, Distributed Systems & React Native`
- [x] **Meta Description**: Accurate summary focusing on 3+ years experience, sub-50ms API response pipelines, Kafka streaming, Redis caching, and React Native.
- [x] **Keywords**: Software Engineer, Backend Engineer, Node.js Developer, React Native Developer, PostgreSQL, Apache Kafka, Redis, Microservices, System Design, Chennai.
- [x] **OpenGraph & Twitter Cards**: Complete OpenGraph schema (`og:type`, `og:title`, `og:description`, `og:image`, `og:url`).
- [x] **Schema.org Structured Data**: JSON-LD Person schema markup including alma mater, employer (`Marlow Navigation`), skills, and official social links.
- [x] **Robots & Sitemap**: `public/robots.txt` and `public/sitemap.xml` configured for crawler indexing.
- [x] **Web Manifest & Favicon**: `public/manifest.json` and `public/favicon.svg` with high-resolution vector icon.
- [x] **Responsive Viewport & Semantic HTML**: Accessible semantic landmarks (`<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`) and ARIA labels on all interactive buttons.

---

## 🚀 How to Run & Deploy

### Local Development
```bash
npm install
npm run dev
```
Runs the local dev server on `http://localhost:3000`.

### Production Build
```bash
npm run build
```
Generates a static production bundle in the `./out` directory.

### Deploying to GitHub Pages
1. Push this repository to `github.com/jefinagilbert/jefinagilbert`.
2. Go to **Settings** > **Pages** > **Build and deployment**.
3. Under **Source**, select **GitHub Actions**.
4. The automated workflow `.github/workflows/deploy.yml` will automatically build and publish your site!
