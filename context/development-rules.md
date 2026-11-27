# Development rules

## Stack

- Next.js with the App Router.
- React and TypeScript.
- Tailwind CSS for styling.
- Keep the generated `src/` layout and project scripts unless a concrete need justifies a change.

## Implementation conventions

- Keep `src/app/page.tsx` focused on composing the page; place substantial sections in their own components as described in the [section map](./section-map.md).
- Prefer semantic HTML, native form controls, and typed component props.
- Use server components by default. Add a client boundary only for interactions that require browser state or event handlers.
- Keep content close to its section until it becomes shared or needs a separate data source.
- Reuse shared layout and visual patterns; do not add dependencies for functionality that native browser APIs or existing packages already provide.
- Use the project's configured lint and build commands. Fix errors introduced by the change; do not suppress diagnostics without a documented reason.

## Accessibility and quality

- Use a logical heading hierarchy and landmarks.
- Ensure keyboard access, visible focus, descriptive link and button names, and sufficient contrast.
- Associate form labels with their controls and show validation or submission feedback accessibly.
- Do not claim a registration has been saved until a real submission destination has been implemented and confirmed.
- Optimize images and avoid layout shifts where practical.

## Scope and content integrity

- Preserve the reference site's community-first tone and key event details.
- Treat event schedule, location, contact information, and sign-up behavior as owner-verified content.
- Do not introduce unsupported impact claims or fabricated social proof.
- Keep changes focused on the landing page and its directly related styles and components.
- Update these context documents when the intended design, structure, or implementation rules materially change.
