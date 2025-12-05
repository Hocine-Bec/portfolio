# 💼 Portfolio Website

A modern, professional portfolio website showcasing my full-stack development projects and skills. Built with React, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **Frontend:** React 19, TypeScript
- **Styling:** Tailwind CSS 4
- **Build Tool:** Vite
- **Icons:** React Icons (Heroicons, Font Awesome)
- **Animations:** CSS Transitions & Transforms
- **Email Service:** EmailJS
- **Deployment:** Vercel (or your hosting platform)

## ✨ Features

- 🎨 **Modern Design** - Clean, professional UI with dark mode theme
- 📱 **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- 🎯 **Project Showcase** - Detailed case studies with tech stack and project types
- � **Contact Form** - Integrated EmailJS for direct client inquiries
- ⚡ **Performance Optimized** - Fast loading with Vite and optimized assets
- 🎭 **Smooth Animations** - Polished transitions and hover effects
- 🔍 **SEO Ready** - Semantic HTML and meta tags

## 📂 Project Structure

```
portfolio/
├── public/
│   └── projects/          # Project images and assets
├── src/
│   ├── components/
│   │   ├── layout/        # Navbar, Footer
│   │   ├── sections/      # Hero, About, Projects, Process, Contact
│   │   └── ui/            # Reusable components (Button, ProjectCard, etc.)
│   ├── data/              # Project data, process steps, skills
│   ├── App.tsx            # Main app component
│   └── index.css          # Global styles and utilities
└── .env                   # Environment variables (EmailJS config)
```

## �️ Local Development

### Prerequisites
- Node.js 18+ and npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Hocine-Bec/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## � EmailJS Setup

The contact form uses EmailJS for email delivery. To set it up:

1. Create a free account at [emailjs.com](https://www.emailjs.com/)
2. Add an email service (Gmail, Outlook, etc.)
3. Create an email template with these variables:
   - `{{from_name}}` - Client's name
   - `{{from_email}}` - Client's email
   - `{{message}}` - Their message
   - `{{reply_to}}` - Reply-to address
4. Copy your Service ID, Template ID, and Public Key
5. Add them to your `.env` file
6. Restart the dev server

## 🎨 Customization

### Colors
Primary colors are defined in `src/index.css`:
```css
--color-primary: #0EA5E9;        /* Sky blue */
--color-primary-dark: #0284C7;   /* Darker blue */
```

### Content
- **Projects:** Edit `src/data/projects.ts`
- **Skills:** Edit `src/data/skills.ts`
- **Process Steps:** Edit `src/data/process.ts`
- **Personal Info:** Update components in `src/components/sections/`

## 📦 Key Dependencies

```json
{
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "typescript": "~5.6.2",
  "@emailjs/browser": "^4.4.1",
  "react-hot-toast": "^2.4.1",
  "react-icons": "^5.4.0"
}
```

## 📬 Contact

**Hocine Bechebil**
- Email: Bechebil.Houcin@gmail.com
- LinkedIn: [linkedin.com/in/hocine-bechebil](https://linkedin.com/in/hocine-bechebil)
- GitHub: [github.com/Hocine-Bec](https://github.com/Hocine-Bec)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).