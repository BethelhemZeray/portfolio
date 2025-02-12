import CountSection from "../components/CountSection";
import ExperianceCard from "../components/ExperianceCard";
import GraduationSection from "../components/GraduationSection";
import SkillSection from "../components/SkillSection";
import { skills } from "../constants/skills";

interface SectionProps {
    section: string[];
}

const SectionHeader = ({ section }: SectionProps) => {
  return (
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center">About Me</h2>
        <p className="mt-4 text-lg text-center">
          I am a passionate developer with expertise in Next.js and Tailwind
          CSS.
        </p>
      </div>
  );
};

export default SectionHeader;
