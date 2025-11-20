# GitHub Deployment Guide for Paradise Nursery

## Setting Up Your GitHub Repository

### Step 1: Create a New Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right
3. Select "New repository"
4. Fill in the details:
   - **Repository name:** `paradise-nursery`
   - **Description:** "A React-based houseplant shopping application"
   - **Visibility:** Public
   - **DO NOT** initialize with README (we already have one)
5. Click "Create repository"

### Step 2: Initialize Git in Your Project

Open terminal/command prompt in your project folder and run:

```bash
git init
git add .
git commit -m "Initial commit: Paradise Nursery Shopping Application"
```

### Step 3: Connect to GitHub

Replace `YOUR-USERNAME` with your GitHub username:

```bash
git remote add origin https://github.com/YOUR-USERNAME/paradise-nursery.git
git branch -M main
git push -u origin main
```

### Step 4: Verify Upload

1. Refresh your GitHub repository page
2. You should see all your project files
3. Your README.md should be displayed at the bottom

---

## Deploying to GitHub Pages

### Option 1: Using Vite + GitHub Pages

1. **Install gh-pages package:**

```bash
npm install --save-dev gh-pages
```

2. **Update package.json:**

Add these lines to your `package.json`:

```json
{
  "homepage": "https://YOUR-USERNAME.github.io/paradise-nursery",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. **Update vite.config.js:**

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/paradise-nursery/',  // Add this line
  server: {
    port: 3000,
    host: true
  }
})
```

4. **Deploy to GitHub Pages:**

```bash
npm run deploy
```

5. **Enable GitHub Pages:**
   - Go to your repository settings
   - Scroll to "Pages" section
   - Under "Source", select "gh-pages" branch
   - Click "Save"
   - Your site will be live at: `https://YOUR-USERNAME.github.io/paradise-nursery`

### Option 2: Using Vercel (Recommended - Easier)

1. **Create account at [Vercel.com](https://vercel.com)**

2. **Install Vercel CLI:**

```bash
npm install -g vercel
```

3. **Deploy:**

```bash
vercel
```

Follow the prompts:
- Set up and deploy? Y
- Which scope? (select your account)
- Link to existing project? N
- Project name? paradise-nursery
- Directory? ./
- Build command? `npm run build`
- Output directory? dist

4. **Your site is live!** Vercel will give you a URL like:
   `https://paradise-nursery-xxxx.vercel.app`

### Option 3: Using Netlify

1. **Create account at [Netlify.com](https://netlify.com)**

2. **Install Netlify CLI:**

```bash
npm install -g netlify-cli
```

3. **Build your project:**

```bash
npm run build
```

4. **Deploy:**

```bash
netlify deploy
```

For production deployment:

```bash
netlify deploy --prod
```

---

## Sharing Your Project

### For Peer Review Submission

Share the following links:

1. **GitHub Repository URL:**
   ```
   https://github.com/YOUR-USERNAME/paradise-nursery
   ```

2. **Live Demo URL (if deployed):**
   ```
   https://YOUR-USERNAME.github.io/paradise-nursery
   ```
   OR
   ```
   https://paradise-nursery-xxxx.vercel.app
   ```

### What Reviewers Can See

In your GitHub repository, reviewers will be able to:
- View all your source code
- See your project structure
- Read your README.md
- Clone and run the project locally
- Review your commit history
- See your code organization

---

## Best Practices for Submission

### 1. Clean Up Your Code

Before submission, make sure:
- Remove console.log statements
- Delete unused files
- Format code consistently
- Check for typos in comments

### 2. Update README

Ensure your README includes:
- Project description
- Installation instructions
- How to run the project
- Features list
- Technologies used
- Screenshots (optional but impressive)

### 3. Test Everything

Before submitting:
- Test all three pages
- Test cart functionality
- Try on mobile view
- Test in different browsers
- Verify all links work

### 4. Document Your Work

Create a quick walkthrough:
```markdown
## Project Walkthrough

1. Landing page features:
   - Background image ✓
   - Company description ✓
   - Get Started button ✓

2. Product listing features:
   - 10+ products ✓
   - 4 categories ✓
   - Add to cart buttons ✓
   - Cart badge counter ✓

3. Shopping cart features:
   - Display all cart items ✓
   - Quantity controls ✓
   - Delete functionality ✓
   - Total calculation ✓
   - Continue shopping button ✓
   - Checkout button ✓
```

---

## Common Issues and Solutions

### Issue: Push Rejected

**Solution:**
```bash
git pull origin main --rebase
git push origin main
```

### Issue: Images Not Showing on GitHub Pages

**Solution:**
Make sure your `vite.config.js` has the correct `base` path:
```javascript
base: '/paradise-nursery/'
```

### Issue: 404 Error on Refresh

**Solution:**
For GitHub Pages, create a `public` folder with a `404.html` file:
```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="refresh" content="0;url=/">
  </head>
  <body></body>
</html>
```

---

## Repository Checklist

Before submission, verify:

- [ ] All code is pushed to GitHub
- [ ] Repository is set to Public
- [ ] README.md is complete
- [ ] .gitignore is present
- [ ] No node_modules in repository
- [ ] Project runs locally with `npm install` && `npm run dev`
- [ ] All features work as expected
- [ ] Code is clean and commented
- [ ] Live demo works (if deployed)

---

## Getting Help

If you encounter issues:

1. **GitHub Issues:**
   - Check if others had similar problems
   - Search for error messages

2. **Documentation:**
   - [Git Documentation](https://git-scm.com/doc)
   - [GitHub Docs](https://docs.github.com)
   - [Vite Deployment](https://vitejs.dev/guide/static-deploy.html)

3. **Community:**
   - Stack Overflow
   - GitHub Discussions
   - Discord communities

---

## Final Submission Format

When submitting, provide:

```
Project Name: Paradise Nursery Shopping Application
Repository URL: https://github.com/YOUR-USERNAME/paradise-nursery
Live Demo: [URL if deployed]

Description:
A fully functional React-based e-commerce application for browsing
and purchasing houseplants. Features include a landing page, product
listing with categories, and a complete shopping cart system with
quantity management.

Technologies: React, React Router, Vite, CSS3
```

---

Good luck with your submission! 🌱
