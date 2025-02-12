import { THero } from "./type";
import profile from '../../public/images/banner.png';
import bg from '../../public/images/19389.jpg';


export const hero: THero[] = [
  {
    name: "Lalisa Chali Wakweyya",
    skills: [
      "Contract Administration & Management.",
      "Construction Supervision & Quality Control.",
      "Quantity Surveying & Cost Estimation.",
      "Project Planning & Scheduling.",
      "Structural & Civil Engineering Designs.",
      "Team Leadership & Problem-Solving.",
    ],
    description: "I'm a seasoned Civil Engineer with over 7 years of experience in contract administration, construction supervision, and quantity surveying. I have successfully managed multi-million and billion-birr projects across infrastructure, education, healthcare, commercial, and hospitality sectors",
    profileImage: {
      src: profile,
      alt: "Lalisa Chali Wakweyya",
    },
    backgroundImage: {
      src: bg,
      alt: "Architecture",
    },
  },
];
