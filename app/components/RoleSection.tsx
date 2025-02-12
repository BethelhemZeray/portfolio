import CounterCard from "./CounterCard";

const counts = [
  {
    role: "Contract Engineer",
    description: "Contract Engineer for Oromia Land Authority project termination cases.",
    icon: "FaFileContract", // FaFileContract icon for contract-related roles
  },
  {
    role: "Contract Engineer",
    description: "Contract Engineer for hospital construction projects in Oromia.",
    icon: "FaBuilding", // FaBuilding icon for construction-related roles
  },
  {
    role: "Senior Quantity Surveyor",
    description: "Senior Quantity Surveyor for Wenchi Resort Construction Project.",
    icon: "FaHome", // FaHome icon as it relates to residential/commercial construction
  },
  {
    role: "Construction Supervision",
    description: "Contract Administration & Construction Supervision across multiple projects.",
    icon: "FaCogs", // FaCogs icon for project management and supervision
  }
];

const RoleSection = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 rounded-lg lg:px-10 px-4 py-2 pt-4">
      <p className="text-primary text-lg">Role</p>
      {counts.map((count, index) => (
        <CounterCard key={index} count={count} />
      ))}
    </div>
  );
};

export default RoleSection;