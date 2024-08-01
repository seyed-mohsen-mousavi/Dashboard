import { ChevronDownIcon, ExclamationCircleIcon } from "@heroicons/react/24/outline";

function LivingRoom() {
  return (
    <div className="rounded-3xl p-5 bg-[#a8acb7]">
      <div className="text-white flex justify-between">
        <button className="flex items-center gap-3 font-peyda-mdeium text-lg">
          هال
          <ChevronDownIcon className="size-3 text-white stroke-[3]" />
        </button>
        <div className="z-30">
          <ExclamationCircleIcon className="size-6 text-gray-100" />
        </div>
      </div>
    </div>
  );
}

export default LivingRoom;
