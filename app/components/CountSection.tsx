import GlowCard from "./GlowCard";
const counts = [
  { id: 1, count: "10+", description: "Projects Completed" },
  { id: 2, count: "15+", description: "Client Reviews" },
  { id: 3, count: "5+", description: "Major Clients" },
  { id: 4, count: "8+", description: "Years of Experience" },
  { id: 5, count: "20+", description: "Site Inspections & Supervisions" },
];

const CountSection = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-8 rounded-lg lg:px-10">
      {counts.map((count) => (
        <GlowCard key={count.id} count={count} />
      ))}
    </div>
  );
};

export default CountSection;