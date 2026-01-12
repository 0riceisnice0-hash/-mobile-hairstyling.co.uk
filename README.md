# Harriet Bartley Mobile Hairstyling

A clean, modern, static website for a UK mobile hairdresser based in Aylesbury, Buckinghamshire.

**Intended Domain:** [mobile-hairstyling.co.uk](https://mobile-hairstyling.co.uk) *(configure DNS after deployment)*

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

The contact form uses [Formspree](https://formspree.io/) to send emails to harrietbartley@hotmail.co.uk. 

**Current Setup:**
The form is already configured with a working Formspree endpoint (`https://formspree.io/f/xwpkgpzd`). The form includes:
- Success message display when submission succeeds
- Error message display when submission fails  
- Automatic form clearing after successful submission
- Proper validation for required fields

**To Update the Formspree Endpoint (if needed):**
1. Create a free account at [formspree.io](https://formspree.io/)
2. Create a new form project
3. Copy your form endpoint (format: `https://formspree.io/f/YOUR_FORM_ID`)
4. In `contact.html`, find the form tag (around line 74) and update the `action` attribute:
   ```html
   <form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
5. The form will automatically send submissions to the email address configured in your Formspree account

**Form Features:**
- Success state: Green message "Thank you! Your message has been sent. I will get back to you soon."
- Error state: Red message "Oops! There was a problem sending your message. Please try again or call directly."
- All form fields are validated before submission
- JavaScript handling in `assets/js/main.js` (initContactForm function)

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
