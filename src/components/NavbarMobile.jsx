import {
  BellIcon,
  Cog6ToothIcon,
  LightBulbIcon,
  MusicalNoteIcon,
  ShieldExclamationIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";
import { TempIcon } from "../ui/icons";

function NavbarMobile() {
  return (
    <div className="flex gap-4 py-5 justify-evenly md:hidden fixed bottom-0 left-0 right-0 w-full bg-[#202020] text-[#717171] text- z-40 rounded-t-lg">
      <div>
        <Squares2X2Icon className="size-7 text-blue-600" />
        <div className="size-5 bg-blue-600 rounded-md rotate-45 absolute -bottom-3 mr-1"></div>
      </div>
      <div>
        <MusicalNoteIcon className="size-7" />
      </div>
      <div>
        <TempIcon className="size-7 fill-[#717171]" />
      </div>
      <div>
        <ShieldExclamationIcon className="size-7" />
      </div>
      <div>
        <BellIcon className="size-7" />
      </div>
      <div className="size-7 text-center">
        <Cog6ToothIcon />
      </div>
    </div>
  );
}

export default NavbarMobile;
