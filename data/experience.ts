// data/experience.ts
export interface Experience {
    id: string;
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
    achievements: string[];
    type?: 'work' | 'research' | 'education' | 'leadership';
  }
  
  export const experiences: Experience[] = [
    
    {
      id: "full-stack-dev",
      title: "Full Stack Web Developer",
      company: "Navodita Infotech",
      location: "Vijayawada, India",
      startDate: "July 2024",
      endDate: "August 2024",
      description: "Designed and developed a comprehensive job portal for students to streamline recruitment and project collaboration.",  
      achievements: [
      "Built a full-stack platform using React.js, Node.js, and MongoDB, serving 3,000+ UROP/Capstone students",
      "Integrated features for job postings, task tracking, document sharing, and role-based access control",
      "Enhanced UI/UX to improve responsiveness across devices and reduce page load time by 60%",
      "Automated workflows, improving grading accuracy by 75% and boosting evaluation efficiency by 50%"
    ],
      type: 'work'
    },
    
    {
      id: "hackheritage-lead",
      title: "Team Lead",
      company: "HackHeritage Hackathon - Heritage Institute of Technology",
      location: "Kolkata, India",
      startDate: "January 2025",
      endDate: "January 2025",
      description: "Led a team in the HackHeritage Hackathon, securing a Top 10 rank with an AI-based project.",
      achievements: [
        "Led a cross-functional team to design and develop an AI-powered facial recognition attendance system",
        "Integrated Python, OpenCV, CVZone, and Flask with Firebase Realtime Database and Cloud Storage",
        "Optimized system for real-time processing and accurate face matching in classroom environments",
        "Achieved a Top 10 position among multiple competing teams"
      ],
      type: 'leadership'
    }

  ];