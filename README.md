# Professional Portfolio Website

A modern, responsive portfolio website built with React, featuring stunning animations, interactive components, and a professional design.

## 🚀 Features

- **Modern Design**: Clean, professional layout with gradient backgrounds and glass effects
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **Responsive**: Fully responsive design that works on all devices
- **Interactive Components**: Hover effects, scroll animations, and dynamic content
- **Professional Sections**: Hero, About, Skills, Projects, and Contact sections
- **Project Details**: Dedicated pages for detailed project information
- **Contact Form**: Interactive contact form with validation
- **Performance Optimized**: Fast loading times and smooth performance

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Styled Components
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Intersection Observer**: React Intersection Observer

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🎨 Customization

### Personal Information
Update the following files with your personal information:

1. **Hero Section** (`src/components/Hero.jsx`)
   - Change "Your Name" to your actual name
   - Update tagline and social media links

2. **About Section** (`src/components/About.jsx`)
   - Update the about text with your story
   - Replace "YN" initials with your initials

3. **Contact Section** (`src/components/Contact.jsx`)
   - Update email, phone, and location
   - Add your social media links

4. **Projects Section** (`src/components/Projects.jsx`)
   - Replace project data with your actual projects
   - Update project images, descriptions, and links

5. **Skills Section** (`src/components/Skills.jsx`)
   - Update skills and proficiency levels
   - Add or remove skill categories as needed

### Styling
The design system uses CSS custom properties defined in `src/index.css`. You can customize:

- **Colors**: Update the color variables in `:root`
- **Typography**: Modify font sizes and weights
- **Spacing**: Adjust spacing variables
- **Animations**: Customize transition timings

### Adding Projects
To add a new project:

1. Add project data to the `projects` array in `src/components/Projects.jsx`
2. Create a detailed project page by updating `src/components/ProjectDetail.jsx`
3. Add project images to the `public` folder

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/your-repo-name",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Deploy: `npm run deploy`

## 📁 Project Structure

```
src/
├── components/
│   ├── About.jsx          # About section
│   ├── Contact.jsx        # Contact form and info
│   ├── Footer.jsx         # Footer component
│   ├── Hero.jsx           # Hero section
│   ├── Navbar.jsx         # Navigation bar
│   ├── ProjectDetail.jsx  # Individual project page
│   ├── Projects.jsx       # Projects showcase
│   └── Skills.jsx         # Skills section
├── App.jsx                # Main app component
├── index.css              # Global styles
└── main.jsx               # App entry point
```

## 🎯 Key Features Explained

### Hero Section
- Animated floating elements
- Gradient background with parallax effect
- Social media links
- Smooth scroll indicator

### About Section
- Animated profile image with rotating border
- Feature cards highlighting key strengths
- Intersection observer animations

### Skills Section
- Categorized skill display
- Interactive skill tags
- Animated progress bars
- Hover effects

### Projects Section
- Grid layout with hover animations
- Project cards with technology tags
- Links to live demos and code
- Shimmer effect on images

### Contact Section
- Interactive contact form
- Contact information cards
- Social media links
- Form validation and submission

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style
- Uses ESLint for code quality
- Prettier for code formatting
- Consistent component structure
- Proper TypeScript-like prop handling

## 📈 Performance

- Optimized bundle size
- Lazy loading for images
- Efficient animations
- Minimal dependencies
- Fast loading times

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Icons by [Lucide](https://lucide.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Styling with [Styled Components](https://styled-components.com/)

---

**Built with ❤️ using React and modern web technologies**
