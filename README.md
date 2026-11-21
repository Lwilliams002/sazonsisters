# Sazón Sisters website

A plain static site. No install and no build step. Open `index.html` in a browser to preview it.

## Change things
- **Hours, phone, address, promo, Toast link, "today" banner:** edit `data/site.js`.
  - Promo: change or remove the `promo` block (set `promo: null` to hide it).
  - Banner: set `todayNote: "Closed Sunday for a private event"`, or `null` to hide it.
- **Menu:** edit `data/menu.js`. Add `soldOut: true` to dim an item, `vegan: true` for the V tag, `promo: true` for the BOGO tag.
- Prices on the site are copied from Toast and do not update by themselves.

## Turn on the catering form
1. Go to https://formspree.io and create a free account with the email that should receive catering requests.
2. Create a new form. Formspree gives you a link like `https://formspree.io/f/abcdwxyz`.
3. Copy the part after `/f/` into `formspreeId` in `data/site.js`.
4. Submit a test request from the live site, and confirm the email arrives (check spam the first time).

Until then, the form tells visitors to call the truck.

## Test
```bash
node --test tests/
```

## Put it online (free)
- **Cloudflare Pages** or **Netlify**: create a new site, drag in this whole folder, and publish.
- Then point your Instagram bio link at the new address.
