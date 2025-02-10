import { TRoles } from "./type";
import { FaFileContract, FaBuilding, FaHome, FaCogs } from 'react-icons/fa';

export const roles: TRoles[] = [
  {
    role: "Contract Engineer for Oromia Land Authority project termination cases.",
    description: "Responsible for overseeing the contract termination process and ensuring legal and contractual obligations are met.",
    icon: FaFileContract, 
  },
  {
    role: "Contract Engineer for hospital projects in Oromia.",
    description: "Manage contracts and ensure compliance for hospital construction projects within Oromia.",
    icon: FaBuilding, 
  },
  {
    role: "Senior Quantity Surveyor for Wenchi Resort Construction Project.",
    description: "Responsible for cost estimation, financial management, and procurement during the construction of Wenchi Resort.",
    icon: FaHome, 
  },
  {
    role: "Contract Administration & Construction Supervision across multiple projects.",
    description: "Oversee and ensure proper management of contracts and supervise multiple construction projects for quality and compliance.",
    icon: FaCogs,
  }
];
