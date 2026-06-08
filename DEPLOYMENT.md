# Deployment Guide for Your Portfolio

Here are the best options to host your React portfolio for public access:

## Option 1: Netlify (Recommended - Free & Easy)

**Pros:**
- Free hosting with SSL
- Automatic deployments from Git
- Custom domain support
- Fast CDN

**Steps:**
1. Build your portfolio:
   ```bash
   npm run build
   ```

2. Create a Netlify account at [netlify.com](https://www.netlify.com/)

3. Drag and drop the `build` folder to Netlify dashboard
   - OR connect your GitHub repository for automatic deployments

4. Your site will be live instantly with a URL like: `your-site-name.netlify.app`

**For custom domain:**
- Buy a domain (e.g., from Namecheap, GoDaddy)
- Add it in Netlify dashboard
- Update DNS settings as instructed

---

## Option 2: Vercel (Free & Popular)

**Pros:**
- Free hosting with SSL
- Excellent for React apps
- Automatic deployments
- Fast global CDN

**Steps:**
1. Build your portfolio:
   ```bash
   npm run build
   ```

2. Create a Vercel account at [vercel.com](https://vercel.com/)

3. Import your project from GitHub
   - Vercel will auto-detect it's a Create React App
   - Click "Deploy"

4. Your site will be live at: `your-project.vercel.app`

---

## Option 3: GitHub Pages (Free)

**Pros:**
- Completely free
- Integrated with GitHub
- Good for personal projects

**Steps:**
1. Build your portfolio:
   ```bash
   npm run build
   ```

2. Install gh-pages (if not already installed):
   ```bash
   npm install gh-pages --save-dev
   ```

3. Add homepage to package.json:
   ```json
   "homepage": "https://aderajew.github.io/portfolio"
   ```

4. Add deploy scripts to package.json:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

5. Deploy:
   ```bash
   npm run deploy
   ```

6. Your site will be at: `https://aderajew.github.io/portfolio`

---

## Option 4: Firebase Hosting (Free Tier)

**Pros:**
- Free tier with generous limits
- Fast hosting
- Good for static sites

**Steps:**
1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Login to Firebase:
   ```bash
   firebase login
   ```

3. Initialize Firebase:
   ```bash
   firebase init
   ```
   - Select "Hosting"
   - Use `build` as public directory
   - Configure as single-page app (yes)

4. Deploy:
   ```bash
   firebase deploy
   ```

---

## Option 5: Cloudflare Pages (Free)

**Pros:**
- Free hosting with SSL
- Very fast global network
- Automatic deployments

**Steps:**
1. Build your portfolio:
   ```bash
   npm run build
   ```

2. Create account at [pages.cloudflare.com](https://pages.cloudflare.com/)

3. Connect your GitHub repository
4. Configure build settings:
   - Build command: `npm run build`
   - Build output directory: `build`

5. Deploy

---

## Pre-Deployment Checklist

Before deploying, make sure to:

1. **Update metadata:**
   - Edit `public/index.html` - update title, meta description
   - Add favicon if desired

2. **Check environment variables:**
   - Your EmailJS credentials are in the code (safe for client-side)
   - No sensitive data should be exposed

3. **Test the build:**
   ```bash
   npm run build
   npm start -s  # Test the production build locally
   ```

4. **Update resume:**
   - Add your actual resume PDF to `public/resume.pdf`
   - The download buttons will work automatically

5. **Update profile image:**
   - Replace `src/assets/profile.png` with your actual photo

---

## Recommended: Netlify or Vercel

For a portfolio, I recommend **Netlify** or **Vercel** because:
- Easiest to set up
- Automatic deployments
- Free SSL certificates
- Fast performance
- Custom domain support

Both are excellent choices. Netlify is slightly easier for beginners, while Vercel is optimized for React applications.

---

## Custom Domain Setup

After deploying with any provider, you can add a custom domain:

1. Buy a domain (Namecheap, GoDaddy, Google Domains, etc.)
2. Go to your hosting provider's dashboard
3. Add the custom domain
4. Update DNS settings as instructed
5. Wait for DNS propagation (usually 24-48 hours, often faster)

---

## Post-Deployment

After your site is live:

1. Test all functionality (contact form, navigation, etc.)
2. Check on mobile devices
3. Share your portfolio link on LinkedIn, GitHub, etc.
4. Add the link to your resume/CV
