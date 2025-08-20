interface EducationType {
  school: string;
  certificate: string;
  start: string;
  end: string;
  description: string;
}
export const education: EducationType[] = [
  {
    school: "Algonquin College",
    certificate: "Computer Programming Diploma",
    start: "May 2022",
    end: "April 2024",
    description:
      "Completed comprehensive training in software development, programming fundamentals, and database management. Gained hands-on experience with multiple programming languages, problem-solving techniques, and application development. Developed strong analytical and technical skills through coursework and practical projects, preparing for real-world IT and software development environments.",
  },
  {
    school: "Glebe Collegiate Insititute",
    certificate: "GED",
    start: "Sept 2014",
    end: "June 2018",
    description:
      "Successfully completed secondary education with a focus on core academic subjects and the development of strong communication, problem-solving, and teamwork skills.",
  },
];
