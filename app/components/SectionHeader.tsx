// interface SectionProps {
//     section: string[];
// }
// const SectionHeader = ({ section }: SectionProps) => {
const SectionHeader = () => {
  return (
      <div className="w-full p-4 mx-auto space-y-4">
        <h2 className="text-2xl text-primary font-bold text-center">About Me</h2>
        <p className="text-lg lg:text-2xl text-center">
          I am a passionate developer with expertise in Next.js and Tailwind
          CSS.
        </p>
      </div>
  );
};

export default SectionHeader;
