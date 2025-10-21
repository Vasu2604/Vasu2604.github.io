# Customization Guide 🎨

## Quick Customization Checklist

### 1. Personal Information

#### Hero Section (`components/Hero.tsx`)
```typescript
// Update your name
<span className="gradient-text">Your Name</span>

// Update roles in the typing animation
const roles = [
  'Your Role 1',
  'Your Role 2', 
  'Your Role 3',
]

// Update description
"Your personal tagline or description"

// Update resume link
href="YOUR_RESUME_LINK"

// Update social links
href="YOUR_GITHUB_URL"
href="YOUR_LINKEDIN_URL"  
href="mailto:YOUR_EMAIL"
```

#### About Section (`components/About.tsx`)
```typescript
// Update contact info
const info = [
  { icon: User, label: 'Full Name', value: 'Your Name' },
  { icon: Phone, label: 'Phone', value: '+1 XXX XXX XXXX' },
  { icon: Mail, label: 'Email', value: 'your@email.com' },
  { icon: MapPin, label: 'Location', value: 'Your City, State' },
]

// Update bio paragraphs
<p className="text-gray-300 leading-relaxed mb-4">
  Your bio paragraph 1
</p>
```

### 2. Experience & Education

#### Experience Section (`components/Experience.tsx`)
```typescript
const experiences = [
  {
    type: 'work',
    title: 'Your Job Title',
    company: 'Company Name',
    period: 'Start Date - End Date',
    description: [
      'Achievement or responsibility 1',
      'Achievement or responsibility 2',
      'Achievement or responsibility 3',
    ],
  },
  // Add more experiences
]

const education = [
  {
    degree: "Your Degree",
    school: 'Your University',
    period: 'Start - End',
    description: 'Brief description',
  },
  // Add more education
]
```

### 3. Skills

#### Skills Section (`components/Skills.tsx`)
```typescript
const skills = [
  { 
    name: 'Skill Name', 
    icon: SiSkillIcon,  // Import from 'react-icons/si'
    color: '#HEX_COLOR', 
    level: 90  // 0-100
  },
  // Add more skills
]

const softSkills = [
  { name: 'Soft Skill', level: 95 },
  // Add more soft skills
]
```

### 4. Projects

#### Projects Section (`components/Projects.tsx`)
```typescript
const projects = [
  {
    title: 'Project Title',
    description: 'Brief description of the project',
    image: '/images/project-image.png',
    tags: ['Tech1', 'Tech2', 'Tech3'],
    github: 'https://github.com/username/repo',
    live: 'https://project-live-url.com', // or null
  },
  // Add more projects
]
```

### 5. Images

Place your images in `public/images/`:

```
public/
  images/
    profile.jpg          # Your profile photo (400x400px)
    project1.png         # Project images (800x600px)
    project2.png
    ...
```

### 6. Colors & Theme

#### Tailwind Config (`tailwind.config.ts`)
```typescript
colors: {
  primary: {
    // Your primary color shades
    500: '#YOUR_COLOR',
  },
  accent: {
    // Your accent color shades
    500: '#YOUR_COLOR',
  },
}
```

#### Quick Color Presets:

**Blue & Purple (Default)**
```typescript
primary: { 500: '#0ea5e9' }  // Blue
accent: { 500: '#d946ef' }   // Purple
```

**Green & Teal**
```typescript
primary: { 500: '#10b981' }  // Green
accent: { 500: '#06b6d4' }   // Teal
```

**Orange & Red**
```typescript
primary: { 500: '#f97316' }  // Orange  
accent: { 500: '#ef4444' }   // Red
```

### 7. Metadata & SEO

#### Layout (`app/layout.tsx`)
```typescript
export const metadata: Metadata = {
  title: 'Your Name - Your Title',
  description: 'Your portfolio description',
  keywords: ['keyword1', 'keyword2'],
  authors: [{ name: 'Your Name' }],
}
```

### 8. Three.js Background

#### Background Animation (`components/ThreeBackground.tsx`)

Adjust particle count (performance vs visuals):
```typescript
const particlesCount = 5000  // Lower = better performance
```

Change particle colors:
```typescript
const particlesMaterial = new THREE.PointsMaterial({
  color: '#YOUR_COLOR',  // Your color
})
```

Adjust animation speed:
```typescript
particlesMesh.rotation.y = elapsedTime * 0.05  // Slower/faster
```

### 9. Animations

#### Speed up/slow down animations

In any component:
```typescript
transition={{ duration: 0.5 }}  // Adjust duration
```

Disable animations:
```typescript
// Remove or comment out motion components
<div> instead of <motion.div>
```

### 10. Contact Form

The form currently uses mailto. For a real backend:

**Option 1: Formspree**
```typescript
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Option 2: EmailJS**
```bash
npm install @emailjs/browser
```

**Option 3: API Route**
Create `app/api/contact/route.ts`

### 11. Fonts

Change fonts in `app/layout.tsx`:
```typescript
import { YourFont } from 'next/font/google'

const yourFont = YourFont({ 
  subsets: ['latin'],
  variable: '--font-your-font'
})
```

Popular choices:
- Inter (modern)
- Poppins (friendly)
- Montserrat (bold)
- Roboto (clean)

## Advanced Customization

### Add New Sections

1. Create component in `components/`
2. Import in `app/page.tsx`
3. Add to navigation in `components/Navigation.tsx`

### Change Layout

Edit `app/page.tsx` to reorder sections or add new ones.

### Mobile Optimization

Test on mobile and adjust breakpoints:
```typescript
className="md:grid-cols-2 lg:grid-cols-3"  // Tailwind responsive classes
```

## Need Help?

Check out:
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Three.js Docs](https://threejs.org/docs/)
- [Next.js Docs](https://nextjs.org/docs)

Happy customizing! 🎨✨



