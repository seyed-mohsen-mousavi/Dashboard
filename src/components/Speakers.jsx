import React, { useEffect, useState, useRef } from "react";
import {
  ArrowPathRoundedSquareIcon,
  ArrowUpTrayIcon,
  ForwardIcon,
  PauseIcon,
  PlayIcon,
} from "@heroicons/react/16/solid";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import CircleTimeline from "./CircleTimeline"; // Import CircleTimeline component
import { motion } from "framer-motion";

function Speakers() {
  const [vacuumCleaner, setVacuumCleaner] = useState(
    JSON.parse(localStorage.getItem("speakers")) || false
  );
  const audioRef = useRef(null);
  const [isAudioReady, setIsAudioReady] = useState(false);
  const [isPlay, setIsPlay] = useState(false);

  useEffect(() => {
    localStorage.setItem("speakers", vacuumCleaner);
  }, [vacuumCleaner]);

  useEffect(() => {
    if (audioRef.current) {
      setIsAudioReady(true);
    }
  }, [audioRef.current]);

  const handleChange = () => {
    setVacuumCleaner((prev) => !prev);
  };

  return (
    <div className="bg-[#e6e7e9] p-5 rounded-3xl">
      <div className="text-gray-800 flex justify-between">
        <div>
          <button className="flex items-center gap-3 font-peyda-mdeium font-semibold">
            بلندگو ها
            <ChevronDownIcon className="size-3 text-gray-900 stroke-[3]" />
          </button>
          <p className="text-xs"></p>
        </div>
        <div className="z-30">
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value={vacuumCleaner}
              checked={vacuumCleaner}
              onChange={handleChange}
              className="sr-only peer"
            />
            <div className="relative w-12 h-7 bg-white rounded-full peer peer-checked:after:-translate-x-5 peer-checked:after:border-white after:content-[''] after:border-none after:absolute after:top-0.5 after:start-[2px] after:bg-[#0b1326] after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-gray-600"></div>
          </label>
        </div>
      </div>
      <div className="flex items-center flex-col justify-between h-full py-7">
        <motion.img
          className="size-40 object-cover rounded-full m-2 mt-1 bg-gray-400"
          src="https://millersmusic.co.uk/cdn/shop/articles/Blog_Image_16.png?v=1674043943"
          alt="speakers"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <audio ref={audioRef}>
          <source src="/audio/Earth.mp3" />
          Your browser does not support the audio element.
        </audio>
        {isAudioReady && <CircleTimeline audioElement={audioRef.current} />}
        <div className="text-gray-900 flex gap-7 justify-evenly w-full">
          <motion.button
            whileHover={{ scale: 1.2, color: "#1f2937" }}
            whileTap={{ scale: 0.9 }}
            className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-300"
          >
            <ArrowUpTrayIcon className="size-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.2, color: "#1f2937" }}
            whileTap={{ scale: 0.9 }}
            className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-300"
          >
            <ForwardIcon className="size-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.3, rotate: 45, backgroundColor: "#d1d5db" }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              if (!isPlay) {
                audioRef.current.play();
              } else {
                audioRef.current.pause();
              }
              setIsPlay(!isPlay);
            }}
            className="p-3 rounded-full bg-gray-400 hover:bg-gray-500 transition-colors duration-300"
          >
            {!isPlay ? (
              <PlayIcon className="size-5" />
            ) : (
              <PauseIcon className="size-5" />
            )}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.2, color: "#1f2937" }}
            whileTap={{ scale: 0.9 }}
            className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-300"
          >
            <ForwardIcon className="size-5 rotate-180" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.2, color: "#1f2937" }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              if (audioRef.current) {
                audioRef.current.currentTime = 0;
                audioRef.current.play();
                setIsPlay(true);
              }
            }}
            className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-300"
          >
            <ArrowPathRoundedSquareIcon className="size-5" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default Speakers;
