export interface Education {
    id: string;
    degree: string;
    institution: string;
    location: string;
    startDate: string;
    endDate: string;
    gpa?: string;
    description?: string;
  }
  
  export const education: Education[] = [

    {
      id: "HITK",
      degree: "Bachelor of Science in Computer Science & Bussiness System",
      institution: "Heritage Institute of Technology",
      location: "Chowbaga, Kolkata",
      startDate: "October 2022",
      endDate: "June 2026",
      gpa: "7.3/10.00"
    }
  ];