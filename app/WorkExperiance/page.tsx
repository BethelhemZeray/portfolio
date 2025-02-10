import RowExperience from "../components/RowExperiance";
import WorkExperience from "../components/WorkExperience";
import { workExperiences } from "../constants/workExperiance";

const ExperienceSection = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Work Experience</h1>
      <WorkExperience experiences={workExperiences} />
    </div>
  );
};

export default ExperienceSection;
