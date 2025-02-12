'use client';

import React, { useEffect, useState } from "react";
const experience = {
  years: 8,
  title: "Years of Experience",
  description:
    "Experienced Civil Engineer specializing in construction supervision, contract management, and quantity surveying, ensuring quality and cost-efficient project execution.",
};

const ExperianceCard = () => {
  const [currentExperience, setCurrentExperience] = useState(0);
  useEffect(() => {
      let start = 0;
      const end = experience.years;
      const duration = 2000; // 2 seconds
      const stepTime = Math.max(duration / end, 20);
  
      const timer = setInterval(() => {
        start += 1;
        setCurrentExperience(start);
        if (start >= end) clearInterval(timer);
      }, stepTime);
  
      return () => clearInterval(timer);
    }, []);

  return (
    <div className="h-full flex flex-col items-left justify-center p-8 space-y-2 lg:space-y-8 rounded-lg shadow-lg bg-gradient-to-b from-dark to-primary2">
      <h3 className="text-5xl lg:text-9xl font-bold text-white mb-2">{currentExperience}</h3>
      <p className="text-white text-2xl lg:text-5xl">{experience.title}</p>
      <p className="text-gray-300">{experience.description}</p>
    </div>
  );
};
export default ExperianceCard;