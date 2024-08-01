import React, { useEffect, useState, useRef } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

Chart.register(ArcElement, Tooltip, Legend);

function CircleTimeline({ audioElement }) {
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const chartRef = useRef(null);

  useEffect(() => {
    if (!audioElement) return;

    const updateProgress = () => {
      setCurrentTime(audioElement.currentTime);
      setDuration(audioElement.duration);
      const progressPercent =
        (audioElement.currentTime / audioElement.duration) * 100;
      setProgress(progressPercent);
    };

    audioElement.addEventListener("timeupdate", updateProgress);
    audioElement.addEventListener("loadedmetadata", updateProgress);

    return () => {
      audioElement.removeEventListener("timeupdate", updateProgress);
      audioElement.removeEventListener("loadedmetadata", updateProgress);
    };
  }, [audioElement]);

  useEffect(() => {
    if (chartRef.current) {
      const chart = chartRef.current;
      const ctx = chart.canvas.getContext("2d");
      const chartArea = chart.chartArea;
      const radius = chartArea.right - chartArea.left;
      const offset = radius / 2;

      // Calculate the position for the red dot
      const angle = (progress / 100) * 2 * Math.PI - Math.PI / 2;
      const x = offset + (radius / 2) * Math.cos(angle);
      const y = offset + (radius / 2) * Math.sin(angle);

      // Clear previous drawing
      ctx.clearRect(0, 0, chart.canvas.width, chart.canvas.height);

      // Draw the red dot
      ctx.beginPath();
      ctx.arc(x, y, 10, 0, 2 * Math.PI);
      ctx.fillStyle = "#f00";
      ctx.fill();
    }
  }, [progress]);

  // Format time to MM:SS
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const data = {
    datasets: [
      {
        data: [progress, 100 - progress],
        backgroundColor: ["#56555d", "#d1d1d1"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    rotation: 390,
    circumference: 300,
    cutout: "95%",
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        display: false,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="absolute">
      <div
        className="circle-timeline"
        style={{ position: "relative", width: "180px", height: "180px" }}
      >
        <Doughnut ref={chartRef} data={data} options={options} />
        <div
          className="absolute -top-4 left-0 flex text-center justify-center items-center w-full"
        >
          {formatTime(duration)} <div className="h-2.5 w-[2px] bg-gray-400 mx-1 mb-1 rounded-md"></div>{" "}
          {formatTime(currentTime)}
        </div>
      </div>
    </div>
  );
}

export default CircleTimeline;
