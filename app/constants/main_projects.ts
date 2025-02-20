import { TMainProjects } from "./type";
import Langano from '../../public/images/lngano.jpg';
import G6 from '../../public/images/g6.jpg';
import Ifa_Boru from '../../public/images/ifa-boru-school.jpg';
import Shashamane from '../../public/images/shashamane.jpg';
import Gewasa from '../../public/images/gewasa.jpg';

export const main_projects: TMainProjects[] = [
  {
    project: "3B+G+15 Mixed Use Office - Siinqee Bank Project (Ongoing)",
    consultant: "Engineering Corporation of Oromia",
    image: {
        src: G6,
        alt: "Siinqee Bank",
    },
    cost: "1,696,424,322.62 Billion",
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
    cost: "34,404,005.75 Million",
    position: "Resident Engineer",
  },
  {
    project: "Lega Tafo Gewasa Ifa Boru Secondary School",
    consultant: "Oromia Engineering Corporation",
    image: {
        src: Gewasa,
        alt: "Gewasa Secondary School",
    },
    cost: "34,404,005.75 Million",
    position: "Resident Engineer",
  },
  {
    project: "Shashemene Meja Demma Ifa Boru Secondary School",
    consultant: "Oromia Engineering Corporation",
    image: {
        src: Shashamane,
        alt: "Shashemene Meja Demma Secondary School",
    },
    cost: "37,673,417.94 Million",
    position: "Resident Engineer",
  },
];
