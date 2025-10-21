# 🚀 Portfolio Deployment Guide

## 📋 **Step-by-Step Deployment Instructions**

### **Step 1: Install Dependencies**
```bash
cd portfolio-v2
npm install
```

### **Step 2: Test Your Build Locally**
```bash
npm run build
npm run start
```

### **Step 3: Deploy to GitHub**

#### **Option A: Using GitHub Actions (Recommended)**
1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio deployment"
   git branch -M main
   git remote add origin https://github.com/Vasu2604/VasavPatel.github.io.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository: https://github.com/Vasu2604/VasavPatel.github.io
   - Click **Settings** → **Pages**
   - Source: **GitHub Actions**
   - Save

#### **Option B: Manual Deployment**
```bash
npm run build
npm run deploy
```

### **Step 4: Set Up Custom Domain (Namecheap + GitHub Student Pack)**

#### **4.1: Get Your Domain from Namecheap**
1. Go to [Namecheap.com](https://namecheap.com)
2. Search for your desired domain (e.g., `vasavpatel.dev`)
3. Use your **GitHub Student Developer Pack** credits
4. Purchase the domain

#### **4.2: Configure Domain in GitHub**
1. Go to your repository **Settings** → **Pages**
2. Under **Custom domain**, enter your domain (e.g., `vasavpatel.dev`)
3. Check **Enforce HTTPS**
4. Click **Save**

#### **4.3: Configure DNS in Namecheap**
1. Login to Namecheap
2. Go to **Domain List** → **Manage** your domain
3. Go to **Advanced DNS**
4. Add these records:

```
Type: A Record
Host: @
Value: 185.199.108.153
TTL: Automatic

Type: A Record  
Host: @
Value: 185.199.109.153
TTL: Automatic

Type: A Record
Host: @
Value: 185.199.110.153
TTL: Automatic

Type: A Record
Host: @
Value: 185.199.111.153
TTL: Automatic

Type: CNAME
Host: www
Value: Vasu2604.github.io
TTL: Automatic
```

### **Step 5: Verify Deployment**
- Your site will be available at: `https://vasavpatel.dev`
- GitHub Pages URL: `https://vasu2604.github.io/VasavPatel.github.io`

## 🔧 **Troubleshooting**

### **If images don't load:**
- Check image paths in `public/images/`
- Ensure images are committed to repository

### **If deployment fails:**
- Check GitHub Actions tab for errors
- Verify all dependencies are installed
- Check `next.config.js` configuration

### **If custom domain doesn't work:**
- Wait 24-48 hours for DNS propagation
- Check DNS records in Namecheap
- Verify domain is added in GitHub Pages settings

## 📱 **Final Result**
Your portfolio will be live at:
- **Custom Domain**: `https://vasavpatel.dev`
- **GitHub Pages**: `https://vasu2604.github.io/VasavPatel.github.io`

## 🎉 **Success!**
Your modern, dynamic portfolio is now live with:
- ✨ All 7 projects displayed
- 🎭 3D animations and effects
- 📱 Responsive design
- 🌙 Dark/Light mode toggle
- 🚀 Fast loading with Next.js
