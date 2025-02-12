interface Skill {
  skill: string;
  percentage: number;
}

interface ProgressChartProps {
  title: string;
  skills: Skill[];
}

const ProgressChart = ({ title, skills }: ProgressChartProps) => {
  return (
    <div className="w-full grid grid-cols-1 gap-4 rounded-lg px-4 py-2">
      <div className="w-full flex justify-between items-center">
        <h2 className="text-xl lg:text-2xl font-bold truncate">
          {title}
        </h2>
      </div>
      {skills.map((s, index) => (
        <div key={index} className="bg-dark rounded-lg p-5 opacity-98">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-1xl font-bold text-white">{s.skill}</h3>
            <span className="text-1xl text-white">{s.percentage}%</span>
          </div>
          <div className="bg-gray-700 w-full rounded-lg">
            <div
              className="bg-primary rounded-lg h-2"
              style={{ width: `${s.percentage}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgressChart;
