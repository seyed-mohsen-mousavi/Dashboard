import { XMarkIcon } from "@heroicons/react/16/solid";
import {
  ChevronLeftIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { BedroomIcon, KitchenIcon, HallIcon, BathroomIcon } from "../ui/icons"; 

function Rooms() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const rooms = [
    {
      name: "اتاق خواب",
      count: "3 دستگاه",
      icon: <BedroomIcon className="size-6" />,
    },
    {
      name: "آشپزخانه",
      count: "3 دستگاه",
      icon: <KitchenIcon className="size-6" />,
    },
    { name: "هال", count: "5 دستگاه", icon: <HallIcon className="size-6" /> },
    {
      name: "حمام",
      count: "1 دستگاه",
      icon: <BathroomIcon className="size-6" />,
    },
  ];

  return (
    <div className="bg-transparent bg-gradient-to-b from-[#d6d9e8] to-[#f5e9d1] rounded-3xl p-5">
      <div className="flex justify-between w-full items-center p-1">
        <h3 className="text-lg font-peyda-mdeium font-semibold text-gray-800">
          اتاق ها
        </h3>
        <ExclamationCircleIcon className="size-6 text-gray-500" />
      </div>
      <hr className="h-[1.6px] my-2 bg-gray-400 border-0 font-peyda-mdeium" />
      <div className="flex flex-col my-7 mb-0 gap-3">
        {rooms.map((room, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="flex items-center justify-between w-full p-2 cursor-pointer rounded-full hover:bg-white transition-colors ease-linear"
          >
            <div className="flex items-center gap-3">
              <div className="bg-gray-100 p-4 rounded-full">{room.icon}</div>
              <div>
                <p className="font-peyda-mdeium">{room.name}</p>
                <p className="text-gray-400 text-sm pt-1">{room.count}</p>
              </div>
            </div>
            <div>
              <ChevronLeftIcon className="size-5 ml-2" />
            </div>
          </motion.div>
        ))}
        <button className="text-white flex items-center justify-center bg-gray-900 rounded-full py-5">
          اضافه کردن اتاق <XMarkIcon className="rotate-45 size-4" />
        </button>
      </div>
    </div>
  );
}

export default Rooms;
