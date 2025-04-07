export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

const sampleImage = "/content/blog/images/project-image.jpg";

export const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform with product management, shopping cart, and payment processing.",
    image: sampleImage,
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "#",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates and team features.",
    image: sampleImage,
    tags: ["Vue.js", "Firebase", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "Weather Dashboard",
    description:
      "A weather dashboard that displays current and forecasted weather data for multiple locations.",
    image: sampleImage,
    tags: ["JavaScript", "API Integration", "CSS"],
    link: "#",
  },
  {
    title: "Fitness Tracker",
    description:
      "A mobile app for tracking workouts, nutrition, and fitness goals with progress visualization.",
    image: sampleImage,
    tags: ["React Native", "Redux", "Firebase"],
    link: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive portfolio website showcasing projects and skills with a modern design.",
    image: sampleImage,
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    link: "#",
  },
  {
    title: "Recipe Finder",
    description:
      "An application that helps users discover recipes based on available ingredients.",
    image: sampleImage,
    tags: ["React", "API Integration", "Material UI"],
    link: "#",
  },
  {
    title: "Chat Application",
    description:
      "A real-time chat application with user authentication and message history.",
    image: sampleImage,
    tags: ["Socket.io", "Express", "MongoDB", "Authentication"],
    link: "#",
  },
  {
    title: "Budget Tracker",
    description:
      "A personal finance application for tracking expenses, income, and financial goals.",
    image: sampleImage,
    tags: ["Vue.js", "Vuex", "Chart.js", "LocalStorage"],
    link: "#",
  },
  {
    title: "Social Media Dashboard",
    description:
      "A dashboard for managing and analyzing social media accounts and metrics.",
    image: sampleImage,
    tags: ["React", "D3.js", "API Integration", "Data Visualization"],
    link: "#",
  },
  {
    title: "Travel Planner",
    description:
      "An application for planning trips, including itinerary management and travel recommendations.",
    image: sampleImage,
    tags: ["Angular", "TypeScript", "Google Maps API", "Firebase"],
    link: "#",
  },
];
