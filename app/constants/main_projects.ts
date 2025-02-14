import { TMainProjects } from "./type";
import Langano from '../../public/images/lngano.jpg';
import G6 from '../../public/images/g6.jpg';
import Ifa_Boru from '../../public/images/ifa-boru-school.jpg';

export const main_projects: TMainProjects[] = [
  {
    project: "G+6 Wallaga University Referral Hospital Staff Residence Project",
    consultant: "Ethiopian Design and Supervision Works",
    image: {
        src: G6,
        alt: "Wallaga University Referral Hospital",
    },
    cost: "92,875,411.7 Million",
    position: "Site Engineer",
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
