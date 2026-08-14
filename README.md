# Pawlos Addisu Portfolio

Interactive terminal-style portfolio for Pawlos Addisu, a backend and systems engineer. The live site is available at [pawlos-portfolio.vercel.app](https://pawlos-portfolio.vercel.app/).

## Highlights

- Linux terminal-inspired visual system with JetBrains Mono typography.
- Global command console opened with `/`, `Ctrl+K`, or the floating terminal button.
- Commands for navigation, profile information, projects, contact links, resume, and themes.
- Terminal matrix background with pointer response and reduced-motion support.
- Scramble-text reveal and hover diffusion effect on the hero name.
- GUI theme picker with amber, green, and blue terminal palettes.
- Responsive project, skills, contact, and navigation views.
- React Router navigation with Vercel SPA rewrites for direct route visits.

## Tech Stack

- React 19
- Vite
- React Router
- Tailwind CSS
- React Icons
- ESLint

## Local Development

### Requirements

- Node.js 18 or newer
- npm

### Install

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open the local URL printed by Vite, normally `http://127.0.0.1:5173/`.

### Verify the project

```bash
npm run lint
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Terminal Commands

Open the command console and run `help` to see the complete list. Common commands include:

```text
home
about
skills
projects
projects type-heric
contact
whoami
neofetch
theme green
github
resume
```

The theme command accepts `amber`, `green`, or `blue`. Theme selection is persisted in local storage and can also be changed with the palette button in the top-right corner.

## Resume

Place the resume PDF at:

```text
public/Pawlos_Addisu_Resume.pdf
```

The navbar and terminal console reference it at `/Pawlos_Addisu_Resume.pdf`.

## Project Structure

```text
src/
  components/       Reusable UI, terminal, animation, and portfolio sections
  context/          Shared context modules
  data/             Project metadata
  layouts/          App-wide page layout
  pages/            Home, projects, and contact routes
public/             Static images and the optional resume PDF
vercel.json         SPA rewrite configuration for Vercel
```

## Deployment

The project is configured for Vercel. Import the repository, keep the default Vite build settings, and deploy. The `vercel.json` rewrite ensures `/projects` and `/contact` continue to work when opened or refreshed directly.

## Contact

- Email: [paulpapi94@gmail.com](mailto:paulpapi94@gmail.com)
- GitHub: [github.com/paulGitRoot](https://github.com/paulGitRoot)
