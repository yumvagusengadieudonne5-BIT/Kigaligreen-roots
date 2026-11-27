# Design system

## Visual direction

Keep Kigali Green Roots warm, welcoming, and community-led. The supplied Kigali Green Roots landing-page reference is the visual source of truth: an off-white canvas, forest-green type and actions, a bright leaf-green planting-day band, and a deep green activities/footer treatment.

## Color roles

- **Canvas:** warm ivory for the page background.
- **Primary text:** deep forest green for headings and prominent labels.
- **Body text:** muted green-gray for readable supporting copy.
- **Action color:** forest green for primary buttons and links.
- **Highlight:** pale lime green for planting-day facts and selected footer actions.
- **Soft surface:** subtle sage green for the FAQ and small icon backgrounds.
- **Borders:** quiet warm gray-green lines; avoid heavy shadows.

Use role-based CSS custom properties rather than scattering raw values through components.

## Typography

- Use the existing DM Sans and Bricolage Grotesque font setup consistently.
- Keep headings direct, generous, and easy to scan.
- Use restrained uppercase eyebrows to label sections.
- Maintain readable body text and line-height at mobile widths.

## Shape and spacing

- Favor generous whitespace, thin dividers, and understated rounded corners.
- Keep benefit items open and editorial rather than card-heavy.
- Use compact rounded cards for planting activities and the sign-up form.
- Align sections to one responsive content container.

## Imagery and interaction

- Use the supplied local planting illustration in the hero.
- Provide meaningful alternative text for informative imagery.
- Keep navigation, FAQ controls, and form feedback keyboard-accessible.
- The sign-up form validates locally and opens WhatsApp with a prefilled message; it does not claim to store registrations.

## Responsive behavior

- Keep all content usable without horizontal scrolling.
- Preserve the two-column hero and event layouts when there is room; stack them cleanly on narrow screens.
- Use a compact mobile menu with clear open/close state.
- Keep form controls comfortably touch-sized on phones.
- Honor the reduced-motion preference.
