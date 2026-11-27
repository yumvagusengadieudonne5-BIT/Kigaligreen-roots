# Page layout

## Page order

1. **Site header** — brand, primary “Join Us” action, and navigation.
2. **Hero** — short mission eyebrow, main headline, supporting copy, primary sign-up link, reassurance about provided tools and saplings, and planting image.
3. **Benefits** (`#about`) — three concise reasons to participate.
4. **Activities** (`#activities`) — tree planting, urban gardening, and tree-care basics.
5. **Next planting / sign-up** (`#next-planting`, `#signup`) — date pattern, time, location, what to bring, and the registration form.
6. **Footer** — brand summary, quick links, and contact information.

## Navigation

Use in-page links that point to real section IDs:

- Home → `#top`
- About → `#about`
- Activities → `#activities`
- Next Planting → `#next-planting`
- Contact → `#contact`
- Join Us / hero action → `#signup`

The page root should expose the `top` anchor. The footer contact area should expose `contact`.

## Responsive structure

- Header: brand and primary action remain clear; collapse or adapt navigation for narrow screens without hiding destinations.
- Hero: use a balanced text-and-image layout on wide screens and a readable vertical flow on mobile.
- Benefits and activities: use a multi-column layout only when cards retain comfortable readable widths.
- Event details and form: group related information clearly; keep the form controls full-width on small screens.
- Footer: stack link groups and contact information on narrow screens.

## Page composition

Keep the top-level route responsible for section order and shared page layout. Each substantial section should own its content and responsive presentation; use stable IDs for navigation and avoid duplicate IDs.
