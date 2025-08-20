interface ExperienceType {
  company: string;
  title: string;
  start: string;
  end: string;
  duties: string[];
}
export const experience: ExperienceType[] = [
  {
    title: "Software Developer",
    company: "VisionLeads.io",
    start: "Jan 2025",
    end: "Current",
    duties: [
      "Develop and maintain front-end components for our internal web applications using JavaScript and React",
      "Assist the senior team with debugging, troubleshooting technical issues, and implementing new features",
      "Contribute to the technical documentation for our projects to ensure clarity and knowledge sharing",
    ],
  },
  {
    title: "Technical Analyst",
    company: "Royal Canadian Mounted Police",
    start: "Sept 2023",
    end: "April 2024",
    duties: [
      "Provided technical support over phone and remote access, assisting users in resolving IT-related issues efficiently",
      "Documented incidents and resolutions by completing service tickets with detailed problem descriptions and steps taken",
      "Escalated complex issues to higher-level support teams when necessary to ensure timely resolution",
    ],
  },
  {
    title: "Team Member",
    company: "Kettleman's Bagel Co.",
    start: "August 2021",
    end: "May 2022",
    duties: [
      "Delivered customer service by taking orders and ensuring a positive dining experience",
      "Prepared and assembled wholesale orders and sandwiches, maintaining quality and consistency",
      "Upheld cleanliness and food safety standards by regularly cleaning and sanitizing work areas",
    ],
  },
];
