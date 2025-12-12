export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  achievements: string[];
  image: string;
  github?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
{
  id: "ai-attendance",
  title: "AI-Based Facial Recognition Attendance System",
  description: "Python + OpenCV-based system for real-time facial recognition attendance tracking.",
  longDescription: "Developed a robust attendance system leveraging Python, OpenCV, and CVZone to detect and recognize faces in real-time. Integrated with Firebase Realtime Database and Cloud Storage for secure data storage and retrieval. Designed for quick deployment in academic and corporate environments.",
  technologies: ["Python", "OpenCV", "CVZone", "Firebase", "Cloud Storage"],
  achievements: [
    "Achieved high-accuracy face detection and recognition under varying lighting conditions",
    "Automated attendance logging, eliminating manual errors and reducing processing time by 80%",
    "Integrated Firebase for seamless cloud-based storage and retrieval of attendance data",
    "Optimized model performance to run on mid-range hardware without lag"
  ],
  image: "/images/projects/ai-attendance/ai-attendance.png",
  github: "https://github.com/yourusername/ai-attendance",
  featured: true
},
{
  id: "studynotion",
  title: "StudyNotion: Online Classroom & Examination System",
  description: "MERN stack-based platform for online learning, classroom management, and secure exams.",
  longDescription: "Built a full-fledged online classroom and examination platform with live class scheduling, course management, and secure examination features. Integrated role-based access for students, teachers, and admins. Developed interactive dashboards, question banks, and instant grading system.",
  technologies: ["MongoDB", "Express", "React", "Node.js", "TailwindCSS", "WebRTC"],
  achievements: [
    "Implemented live classroom sessions with screen sharing and chat",
    "Built secure online exams with timer-based navigation and instant grading",
    "Enabled teachers to manage courses, upload materials, and track student progress",
    "Designed a responsive UI ensuring accessibility on all devices"
  ],
  image: "/images/projects/studynotion/studynotion.png",
  github: "https://github.com/Avinash-0101/online-classroom-and-examination",
  featured: true
},
{
  id: "ecommerce-frontend",
  title: "E-Commerce Website Frontend",
  description: "Fully functional and responsive e-commerce frontend built with React and Tailwind CSS.",
  longDescription: "Developed an e-commerce website frontend featuring product listings, category filters, responsive UI, and shopping cart functionality. Leveraged React for dynamic rendering and Tailwind CSS for rapid styling, ensuring a consistent and modern design.",
  technologies: ["React", "TailwindCSS", "JavaScript"],
  achievements: [
    "Designed a responsive and visually appealing UI adaptable across devices",
    "Implemented dynamic product listing with filtering and sorting features",
    "Optimized rendering performance for faster page loads and smoother navigation",
    "Created reusable UI components for scalability and maintainability"
  ],
  image: "/images/projects/ecommerce/ecommerce.png",
  github: "https://github.com/yourusername/ecommerce-frontend",
  featured: false
},
{
  id: "url-shortener",
  title: "URL Shortener",
  description: "Node.js and MongoDB-based service for shortening and managing URLs.",
  longDescription: "Built a URL shortening service with Node.js, Express, and MongoDB, allowing users to generate short links and track click counts. Integrated EJS templating for server-side rendering and a clean, minimal UI for ease of use.",
  technologies: ["Node.js", "Express", "MongoDB", "EJS"],
  achievements: [
    "Developed short URL generation with unique hash codes",
    "Implemented click tracking and analytics for generated links",
    "Created a responsive, minimal front-end with EJS templating",
    "Ensured fast redirection with optimized database queries"
  ],
  image: "/images/projects/url-shortener/url-shortner.png",
  github: "https://github.com/yourusername/url-shortener",
  featured: false
},

{
  id: "job-portal",
  title: "Job Portal",
  description: "MERN stack-based job portal connecting recruiters and job seekers.",
  longDescription: "Developed a job portal with role-based dashboards for recruiters and applicants. Features include job postings, application tracking, resume uploads, and search filters. Backend APIs secured with JWT authentication and input validation.",
  technologies: ["MongoDB", "Express", "React", "Node.js", "TailwindCSS"],
  achievements: [
    "Built a recruiter dashboard to post, edit, and track job listings",
    "Implemented applicant profiles with resume upload and application tracking",
    "Integrated advanced job search with keyword and location filters",
    "Ensured data security using JWT-based authentication"
  ],
  image: "/images/projects/job-portal/job-portal.png",
  github: "https://github.com/yourusername/job-portal",
  featured: true
},
{
  id: "vacazy",
  title: "Vacazy",
  description: "Travel and vacation booking platform with itinerary management.",
  longDescription: "Created a responsive travel booking platform enabling users to search, plan, and book vacation packages. Integrated itinerary creation, cost calculation, and booking management with a visually engaging UI.",
  technologies: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
  achievements: [
    "Implemented search and filter for vacation packages by location and budget",
    "Built itinerary planning with automatic cost estimation",
    "Integrated secure booking and payment processing",
    "Designed a visually appealing UI with responsive layouts"
  ],
  image: "/images/projects/vacazy/vacazy.png",
  github: "https://github.com/yourusername/vacazy",
  featured: false
}

];
