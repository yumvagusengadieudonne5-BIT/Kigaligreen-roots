# Section and file map

These are the intended section boundaries for the landing page. Create or adjust the files as implementation begins; keep this map aligned with the actual source tree.

| Page part | Planned file | Responsibility |
| --- | --- | --- |
| Page composition | `src/app/page.tsx` | Compose sections in the documented order and provide the top anchor. |
| Shared document shell | `src/app/layout.tsx` | Root metadata, document language, global styles, and shared layout wrapper. |
| Global tokens and base styles | `src/app/globals.css` | Tailwind import, role-based theme tokens, base typography, and global defaults. |
| Header and navigation | `src/components/site-header.tsx` | Brand, section navigation, and sign-up action. |
| Hero | `src/components/sections/hero-section.tsx` | Mission message, primary action, reassurance, and lead image. |
| Benefits | `src/components/sections/benefits-section.tsx` | Three participation benefits and the `about` anchor. |
| Activities | `src/components/sections/activities-section.tsx` | Three planting-day activity cards and the `activities` anchor. |
| Event details and registration | `src/components/sections/planting-signup-section.tsx` | Planting schedule, time, location, bring-along note, and sign-up form with `next-planting` and `signup` anchors. |
| Footer | `src/components/site-footer.tsx` | Quick links, contact methods, location, and the `contact` anchor. |

## Section notes

- **Header:** keep navigation labels consistent with the page anchors; the sign-up action should scroll to the form.
- **Hero:** retain one clear H1 and one primary action. Keep the provided-tools reassurance close to the action.
- **Benefits:** use the three benefits from the reference, with concise explanatory copy and decorative icons hidden from assistive technology where appropriate.
- **Activities:** describe what volunteers do, not unsupported outcomes. Keep card headings and numbering meaningful without relying on icons alone.
- **Event and sign-up:** make event information scannable. A visual form is not a working registration system until a real destination and success/error feedback are wired up.
- **Footer:** use valid `tel:` and WhatsApp links only after verifying the contact details with the owner.
