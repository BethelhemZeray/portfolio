"use client";
import Image from "next/image";
import { graduation } from "../constants/graduation";
import { FaGraduationCap } from "react-icons/fa";
import { GiTiedScroll } from "react-icons/gi";

const data = graduation[0];

const GraduationSection = () => {
  return (
    <div className="grid grid-col-1 lg:grid-cols-2 gap-6 p-6 bg-white rounded-lg shadow-md">
      {/* Left Section: Graduation Hat, Scroll Icon, and Year */}
      <div
        className="grid grid-col-1 lg:grid-cols-2 rounded-lg shadow-md lg:order-1 order-2"
        style={{
          background: "linear-gradient(135deg, #6EE7B7, #3B82F6)", // Gradient background
        }}
      >
        {/* Icons Section */}
        <div className="flex flex-col items-center justify-center p-6">
          {/* Graduation Hat Icon */}
          <FaGraduationCap size={150} color="#FFFFFF" />
          {/* Scroll Icon */}
          <GiTiedScroll size={80} color="#FFFFFF" />
          {/* Headline */}
          <p className="mt-4 text-2xl font-bold text-white text-center">
            Graduation Achievements
          </p>
        </div>

        {/* Year and Download Button Section */}
        <div className="flex flex-col items-center justify-center space-y-8 p-6">
          {/* Year */}
          <p className="text-6xl font-bold text-white">{data.year}</p>
          {/* Download Button */}
          <a
            href=""
            download={`${data.name}_Resume.pdf`}
            className="px-6 py-3 bg-white text-blue-600 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors shadow-md"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Right Section: University Logo, Name, and Department */}
      <div className="flex flex-col items-center justify-center order-1 lg:order-1 space-y-4 p-6">
        {/* University Logo */}
        <Image
          src={data.universityLogo}
          alt="University Logo"
          width={200}
          height={200}
          className="rounded-full border-4 border-blue-500"
        />
        {/* Name and Department */}
        <div className="text-center">
          <h2 className="text-5xl font-bold text-gray-800">{data.name}</h2>
          <p className="text-3xl text-gray-600 mt-2">{data.dept}</p>
        </div>
      </div>
    </div>
  );
};

export default GraduationSection;