# Harriet Bartley Mobile Hairstyling

A clean, modern, static website for a UK mobile hairdresser based in Aylesbury, Buckinghamshire.

**Live Site:** [mobile-hairstyling.co.uk](https://mobile-hairstyling.co.uk)

## Features

- Mobile-first responsive design
- Clean, accessible markup
- No frameworks or build tools required
- Optimised for GitHub Pages hosting
- SEO-friendly with meta tags, sitemap, and robots.txt

## Pages

- **Home** (index.html) - Hero, services preview, gallery preview, reviews
- **Weddings** (weddings.html) - Wedding hair services and process
- **Hair Styling** (hair-styling.html) - Mobile hair services overview
- **Pricing** (pricing.html) - Price guide for all services
- **Gallery** (gallery.html) - Image gallery with lightbox
- **Reviews** (reviews.html) - Client testimonials
- **Contact** (contact.html) - Contact form (Formspree), map, social links
- **Links** (links.html) - Recommended vendors directory

## Project Structure

```
/
├── index.html
├── weddings.html
├── hair-styling.html
├── pricing.html
├── gallery.html
├── reviews.html
├── contact.html
├── links.html
├── sitemap.xml
├── robots.txt
├── README.md
└── assets/
    ├── css/
    │   └── styles.css
    ├── js/
    │   └── main.js
    └── img/
        ├── README.md (image replacement guide)
        └── gallery/
```

## Setup for GitHub Pages

1. Push this repository to GitHub
2. Go to repository Settings > Pages
3. Under "Source", select the branch (usually `main`) and root folder (`/`)
4. Click Save
5. Your site will be available at `https://yourusername.github.io/repository-name/`

For a custom domain (mobile-hairstyling.co.uk):
1. Add a CNAME file with your domain name, or configure in GitHub Pages settings
2. Update your domain's DNS to point to GitHub Pages
3. Enable HTTPS in GitHub Pages settings

## Customisation Guide

### Contact Form

The contact form uses [Formspree](https://formspree.io/). To enable it:
1. Create a free account at formspree.io
2. Create a new form and copy the form endpoint
3. Replace `https://formspree.io/f/REPLACE_ME` in contact.html with your endpoint

### Images

See `assets/img/README.md` for detailed instructions on:
- Adding favicon and touch icons
- Replacing gallery placeholders
- Adding feature section images
- Image optimisation tips

### Content

- **Business details**: Search and replace contact info, phone numbers, email addresses
- **Pricing**: Update prices in pricing.html
- **Reviews**: Replace placeholder testimonials in reviews.html and index.html
- **Links**: Update vendor recommendations in links.html

### Styling

All styles are in `assets/css/styles.css`. Key customisation points:
- CSS custom properties at the top of the file for colours, fonts, spacing
- Mobile breakpoints at 576px, 768px, and 992px

## Browser Support

- Chrome, Firefox, Safari, Edge (latest versions)
- Mobile browsers on iOS and Android
- Progressive enhancement for older browsers

## Accessibility

- Semantic HTML structure
- ARIA labels where appropriate
- Keyboard navigation support
- Skip to main content link
- Good colour contrast ratios
- Focus indicators

## Performance

- No external dependencies or frameworks
- System fonts (no font loading)
- Minimal JavaScript
- CSS organised for maintainability
- Images lazy loaded in gallery

## License

This project is created for Harriet Bartley Mobile Hairstyling. All rights reserved.
