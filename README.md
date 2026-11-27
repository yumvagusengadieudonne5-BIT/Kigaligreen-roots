# Kigali Green Roots

Landing-page project for the Kigali Green Roots community tree-planting initiative.

## Development setup

This workspace includes a portable Node.js runtime under `.tools` (ignored by Git). In PowerShell, add it to the current session's `PATH` before running project commands:

```powershell
$nodeDir = Join-Path $PWD '.tools\node-v26.13.1-win-x64'
$env:Path = "$nodeDir;$env:Path"
node --version
npm --version
npm run dev
```

Open <http://localhost:3000> to view the app. Stop the development server with `Ctrl+C`.

Useful checks:

```powershell
npm run lint
npm run build
```

## Project context

See [`context/README.md`](./context/README.md) for product goals, visual direction, development rules, page layout, and section-by-section notes.

The app uses the Next.js App Router, React, TypeScript, Tailwind CSS, and ESLint. The responsive landing page, WhatsApp sign-up flow, and FAQ are implemented in `src/app`.
