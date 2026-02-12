
export type Project = {
  title: string;
  description: string;
  techStack: string[];
  github: string;
  live?: string;
  imageUrl: string;
};

export const projects: Project[] = [
  {
    title: "Personal Developer Portfolio",
    description:
      "A modern, responsive portfolio built with Next.js, TypeScript, Tailwind CSS, dark/light theme, animations, and SEO optimization.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Nodemailer",
      "Framer Motion"
    ],
    github: "https://github.com/sunil0336/Portfolio",
    live: "https://sunilrathod.vercel.app",
    imageUrl: "/projects/portfolio.png" // or your saved image
  },
  {
    title: "Criticstaan",
    description: "A movie review platform with user roles, ratings, and secure authentication.",
    techStack: ["React", "TailwindCSS", "Express", "MongoDB"],
    github: "https://github.com/sunil0336/MovieBuffs",
    live: "https://criticstaan.vercel.app/",
    imageUrl: "/projects/HomeScreen.png"
  },
  {
    title: "Swiggy Clone - Food Ordering App",
    description: "A high-performance Swiggy-inspired food ordering application built using React 18 with concurrent rendering and Parcel bundler. Implements Redux Toolkit for scalable state management, dynamic restaurant data fetching, seamless cart operations, and optimized component rendering for a smooth user experience.",
    techStack: [
      "React 18",
      "Redux Toolkit",
      "React Router",
      "Parcel",
      "CSS",
      "Font Awesome",
      "Toast Notifications"
    ],
    github: "https://github.com/sunil0336/food-ordering-app",
    live: undefined,
    imageUrl: "/projects/swiggyclone.png"
  }
  ,
  {
    title: "Real-Time Gallery Interaction",
    description: "A multi-user real-time image gallery where users can react with emojis, add comments, and see live updates instantly across devices. Features infinite scroll, masonry layout, and a live activity feed powered by InstantDB.",
    techStack: [
      "React",
      "TailwindCSS",
      "InstantDB",
      "Zustand",
      "React Query",
      "Unsplash API",
      "Vite"
    ],
    github: "https://github.com/sunil0336/Gallery",
    live: "https://realtimegalleryinteraction.vercel.app/",
    imageUrl: "/projects/Gallery.png"
  },
  {
    title: "Password Manager",
    description: "A React and Tailwind CSS password manager that stores credentials in browser LocalStorage, featuring add/edit/delete functionality and a clean, responsive UI.",
    techStack: ["React", "TailwindCSS", "MongoDB"],
    github: "https://github.com/sunil0336/PasswordManager",
    live: undefined,
    imageUrl: "/projects/pwdmanager.png"
  },
  {
    title: "E-Commerce Cart & Checkout Flow",
    description: "A fully functional e-commerce cart and checkout system built with React and Tailwind CSS. Features product listing, add/remove/update cart items, coupon discounts, global state management using Context API + useReducer, Formik + Yup checkout form validation, image upload with preview using FormData, toast notifications, and localStorage persistence.",
    techStack: ["React", "TailwindCSS", "Context API", "useReducer", "Formik", "Yup"],
    github: "https://github.com/sunil0336/ecommerce-cart-checkout",
    live: "https://ecommerce-cart-checkout-task.vercel.app/",
    imageUrl: "/projects/ecommerce.png"
  },
  {
    title: "GoRail - Cloud-Based Train Ticket Booking System",
    description: "A full-stack cloud-based train ticket booking system that allows users to search trains, book tickets. Built with React for the frontend and FastAPI with PostgreSQL for the backend, featuring secure payment integration using Razorpay and deployed on Render.",
    techStack: ["React.js", "HTML", "CSS", "FastAPI", "Python", "PostgreSQL", "Razorpay API"],
    github: "https://github.com/sunil0336/GoRaiL_Frontend",
    live: "https://gorail-frontend.onrender.com/",
    imageUrl: "/projects/gorail.png"
  },
  {
    title: "Employee Management System (Frontend Project)",
    description: "A responsive role-based Employee Management System built using React and TailwindCSS. Implements task lifecycle management with dynamic dashboard statistics and conditional UI rendering based on user roles. Application state and user data are managed using LocalStorage for persistent client-side storage.",
    techStack: ["React", "TailwindCSS", "LocalStorage"],
    github: "https://github.com/sunil0336/EMS",
    live: undefined,
    imageUrl: "/projects/ems.png"
  },
  {
    title: "AI Tic Tac Toe Game",
    description: "built with React featuring AI and Two Player modes. Implements the Minimax algorithm for optimal AI decision-making in Hard mode, along with game statistics tracking, match history, and a responsive animated UI.",
    techStack: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Minimax Algorithm"
    ],
    github: "https://github.com/sunil0336/Mini-Project-SEM2",
    live: undefined,
    imageUrl: "/projects/tictactoe.png"
  }


];
