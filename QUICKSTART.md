# Quick Start Guide 🚀

Get your portfolio up and running in 5 minutes!

## Step 1: Install Dependencies

```bash
cd portfolio-v2
npm install
```

## Step 2: Add Your Images

Copy your images to `public/images/`:
- `profile.jpg` - Your profile photo
- Project images referenced in `components/Projects.tsx`

## Step 3: Customize Your Info

### Essential Files to Edit:

1. **`components/Hero.tsx`** - Your name and roles
2. **`components/About.tsx`** - Contact info and bio  
3. **`components/Experience.tsx`** - Work history & education
4. **`components/Skills.tsx`** - Your skills
5. **`components/Projects.tsx`** - Your projects

See `CUSTOMIZATION.md` for detailed instructions!

## Step 4: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

## Step 5: Deploy (When Ready)

### Option 1: Vercel (Easiest)
1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repo
4. Click Deploy ✅

### Option 2: Quick Deploy
```bash
npm install -g vercel
vercel
```

## Troubleshooting

### Port 3000 already in use?
```bash
npx kill-port 3000
npm run dev
```

### Build errors?
```bash
rm -rf .next node_modules package-lock.json
npm install
npm run dev
```

### Images not showing?
- Ensure they're in `public/images/`
- Check file names match exactly (case-sensitive)

## File Structure

```
portfolio-v2/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About section
│   ├── Experience.tsx    # Experience section
│   ├── Skills.tsx        # Skills section
│   ├── Projects.tsx      # Projects section
│   ├── Contact.tsx       # Contact section
│   ├── Navigation.tsx    # Nav bar
│   ├── ThreeBackground.tsx # 3D background
│   └── Footer.tsx        # Footer
├── public/
│   └── images/           # Your images here!
├── README.md             # Main documentation
├── CUSTOMIZATION.md      # Customization guide
└── DEPLOYMENT.md         # Deployment guide
```

## Next Steps

✅ Customize your content
✅ Add your images  
✅ Test on mobile
✅ Deploy to Vercel
✅ Share your portfolio!

## Need Help?

- 📖 Read `CUSTOMIZATION.md` for detailed customization
- 🚀 Read `DEPLOYMENT.md` for deployment options
- 💬 Open an issue on GitHub
- 📧 Contact: patelvasav2604@gmail.com

---

Built with ❤️ using Next.js, Three.js, and Tailwind CSS



