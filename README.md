# Usama Tariq - Professional Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS, showcasing the professional experience and projects of Full Stack Developer Usama Tariq.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive across all device sizes
- **Interactive**: Smooth scrolling navigation and animated sections
- **Fast Performance**: Built with Next.js for optimal loading speed
- **SEO Optimized**: Structured for search engine visibility
- **Project Showcase**: Visual gallery of mobile app projects
- **Contact Integration**: Direct email and LinkedIn integration

## 🛠️ Tech Stack

- **Framework**: Next.js 16.2.4 with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Images**: Next.js optimized images
- **Development**: Hot reloading with Turbopack

## 📱 Sections

1. **Hero Section**: Introduction with contact information
2. **Technical Skills**: Organized by category (Frontend, Backend, Cloud, Testing)
3. **Professional Experience**: Detailed work history with achievements
4. **Featured Projects**: Showcase of major projects with screenshots
5. **Education & Certifications**: Academic and professional credentials
6. **Contact**: Multiple ways to get in touch

## 🏗️ Getting Started

### Prerequisites
- Node.js 18+ installed on your machine
- npm, yarn, or pnpm package manager

### Installation

1. Clone or download this project
2. Navigate to the project directory:
   ```bash
   cd usama-portfolio
   ```

3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
usama-portfolio/
├── src/
│   └── app/
│       ├── globals.css
│       ├── layout.tsx
│       └── page.tsx          # Main portfolio page
├── public/
│   └── projects/             # Project screenshots
│       ├── assignment.png
│       ├── auth.png
│       ├── chat.png
│       ├── onboarding.png
│       ├── product.png
│       ├── profile.png
│       └── response.png
├── package.json
└── README.md
```

## 🚀 Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com)
3. Import your GitHub repository
4. Deploy with one click

### Deploy on Netlify

1. Build the project:
   ```bash
   npm run build
   npm run export  # If using static export
   ```
2. Upload the `out` folder to Netlify

### Deploy on Other Platforms

This is a standard Next.js application and can be deployed on any platform that supports Node.js:

- **AWS Amplify**
- **Heroku**
- **Railway**
- **DigitalOcean**
- **Firebase Hosting**

## 🎨 Customization

### Adding New Projects

Edit the `projects` array in `src/app/page.tsx`:

```typescript
const projects = [
  {
    title: 'Your Project Name',
    description: 'Project description',
    tech: ['React Native', 'Node.js', 'MongoDB'],
    images: ['/projects/your-image.png']  // Add your images to public/projects/
  },
  // ... existing projects
];
```

### Updating Contact Information

Update the contact details in the hero section and contact section of `src/app/page.tsx`.

### Modifying Styles

This project uses Tailwind CSS. You can customize:
- Colors in the gradient backgrounds
- Spacing and typography
- Animation timings in Framer Motion variants

## 📞 Contact

**Usama Tariq**
- Email: usamacheema08@gmail.com
- Phone: (+92) 341-4834446
- LinkedIn: [usama-tariq-is579](https://www.linkedin.com/in/usama-tariq-is579/)
- Location: Wazirabad, Punjab, Pakistan

## 🎯 Professional Experience

- **5+ years** in Full Stack Development
- **Specialized** in React Native and MERN stack
- **Industries**: HVAC, Fitness, Mental Health, Healthcare, Food Delivery
- **Expertise**: Mobile Apps, Web Applications, Cloud Infrastructure, API Development

## 💼 Services Offered

- **Mobile App Development**: React Native for iOS and Android
- **Web Development**: React.js, Next.js, TypeScript
- **Backend Development**: Node.js, Express.js, MongoDB, MySQL
- **Cloud Services**: AWS deployment and management
- **API Development**: RESTful and GraphQL APIs
- **Testing & QA**: Automated testing with Jest, Detox

## 🔧 Maintenance

To keep the portfolio updated:

1. **Update experience**: Add new roles in the `experience` array
2. **Add projects**: Include new work in the `projects` array
3. **Update skills**: Modify the `skills` object with new technologies
4. **Replace images**: Update project screenshots in `public/projects/`

## 📄 License

This project is for professional portfolio use. Feel free to use as inspiration for your own portfolio.

---

*Built with ❤️ using Next.js and Tailwind CSS*
