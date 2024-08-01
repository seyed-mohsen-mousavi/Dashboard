import { useState, useEffect } from "react";

const Circle = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    if (percentage < 100) {
      const timer = setTimeout(() => setPercentage(percentage + 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [percentage]);

  return (
    <div className="flex justify-center items-center relative size-24">
      <svg className="size-full transform -rotate-90">
        <circle
          className="text-gray-300"
          cx="50"
          cy="50"
          r="45"
          strokeWidth="10"
          fill="none"
          stroke="currentColor"
        />
        <circle
          className="text-black transition-all duration-1000 ease-linear"
          cx="50"
          cy="50"
          r="45"
          strokeWidth="10"
          fill="none"
          stroke="currentColor"
          strokeDasharray="282.743"
          strokeDashoffset={282.743 - (282.743 * percentage) / 100}
        />
      </svg>
      <div className="absolute text-xl font-bold">{percentage}%</div>
    </div>
  );
};

export default Circle;
