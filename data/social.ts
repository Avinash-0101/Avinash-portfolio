export interface SocialLink {
    id: string;
    name: string;
    url: string;
    icon: string;
  }
  
  export const socialLinks: SocialLink[] = [
    {
      id: "github",
      name: "GitHub",
      url: "https://github.com/Avinash-0101",
      icon: "github"
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/avinash-burnwal/",
      icon: "linkedin"
    },
    {
      id: "email",
      name: "Email",
      url: "mailto:avinashburnwal21@gmail.com",
      icon: "mail"
    },
    {
      id: "phone",
      name: "Phone",
      url: "tel:+91 8250944580",
      icon: "phone"
    }
  ];