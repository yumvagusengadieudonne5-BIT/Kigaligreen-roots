# Hydration mismatch: diagnosis and recovery

## What happened

The reported diff showed the browser expecting an older hero illustration element (`.hero-art` with an `aria-label`) where the server rendered the current `.hero-note` paragraph. That illustration markup is not in the current `src/app/page.tsx`; the current source renders the note followed by the hero image.

The current page also has no browser-dependent render branches, timestamps, or random values. Its initial React state is deterministic. A fresh load before restart and two fresh loads after restarting the development server produced matching markup and no hydration errors. This points to an outdated client/HMR bundle in the previously open tab, rather than a mismatch in the current page source.

## Recovery

1. Start the app from this project using `npm run dev`.
2. Reload the local page with a hard refresh (`Ctrl+Shift+R`).
3. If an error still mentions markup that is no longer in `src/app`, stop and restart this project's development server, then hard-refresh again.
4. If it persists after a fresh restart, test in a private window with extensions disabled and inspect the new server/client diff.

## Preventing real hydration mismatches

- Keep the initial render identical on the server and browser. The current initial values (`menuOpen`, `openFaq`, and `formStatus`) are fixed and deterministic.
- Do not read browser-only values such as `window`, `localStorage`, or browser locale during render. For client-only behavior, render the same initial markup and read browser state after mount.
- Avoid `Date.now()`, `Math.random()`, changing external data, invalid HTML nesting, or direct DOM changes before hydration.
- Do not use `suppressHydrationWarning` to hide a structural mismatch; it does not repair different trees.

## Verification

After restarting the development server, the local app returned HTTP 200, the hero image loaded, and two full page loads reported no hydration errors. `npm run lint` and `npm run build` also passed.
