# Pre-Launch Checklist

## Critical Tasks (Must Do Before Launch)

### 1. Images ⚠️ PRIORITY
- [ ] Add company logo to `public/images/logo.png`
- [ ] Add Open Graph image to `public/images/og-image.jpg` (1200x630px)
- [ ] Add all project images to `public/images/projects/`
  - [ ] Pardis Prosperity images (featured + gallery)
  - [ ] Kailasa images (featured + gallery)
  - [ ] Any additional projects

### 2. Contact Form Setup ⚠️ PRIORITY
- [ ] Create Formspree account at https://formspree.io/
- [ ] Create a new form and get your form ID
- [ ] Update `app/contact/page.tsx` line 13:
  ```
  const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
  ```
  Replace `YOUR_FORM_ID` with actual ID

### 3. Contact Information ⚠️ REQUIRED
- [ ] Update phone number in `components/Footer.tsx` (line 64)
- [ ] Update phone number in `app/contact/page.tsx` (line 119)
- [ ] Update phone number in `lib/seo.ts` (line 84)
- [ ] Update email address in `components/Footer.tsx` (line 65)
- [ ] Update email address in `app/contact/page.tsx` (line 124)
- [ ] Verify office address is correct in all locations

### 4. Projects Data
- [ ] Review and update `data/projects.json`
- [ ] Add real RERA numbers for each project
- [ ] Update possession dates
- [ ] Add actual pricing (or keep "Contact for pricing")
- [ ] Verify all project details are accurate
- [ ] Update project descriptions and amenities

### 5. Google Search Console
- [ ] Set up Google Search Console
- [ ] Get verification code
- [ ] Update `app/layout.tsx` line 70:
  ```
  verification: {
    google: "your-actual-google-verification-code",
  },
  ```

### 6. Social Media Links
- [ ] Update Facebook URL in `lib/seo.ts` line 61
- [ ] Update Instagram URL in `lib/seo.ts` line 62
- [ ] Verify links work correctly

### 7. Analytics (Optional but Recommended)
- [ ] Set up Google Analytics 4
- [ ] Add tracking code to `app/layout.tsx`

## Secondary Tasks (Important but not blocking)

### Content Enhancements
- [ ] Write and add actual blog posts
- [ ] Expand project descriptions with more details
- [ ] Add testimonials (create a testimonials section)
- [ ] Add achievements/awards section

### SEO Enhancements
- [ ] Create location-specific content for more areas
- [ ] Add FAQ section for common queries
- [ ] Create comparison pages (Chembur vs Bandra)
- [ ] Add floor plans for projects

### Technical
- [ ] Set up custom domain
- [ ] Configure SSL certificate (handled by hosting)
- [ ] Set up email forwarding for info@sanjaydevnaniprojects.com
- [ ] Test all forms thoroughly

## Testing Checklist

Before deploying to production:

- [ ] Test on multiple devices (mobile, tablet, desktop)
- [ ] Test on different browsers (Chrome, Firefox, Safari, Edge)
- [ ] Check all internal links work
- [ ] Verify all images load correctly
- [ ] Test contact form submission
- [ ] Check responsive design on all pages
- [ ] Verify meta tags using [Meta Tags](https://metatags.io/)
- [ ] Run PageSpeed Insights test
- [ ] Check mobile-friendliness with Google's tool

## Post-Launch Tasks

After site is live:

- [ ] Submit sitemap to Google Search Console
  - URL: `https://yourdomain.com/sitemap.xml`
- [ ] Submit site to Bing Webmaster Tools
- [ ] Register on real estate portals
- [ ] Set up Google My Business
- [ ] Create social media profiles (if not exists)
- [ ] Share on social media platforms
- [ ] Monitor Google Analytics for traffic
- [ ] Check Search Console for indexing issues

## Quick Commands

**Development:**
```bash
npm run dev
```

**Build & Test Locally:**
```bash
npm run build
```

**Preview Build:**
```bash
npx serve@latest out
```

## Deployment Platforms

Choose one:

1. **Netlify** (Easiest)
   - Drag & drop the `out/` folder
   - Or connect GitHub repo

2. **Vercel** (Best for Next.js)
   - Connect GitHub repo
   - Auto-deploy on push

3. **Cloudflare Pages** (Fast CDN)
   - Connect GitHub repo
   - Free SSL and global CDN

## Important Notes

- ⚠️ **Never commit sensitive data** (API keys, passwords) to Git
- ⚠️ **Always test locally** before deploying
- ⚠️ **Keep backups** of your projects data and images
- ⚠️ **Monitor form submissions** regularly to not miss leads

## Need Help?

Refer to:
- `SETUP-GUIDE.md` for detailed setup instructions
- `README.md` for project overview
- Next.js docs: https://nextjs.org/docs
- Tailwind CSS docs: https://tailwindcss.com/docs

---

Good luck with your launch! 🚀
