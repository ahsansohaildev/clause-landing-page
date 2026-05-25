# Clause Landing Page

A modern, responsive, and animated SaaS landing page built with **React JS**, **Vite**, **Tailwind CSS**, and **shadcn/ui**.

This project is inspired by a premium SaaS landing page design concept from Dribbble. The goal was to convert a professional UI design into a clean, reusable, responsive, and production-ready frontend project.

## Live Demo

https://clause-react.netlify.app/

## Case Study

This project also includes a detailed case study page:

https://clause-react.netlify.app/case-study

The case study explains the design approach, component structure, libraries used, problems solved, and what I learned while building this project.


## Features

* Modern SaaS landing page UI
* Fully responsive design
* Sticky responsive header
* Desktop navigation dropdowns
* Mobile menu using shadcn Sheet
* Animated hero section
* Partner logo marquee
* Feature cards section
* Dashboard chart mockup using Recharts
* Integrations marquee section
* Testimonial section
* Animated stats counter
* CTA section
* Full-width footer
* Case study page using React Router
* Lazy-loaded routes for better optimization
* Smooth section navigation with anchor links
* Netlify-ready routing setup

## Tech Stack

This project uses:

* React JS
* Vite
* Tailwind CSS
* shadcn/ui
* Radix UI
* Lucide React
* React Router
* Framer Motion
* GSAP
* GSAP ScrollTrigger
* Recharts
* react-fast-marquee
* react-countup
* react-icons

## Folder Structure

```txt
src/
  assets/
    icons/
    images/

  components/
    layout/
      Header.jsx
      DesktopNav.jsx
      Footer.jsx

    sections/
      HeroSection.jsx
      HeroPartners.jsx

      features/
        FeaturesSection.jsx
        SectionHeader.jsx
        DashboardFeatureCard.jsx
        DashboardChart.jsx
        TeamAvatars.jsx
        SmartNotificationsCard.jsx
        NotificationRow.jsx
        FakeSwitch.jsx
        TaskManagementCard.jsx
        ActivityItem.jsx

      integrations/
        IntegrationsSection.jsx
        IntegrationsHeader.jsx
        IntegrationsMarquee.jsx
        IntegrationLogoCard.jsx

      testimonial/
        TestimonialSection.jsx
        QuoteBlock.jsx
        AuthorProfile.jsx
        StatsPanel.jsx
        StatItem.jsx

      cta/
        CTASection.jsx

    ui/
      shadcn components

  constants/
    site.js
    navigation.js
    integration.js

  pages/
    HomePage.jsx
    CaseStudy.jsx

  lib/
    utils.ts

  App.jsx
  main.jsx
  index.css
```

## Main Sections

### 1. Header

The header includes:

* Logo
* Desktop navigation menu
* shadcn Navigation Menu dropdowns
* CTA buttons
* Mobile menu using shadcn Sheet

### 2. Hero Section

The hero section includes:

* Badge
* Main headline
* Highlight underline effect
* CTA buttons
* Floating avatars
* Animated arrow icons
* Grid background
* Partner logo marquee
* GSAP and Framer Motion animations

### 3. Features Section

The features section includes:

* Section heading
* Dynamic dashboard card
* Recharts bar chart
* Team avatars
* Smart notifications card
* Task management card

### 4. Integrations Section

The integrations section includes:

* Dark green rounded section
* Grid background
* Integrations heading
* Two animated marquee rows
* Logo cards with hover effects

### 5. Testimonial Section

The testimonial section includes:

* Large quote
* Author profile
* Company logo
* Animated stats counter

### 6. CTA Section

The CTA section includes:

* Strong marketing heading
* Demo button
* Start for Free button

### 7. Footer

The footer includes:

* Brand logo
* Contact information
* Footer navigation columns
* Social icons
* Developer credit

## What I Learned

While building this project, I practiced:

* Breaking a design into reusable React components
* Using the divide-and-conquer approach for frontend development
* Creating responsive layouts with Tailwind CSS
* Using shadcn/ui components in a real project
* Creating animated UI with Framer Motion
* Creating scroll animations with GSAP ScrollTrigger
* Creating charts with Recharts
* Creating marquees with react-fast-marquee
* Creating animated counters with react-countup
* Using React Router for routing
* Using lazy loading and Suspense for optimization
* Fixing responsive design bugs
* Preparing a project for GitHub and Netlify deployment

## Installation

Clone the repository:

```bash
git clone https://github.com/your-username/clause-landing-page.git
```

Go to the project folder:

```bash
cd clause-landing-page
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build the project:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Netlify Deployment

For Netlify deployment:

```txt
Build command: npm run build
Publish directory: dist
```

This project includes a `_redirects` file for React Router support on Netlify:

```txt
/* /index.html 200
```

## Future Improvements

Possible future improvements:

* Add real backend integration
* Add working contact/demo form
* Add SEO metadata
* Add blog and pricing pages
* Add dark/light mode
* Add more accessibility improvements
* Add unit tests
* Optimize images further
* Connect data from a CMS

## Credits

Design inspiration: Dribbble SaaS landing page concept
Development: Ahsan Sohail

## Author

**Ahsan Sohail**

Frontend Developer focused on building modern, responsive, and professional web interfaces.

## License

This project is for learning and portfolio purposes.

