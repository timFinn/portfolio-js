# Timothy Finnegan — Portfolio

Personal portfolio site for Timothy Finnegan, a Senior Software Engineer specializing in
game engines, real-time 3D, AI integration, and XR/VR.

## Tech Stack

- **Framework:** Next.js 15 (App Router) with Turbopack
- **Language:** TypeScript, React 19
- **Styling:** Tailwind CSS v4
- **Fonts:** Space Grotesk + JetBrains Mono (via `next/font`)
- **Analytics:** Vercel Analytics
- **Hosting:** Vercel

## Project Structure

```
app/
  page.tsx              # Home (hero, expertise, featured work)
  about/                # Bio and background
  contact/              # Contact info, form, resume download
  projects/
    page.tsx            # Project index + tech stack
    [id]/page.tsx       # Per-project detail page
  layout.tsx            # Root layout, fonts, header/footer
  globals.css           # Tailwind v4 theme + custom utilities
components/             # Header, Footer, ProjectCard, ResumeButton
lib/projects.ts         # Project content (single source of truth)
public/                 # Static assets, resume PDF, project images
```

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Scripts

| Command         | Description                       |
| --------------- | --------------------------------- |
| `npm run dev`   | Start the dev server (Turbopack)  |
| `npm run build` | Production build                  |
| `npm run start` | Run the production build locally  |
| `npm run lint`  | Run ESLint                        |

## Editing Content

- **Projects:** edit `lib/projects.ts` — adding, removing, or reordering entries
  automatically updates the projects index, detail pages, and `generateStaticParams`.
- **Home / About / Contact copy:** edit the corresponding `app/<route>/page.tsx`.
- **Resume PDF:** replace `public/resume.pdf`.
- **Project images:** drop into `public/projects/` and reference from `lib/projects.ts`.

## Deployment

Pushes to `main` deploy automatically via Vercel.
