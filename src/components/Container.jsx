import { BoltIcon, ShareIcon } from "@heroicons/react/24/outline";
import Rooms from "./Rooms";
import BedRoom from "./BedRoom";
import Speakers from "./Speakers";
import LivingRoom from "./LivingRoom";
import { motion } from "framer-motion";
import { TempIcon, WindIcon } from "../ui/icons";

function Container() {
  return (
    <div className="grid grid-cols-4 w-full gap-5">
      <div className="relative col-span-3 xl:h-[30rem] 2xl:h-[35rem] rounded-3xl overflow-hidden">
        <motion.div
          className="absolute top-5 px-5 font-peyda-mdeium z-10 text-sm text-gray-900 flex justify-between w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="bg-white px-4 py-1.5 rounded-full flex items-center gap-2"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="size-3 bg-red-500 rounded-full animate-ping" />
            زنده
            <div className="size-3 bg-red-500 rounded-full absolute" />
          </motion.div>
          <div className="flex gap-2 cursor-default">
            <motion.div
              className="bg-white/50 backdrop-blur px-4 py-1.5 rounded-full flex items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <TempIcon className="size-5" />
              <p className="flex items-center pt-1">
                C°<span>24</span>
              </p>
            </motion.div>
            <motion.div
              className="bg-white/50 backdrop-blur px-4 py-1.5 rounded-full flex items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <BoltIcon className="size-5" />
              <p className="pt-1">350w</p>
            </motion.div>
            <motion.div
              className="bg-white/50 backdrop-blur px-4 py-1.5 rounded-full flex items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <ShareIcon className="size-4 scale-x-[-1]" />
              <p className="pt-1">50%</p>
            </motion.div>
            <motion.div
              className="bg-white/50 backdrop-blur px-4 py-1.5 rounded-full flex items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <WindIcon className="size-5" />
              <p className="pt-1">80%</p>
            </motion.div>
          </div>
        </motion.div>
        <motion.img
          src="/image/Catena.webp"
          alt=""
          className="w-full h-full object-cover scale-x-[-1] aspect-video"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <Rooms />
      <BedRoom />
      <LivingRoom />
      <Speakers />
    </div>
  );
}

export default Container;
