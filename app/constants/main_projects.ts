import { TMainProjects } from "./type";
import Langano from '../../public/images/lngano.jpg';
import G6 from '../../public/images/g6.jpg';
import Ifa_Boru from '../../public/images/ifa-boru-school.jpg';

export const main_projects: TMainProjects[] = [
  {
    project: "3B+G+15 Mixed Use Office - Siinqee Bank Project (Ongoing)",
    consultant: "Engineering Corporation of Oromia",
    image: {
        src: G6,
        alt: "Siinqee Bank",
    },
    cost: "1,788,532,422.07 Billion",
    position: "Assistant Resident Engineer",
  },
  {
    project: "Renovation and Construction of Langano Resort Project",
    consultant: "Engineering Corporation of Oromia",
    image: {
        src: Langano,
        alt: "Langano Resort",
    },
    cost: "677,544,333.12 Million",
    position: "Resident Engineer",
  },
  {
    project: "Lega Tafo Eka Dalle Ifa Boru Secondary School",
    consultant: "Oromia Engineering Corporation",
    image: {
        src: Ifa_Boru,
        alt: "Ifa Boru Secondary School",
    },
    cost: "34,672,433.6 Million",
    position: "Resident Engineer",
  },
];
