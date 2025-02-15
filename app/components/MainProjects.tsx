import Image from "next/image";
import { TMainProjects } from "../constants/type";

const MainProjects = ({ project }: { project: TMainProjects }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <Image
        src={project.image.src}
        alt={project.image.alt}
        width={400}
        height={200}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900">{project.project}</h3>
        <p className="text-gray-600 text-sm">{project.cost}</p>
        <p className="text-gray-700 mt-2">{project.consultant}</p>
        <span
          className="inline-block mt-3 text-blue-600 hover:text-blue-800 transition"
        >
          {project.position}
        </span>
      </div>
    </div>
  );
};

export default MainProjects;
