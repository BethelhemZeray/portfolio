import React from "react";
import { TSkills } from "../constants/type";
import ProgressChart from "./ProgressChart";

type SkillSectionProps = {
  skills: TSkills[];
};

function SkillSection({ skills }: SkillSectionProps) {
  return (
    <>
      <p className="text-primary text-lg px-4 lg:px-14">Skills</p>
      <div className="flex flex-col md:p-10 lg:flex-row items-start justify-center lg:justify-between lg:py-4 lg:gap-14 gap-4 md:gap-8">
        {skills.map((skill, index) => (
          <ProgressChart
            key={index}
            title={skill.title}
            skills={skill.skills}
          />
        ))}
      </div>
    </>
  );
}

export default SkillSection;
