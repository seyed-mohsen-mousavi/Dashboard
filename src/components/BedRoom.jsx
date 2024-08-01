import {
  Battery0Icon,
  ChevronDownIcon,
  ClockIcon,
  CubeIcon,
  PowerIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

function BedRoom() {
  const [vacuumCleaner, setVacuumCleaner] = useState(
    JSON.parse(localStorage.getItem("vacuumCleanerTurn")) || false
  );

  const controls = useAnimation();
  const imageControls = useAnimation();
  const statusControls = useAnimation();

  useEffect(() => {
    localStorage.setItem("vacuumCleanerTurn", vacuumCleaner);

    // Control visibility of the warning layer
    if (vacuumCleaner) {
      controls.start({ opacity: 1, visibility: "visible" });
    } else {
      controls.start({ opacity: 0, visibility: "hidden" });
    }

    // Control animation of the vacuum cleaner image and status
    if (vacuumCleaner) {
      imageControls.start({ opacity: 0.5, scale: 1.05 });
      statusControls.start({ opacity: 0.5 });
    } else {
      imageControls.start({ opacity: 1, scale: 1 });
      statusControls.start({ opacity: 1 });
    }
  }, [vacuumCleaner, controls, imageControls, statusControls]);

  const handleChange = () => {
    setVacuumCleaner((prev) => !prev);
  };

  return (
    <div className="relative col-span-2 bg-[#e6e7e9] p-5 rounded-3xl">
      <div className="text-gray-800 flex justify-between">
        <div>
          <button className="flex items-center gap-3 font-peyda-mdeium font-semibold">
            اتاق خواب
            <ChevronDownIcon className="size-3 text-gray-900 stroke-[3]" />
          </button>
          <p className="text-xs">جارو برقی رباتیک</p>
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
            <div className="relative w-12 h-7 bg-white rounded-full peer  peer-checked:after:-translate-x-5 peer-checked:after:border-white after:content-[''] after:border-none after:absolute after:top-0.5 after:start-[2px] after:bg-[#0b1326]  after:border after:rounded-full after:h-6 after:w-6 after:transition-all  peer-checked:bg-gray-600"></div>
          </label>
        </div>
      </div>
      <div className="relative flex items-center w-52 mx-auto">
        <motion.img
          src="/image/vacuumCleaner.webp"
          className="w-full object-cover mx-auto my-2"
          alt="house Controller"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={imageControls}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute -right-12 top-20">
          <div className="w-14 h-[2px] bg-white rounded"></div>
          <div className="w-[2px] h-10 bg-white rounded"></div>
          <motion.div
            className="bg-white -mr-14 p-2 px-0 -right-10 font-peyda-mdeium rounded-md text-center"
            initial={{ opacity: 0 }}
            animate={statusControls}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm flex justify-center gap-0.5 font-semibold">
              <span>AM</span> 10:00
            </p>
            <p className="text-gray-400 text-xs font-peyda-light">
              تمیزکاری بعدی
            </p>
          </motion.div>
        </div>
        <div className="absolute -left-14 top-2">
          <div className="bg-white -ml-12 p-2 -right-10 font-peyda-mdeium rounded-md text-center">
            <p className="text-sm flex justify-center gap-0.5 font-semibold">
              90%
            </p>
            <p className="text-gray-400 text-xs font-peyda-light">
              وضعیت فیلتر
            </p>
          </div>
          <div className="w-[2px] h-10 bg-white rounded mr-auto"></div>
          <div className="w-14 h-[2px] bg-white rounded"></div>
        </div>
      </div>
      <motion.div
        className={`absolute inset-0 w-full h-full z-20 bg-white/5 backdrop-blur-sm flex items-center`}
        animate={controls}
        transition={{ duration: 0.5 }}
      >
        <p className="mx-auto font-peyda-black text-xl text-gray-800 flex gap-2 items-center">
          <PowerIcon className="size-5 stroke-[4]" />
          جارو برقی خاموش است
        </p>
      </motion.div>
      <div className="flex w-full gap-3">
        <div className="bg-gray-300 rounded-full flex items-center p-1.5">
          <div className="bg-white p-2 rounded-full">
            <CubeIcon className="size-5 stroke-gray-400" />
          </div>
          <div className="text-sm px-5 pr-2">
            <p className="text-gray-800 font-peyda-mdeium font-semibold">
              75 متر مربع
            </p>
            <p className="">منطقه تمیز شده</p>
          </div>
        </div>
        <div className="bg-gray-300 rounded-full flex items-center p-1.5">
          <div className="bg-white p-2 rounded-full">
            <ClockIcon className="size-5 stroke-gray-400" />
          </div>
          <div className="text-sm px-5 pr-2">
            <p className="text-gray-800 font-peyda-mdeium font-semibold">
              30 دقیقه
            </p>
            <p className="">زمان تمیزکاری</p>
          </div>
        </div>
        <div className="bg-gray-300 rounded-full flex items-center p-1.5">
          <div className="bg-white p-2 rounded-full">
            <Battery0Icon className="size-5 stroke-gray-400" />
          </div>
          <div className="text-sm px-5 pr-2">
            <p className="text-gray-800 font-peyda-mdeium font-semibold">80%</p>
            <p className="">شارژ باطری</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BedRoom;
