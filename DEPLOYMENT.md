# Deployment Guide 🚀

## Quick Deploy to Vercel (5 minutes)

### Method 1: Deploy from GitHub (Recommended)

1. **Push your code to GitHub**
```bash
git init
git add .
git commit -m "Initial commit: Modern portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "Add New Project"
   - Import your repository
   - Vercel auto-detects Next.js - just click "Deploy"
   - Done! Your site is live 🎉

### Method 2: Deploy with Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# For production
vercel --prod
```

## Alternative Platforms

### Netlify

1. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`

2. **Deploy**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

### AWS Amplify

1. Connect your GitHub repository
2. Build settings:
   - Build command: `npm run build`
   - Output directory: `.next`

### Docker

```dockerfile
# Dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

## Environment Variables

If you're using any environment variables, add them in:
- Vercel: Project Settings → Environment Variables
- Netlify: Site Settings → Build & Deploy → Environment

## Custom Domain

### On Vercel:
1. Go to your project settings
2. Click "Domains"
3. Add your custom domain
4. Update DNS records as instructed

### DNS Configuration:
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## Performance Optimization

Already included in this portfolio:
- ✅ Image optimization with Next.js
- ✅ Code splitting
- ✅ Lazy loading components
- ✅ Minified CSS and JS
- ✅ SEO meta tags

## Post-Deployment Checklist

- [ ] Test all links
- [ ] Verify images load correctly
- [ ] Check mobile responsiveness
- [ ] Test contact form
- [ ] Verify social media links
- [ ] Check page load speed (use Lighthouse)
- [ ] Set up Google Analytics (optional)
- [ ] Submit to Google Search Console
- [ ] Test on multiple browsers

## Monitoring

### Vercel Analytics
Enable in your Vercel dashboard for:
- Page views
- Performance metrics
- User insights

### Uptime Monitoring
Consider using:
- Uptime Robot (free)
- Pingdom
- StatusCake

## SSL/HTTPS

Automatic on Vercel, Netlify, and most modern platforms!

## Troubleshooting

### Build fails?
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Images not loading?
- Ensure images are in `public/images/`
- Check file names match exactly (case-sensitive)
- Add fallback images in components

### 3D animation issues?
- Three.js requires client-side rendering
- All components use 'use client' directive
- May need to disable on mobile for performance

## Support

Need help? Check:
- [Next.js Docs](https://nextjs.org/docs)
- [Vercel Support](https://vercel.com/support)
- Open an issue on GitHub

---

Happy Deploying! 🎉



