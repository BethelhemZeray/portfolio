import SectionHeader from "../components/SectionHeader";
import WorkExperience from "../components/WorkExperience";
import { workExperiences } from "../constants/workExperiance";

const ExperienceSection = () => {
  return (
    <section id="work" className="container mx-auto px-4 py-8">
      <SectionHeader/>
      <WorkExperience experiences={workExperiences} />
    </section>
  );
};

export default ExperienceSection;
