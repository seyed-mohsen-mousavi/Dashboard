import {
  BellIcon,
  Cog6ToothIcon,
  LightBulbIcon,
  MusicalNoteIcon,
  ShieldExclamationIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";
import { TempIcon } from "../ui/icons";
function Navbar() {
  return (
    <div className="ml-5 my-2 flex-col justify-between sticky md:flex hidden">
      <a href="">
        <img
          src="/image/138166955.jpeg"
          className="size-14 rounded-full object-cover"
          alt="S.mohsen Logo"
        />
      </a>
      <ul>
        <li className="cursor-pointer bg-gray-300 p-5 rounded-3xl">
          <Squares2X2Icon className="size-7  mx-auto fill-gray-900" />
        </li>
        <div className="w-5 h-px rounded-full mx-auto my-2" />
        <li className="cursor-pointer hover:bg-gray-100 transition-colors ease-linear p-5 rounded-3xl">
          <LightBulbIcon className="size-7  mx-auto" />
        </li>
        <div className="w-5 h-px bg-gray-300  rounded-full mx-auto my-2" />
        <li className="cursor-pointer hover:bg-gray-100 transition-colors ease-linear p-5 rounded-3xl">
          <MusicalNoteIcon className="size-7  mx-auto" />
        </li>
        <div className="w-5 h-px bg-gray-300  rounded-full mx-auto my-2" />
        <li className="cursor-pointer hover:bg-gray-100 transition-colors ease-linear p-5 rounded-3xl">
          <TempIcon className="size-7  mx-auto" />
        </li>
        <div className="w-5 h-px bg-gray-300  rounded-full mx-auto my-2" />
        <li className="cursor-pointer hover:bg-gray-100 transition-colors ease-linear p-5 rounded-3xl">
          <ShieldExclamationIcon className="size-7  mx-auto" />
        </li>
        <div className="w-5 h-px bg-gray-300  rounded-full mx-auto my-2" />
        <li className="cursor-pointer hover:bg-gray-100 transition-colors ease-linear p-5 rounded-3xl">
          <BellIcon className="size-7  mx-auto" />
        </li>
      </ul>
      <div className="flex flex-col items-center gap-5">
        <button className="size-6 text-center">
          <Cog6ToothIcon />
        </button>
        <a href="https://github.com/seyed-mohsen-mousavi">
          <img
            src="/image/138166955.jpeg"
            className="size-14 rounded-full object-cover"
            alt="S.mohsen Logo"
          />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
