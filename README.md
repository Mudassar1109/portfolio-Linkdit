# LinkDit Portfolio

Portfolio website of **Muhammad Mudassar Elahi** (LinkDit – Web Designer & Developer).

## Files
- `index.html` – the whole website (HTML, CSS, JS in one file)
- `images/` – logo and project screenshots

## Run locally
Just open `index.html` in a browser.

## Host free on GitHub Pages
1. Push these files to a GitHub repository.
2. Repository → Settings → Pages.
3. Source: "Deploy from a branch", Branch: `main`, folder: `/ (root)` → Save.
4. Your site goes live at `https://<username>.github.io/<repo-name>/`.

## Other free ways to go live
- **Netlify Drop:** open app.netlify.com/drop and drag the whole extracted folder in. Live in seconds.
- **Cloudflare Pages / Vercel:** connect the GitHub repository and deploy (no build command needed).
- **Custom domain:** buy a domain, then add it in the Pages / Netlify settings (they show the DNS records to set).

## Edit
- Contact details: search for `923197013743` and `elahimudassasr1@gmail.com` in `index.html`.
- Projects: copy a `<a class="card proj ...">` block in the "Selected Work" section and replace the image, title and link.

## Features
Animated network background, typewriter headline, preloader, custom cursor, 3D tilt, command palette (Ctrl/Cmd + K), project planner (sends brief to WhatsApp), project filter + lightbox, FAQ, dark/light theme.

## Setup checklist
- **Form to Gmail:** get a free access key at web3forms.com, then paste it in `var KEY=''` in `index.html`.
- **Client reviews:** add real reviews in `var T=[]` (the section stays hidden until you add one).
- **Pricing:** edit the three cards in the `#pricing` section.
- **Photo:** replace `images/mudassar.jpg` with your own photo.
- **Link preview (WhatsApp/Facebook):** in the `og:image` meta tag, use the full URL of your logo, e.g. `https://yourdomain.com/images/logo.jpg`.
- **Analytics:** paste the Google Analytics or Plausible script just before `</head>`.
- **Google:** add your site in Google Search Console after you connect your domain.
