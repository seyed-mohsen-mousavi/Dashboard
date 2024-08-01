import { BoltIcon, ShareIcon } from "@heroicons/react/24/outline";
import Rooms from "./Rooms";
import BedRoom from "./BedRoom";
import Speakers from "./Speakers";
import LivingRoom from "./LivingRoom";

function Container() {
  return (
    <div className="grid grid-cols-4 w-full gap-5">
      <div className="relative col-span-3 xl:h-[30rem] 2xl:h-[35 rem] rounded-3xl overflow-hidden">
        <div className="absolute top-5 px-5 font-peyda-mdeium z-10 text-sm text-gray-900 flex justify-between w-full">
          <div className="bg-white px-4 py-1.5 rounded-full flex items-center gap-2">
            <div className="size-3 bg-red-500 rounded-full animate-ping" /> زنده
            <div className="size-3 bg-red-500 rounded-full absolute" />
          </div>
          <div className="flex gap-2 cursor-default">
            <div className="bg-white/50 backdrop-blur px-4 py-1.5 rounded-full flex items-center gap-2">
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
                className="size-5"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fillRule="nonzero"
                      d="M8 5a4 4 0 1 1 8 0v5.255a7 7 0 1 1-8 0V5zm1.144 6.895a5 5 0 1 0 5.712 0L14 11.298V5a2 2 0 1 0-4 0v6.298l-.856.597zm1.856.231V5h2v7.126A4.002 4.002 0 0 1 12 20a4 4 0 0 1-1-7.874zM12 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                    ></path>
                  </g>
                </g>
              </svg>
              <p className="flex items-center pt-1">
                C°<span>24</span>
              </p>
            </div>
            <div className="bg-white/50 backdrop-blur px-4 py-1.5 rounded-full flex items-center gap-2">
              <BoltIcon className="size-5" />
              <p className="pt-1">350w</p>
            </div>
            <div className="bg-white/50 backdrop-blur px-4 py-1.5 rounded-full flex items-center gap-2">
              <ShareIcon className="size-4 scale-x-[-1]" />
              <p className="pt-1">50%</p>
            </div>
            <div className="bg-white/50 backdrop-blur px-4 py-1.5 rounded-full flex items-center gap-2">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M2 15H18.5C20.43 15 22 16.57 22 18.5C22 20.43 20.43 22 18.5 22C16.57 22 15 20.43 15 18.5V18"
                    stroke="#000"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M2 12H18.5C20.42 12 22 10.43 22 8.5C22 6.58 20.42 5 18.5 5C16.58 5 15 6.57 15 8.5V9"
                    stroke="#000"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M2 9H9.31C10.8 9 12 7.79 12 6.31C12 4.82 10.79 3.62 9.31 3.62C7.82 3.62 6.62 4.83 6.62 6.31V6.69"
                    stroke="#000"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </g>
              </svg>
              <p className="pt-1">80%</p>
            </div>
          </div>
        </div>
        <img
          src="/image/Catena.webp"
          alt=""
          className="w-full h-full object-cover scale-x-[-1] aspect-video"
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
