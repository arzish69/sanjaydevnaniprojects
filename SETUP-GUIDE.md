# Sanjay Devnani Projects - Setup & Deployment Guide

## Project Overview

This is a fully static, SEO-optimized real estate website built with Next.js 16, Tailwind CSS 4, and TypeScript. The site is designed for maximum search engine visibility and fast performance.

## Tech Stack

- **Framework:** Next.js 16 (App Router) with Static Site Generation (SSG)
- **Styling:** Tailwind CSS 4
- **Language:** TypeScript
- **Content:** JSON for projects, MDX ready for blog posts
- **Form Backend:** Formspree (to be configured)

## Key Features Built

### ✅ Pages Created

1. **Home** (`/`) - Hero section, featured projects, location highlights
2. **Projects** (`/projects`) - All projects grouped by status (Ongoing/Upcoming/Completed)
3. **Individual Project Pages** (`/projects/[slug]`) - Dynamic project detail pages
4. **About** (`/about`) - Company information and values
5. **Contact** (`/contact`) - Contact form with Formspree integration
6. **Blog** (`/blog`) - Blog listing page (ready for MDX posts)

### ✅ SEO Location Pages

1. `/flats-in-chembur` - Comprehensive Chembur location page
2. `/2-bhk-in-chembur` - Targeted 2 BHK listings page
3. `/flats-in-bandra` - Bandra location page

### ✅ SEO Features Implemented

- ✓ Proper H1-H3 hierarchy on all pages
- ✓ Unique meta titles and descriptions for each page
- ✓ JSON-LD schema markup (RealEstateBusiness, LocalBusiness, Apartment)
- ✓ Open Graph and Twitter Card meta tags
- ✓ Sitemap.xml (auto-generated)
- ✓ Robots.txt
- ✓ Semantic HTML throughout
- ✓ Strong internal linking structure
- ✓ Mobile-first responsive design

## Setup Instructions

### 1. Install Dependencies

\`\`\`bash
npm install
\`\`\`

### 2. Configure Form Backend (Formspree)

1. Go to [Formspree.io](https://formspree.io/) and create a free account
2. Create a new form and get your form endpoint ID
3. Update the form action in `app/contact/page.tsx`:

\`\`\`typescript
// Line 13 in app/contact/page.tsx
const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
  // Replace YOUR_FORM_ID with your actual Formspree form ID
\`\`\`

### 3. Add Your Images

Create the following directories and add your images:

\`\`\`
public/
  images/
    logo.png (your company logo)
    og-image.jpg (1200x630 for social sharing)
    projects/
      pardis-prosperity-featured.jpg
      pardis-prosperity-1.jpg
      pardis-prosperity-2.jpg
      pardis-prosperity-3.jpg
      kailasa-featured.jpg
      kailasa-1.jpg
      kailasa-2.jpg
\`\`\`

### 4. Update Contact Information

Update phone numbers and email addresses in:
- `components/Footer.tsx`
- `app/contact/page.tsx`
- `lib/seo.ts` (phone number in localBusinessSchema)

### 5. Update Projects Data

Edit `data/projects.json` to:
- Add/remove projects
- Update project details
- Modify RERA numbers, possession dates, pricing
- Update image paths to match your actual images

### 6. Add Google Search Console Verification

In `app/layout.tsx`, replace the placeholder verification code:

\`\`\`typescript
verification: {
  google: "your-actual-google-verification-code",
},
\`\`\`

## Development

Run the development server:

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build & Export

Build the static site:

\`\`\`bash
npm run build
\`\`\`

This generates a fully static site in the `out/` directory ready for deployment.

## Deployment Options

### Option 1: Netlify (Recommended)

1. Push your code to GitHub
2. Connect your repo to Netlify
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `out`
4. Deploy!

### Option 2: Vercel

1. Push to GitHub
2. Import project in Vercel
3. Deploy (automatic configuration)

### Option 3: Any Static Host

Upload the contents of the `out/` folder to any static hosting provider (AWS S3, Cloudflare Pages, etc.)

## Adding New Projects

1. Open `data/projects.json`
2. Add a new project object following the existing structure
3. Add project images to `public/images/projects/`
4. Build the site - the project page will be auto-generated

## Adding Blog Posts (MDX)

1. Create `.mdx` files in `content/blog/`
2. Add frontmatter with title, date, description, etc.
3. The blog system is ready to integrate with `next-mdx-remote`

## SEO Optimization Tips

1. **Update all placeholder content** with real information
2. **Add actual images** - image optimization is crucial for SEO
3. **Customize meta descriptions** for each project in `data/projects.json`
4. **Submit sitemap** to Google Search Console: `https://yourdomain.com/sitemap.xml`
5. **Create quality blog content** regularly for better rankings
6. **Get backlinks** from real estate directories and local websites

## Monitoring & Analytics

Add Google Analytics or other analytics tools by editing `app/layout.tsx` and adding the tracking script in the `<head>` section.

## Support

For issues or questions about the website structure, refer to the Next.js documentation:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Project Structure

\`\`\`
sanjay-devnani-projects/
├── app/                          # Next.js app directory
│   ├── layout.tsx               # Root layout with SEO
│   ├── page.tsx                 # Homepage
│   ├── projects/                # Projects pages
│   ├── about/                   # About page
│   ├── contact/                 # Contact page
│   ├── blog/                    # Blog listing
│   ├── flats-in-chembur/       # SEO location page
│   ├── 2-bhk-in-chembur/       # SEO location page
│   ├── flats-in-bandra/        # SEO location page
│   ├── sitemap.ts              # Auto-generated sitemap
│   └── robots.ts               # Robots.txt
├── components/                  # React components
│   ├── Header.tsx              # Navigation header
│   ├── Footer.tsx              # Site footer
│   ├── ProjectCard.tsx         # Project card component
│   └── JsonLd.tsx              # JSON-LD schema component
├── data/
│   └── projects.json           # Project data
├── lib/
│   └── seo.ts                  # SEO utility functions
├── types/
│   └── index.ts                # TypeScript types
└── public/
    └── images/                 # Static images
\`\`\`

## Next Steps

1. ✅ Replace placeholder images with actual project photos
2. ✅ Configure Formspree for contact form
3. ✅ Update contact information (phone, email, address)
4. ✅ Add Google Analytics tracking code
5. ✅ Submit to Google Search Console
6. ✅ Start creating blog content
7. ✅ Deploy to production

---

Built with ❤️ using Next.js and Tailwind CSS
