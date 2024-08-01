import {
  ChevronLeftIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";

function Rooms() {
  return (
    <div className="bg-transparent bg-gradient-to-b from-[#d6d9e8] to-[#f5e9d1] rounded-3xl p-5">
      <div className="flex justify-between w-full items-center p-1">
        <h3 className="text-lg font-peyda-mdeium font-semibold text-gray-800">اتاق ها</h3>
        <ExclamationCircleIcon className="size-6 text-gray-500" />
      </div>
      <hr className="h-[1.6px] my-2 bg-gray-400 border-0 font-peyda-mdeium" />
      <div className="flex flex-col my-7 gap-3">
        <div className="flex items-center justify-between w-full p-2 cursor-pointer rounded-full hover:bg-white transition-colors ease-linear">
          <div className="flex items-center gap-3">
            <div className="bg-gray-100 p-4 rounded-full">
              <svg
                fill="#000000"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 511.999 511.999"
                xmlSpace="preserve"
                className="size-6"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <g>
                      <path d="M494.565,208.205c-6.121,0-11.251,3.141-14.387,7.894l-24.288-36.256v-50.833c0-29.541-24.435-53.028-53.974-53.028 H110.082c-29.539,0-53.974,23.488-53.974,53.027v50.833l-24.338,36.256c-3.136-4.753-8.317-7.894-14.438-7.894 C7.65,208.203,0,216.054,0,225.738v155.883c-0.001,9.685,7.648,16.991,17.333,16.991h13.058v19.872 c0,9.684,7.851,17.534,17.534,17.534s17.534-7.851,17.534-17.534v-19.872h381.078v19.872c0,9.684,7.851,17.534,17.534,17.534 s17.534-7.851,17.534-17.534v-19.872h13.058c9.684,0,17.334-7.306,17.334-16.99V225.739 C511.999,216.055,504.249,208.205,494.565,208.205z M91.177,129.008c0-10.203,8.703-17.959,18.905-17.959h291.832 c10.203,0,18.905,7.756,18.905,17.959v38.151h-15.37c0.103-0.767,0.174-1.543,0.174-2.338c0-9.684-7.851-17.534-17.534-17.534 H123.908c-9.684,0-17.534,7.851-17.534,17.534c0,0.795,0.071,1.571,0.174,2.338H91.177V129.008z M83.855,201.941 c0.866,0.132,1.744,0.286,2.647,0.286h341.79l14.329,21.041H69.376L83.855,201.941z M476.93,363.543H35.067V258.337H476.93 V363.543z"></path>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div>
              <p className="font-peyda-mdeium">اتاق خواب</p>
              <p className="text-gray-400 text-sm pt-1">
                3 دستگاه
              </p>
            </div>
          </div>
          <div>
            <ChevronLeftIcon className="size-5 ml-2" />
          </div>
        </div>
        <div className="flex items-center justify-between w-full p-2 cursor-pointer rounded-full hover:bg-white transition-colors ease-linear">
          <div className="flex items-center gap-3">
            <div className="bg-gray-100 p-4 rounded-full">
              <svg
                fill="#000000"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="size-6"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M16.84,11.63A3,3,0,0,0,19,10.75l2.83-2.83a1,1,0,0,0,0-1.41,1,1,0,0,0-1.42,0L17.55,9.33a1,1,0,0,1-1.42,0h0L19.67,5.8a1,1,0,1,0-1.42-1.42L14.72,7.92a1,1,0,0,1,0-1.41l2.83-2.83a1,1,0,1,0-1.42-1.42L13.3,5.09a3,3,0,0,0,0,4.24h0L12,10.62,3.73,2.32l-.1-.06a.71.71,0,0,0-.17-.11l-.18-.07L3.16,2H3.09l-.2,0a.57.57,0,0,0-.18,0,.7.7,0,0,0-.17.09l-.16.1-.07,0-.06.1a1,1,0,0,0-.11.17,1.07,1.07,0,0,0-.07.19s0,.07,0,.11a11,11,0,0,0,3.11,9.34l2.64,2.63-5.41,5.4a1,1,0,0,0,0,1.42,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29L9.9,15.57h0l2.83-2.83h0l2-2A3,3,0,0,0,16.84,11.63ZM9.19,13.45,6.56,10.81A9.06,9.06,0,0,1,4,5.4L10.61,12Zm6.24.57A1,1,0,0,0,14,15.44l6.3,6.3A1,1,0,0,0,21,22a1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.42Z"></path>
                </g>
              </svg>
            </div>
            <div>
              <p className="font-peyda-mdeium">آشپزخانه</p>
              <p className="text-gray-400 text-sm pt-1">
                3 دستگاه
              </p>
            </div>
          </div>
          <div>
            <ChevronLeftIcon className="size-5 ml-2" />
          </div>
        </div>
        <div className="flex items-center justify-between w-full p-2 cursor-pointer rounded-full hover:bg-white transition-colors ease-linear bg-white">
          <div className="flex items-center gap-3">
            <div className="bg-gray-100 p-4 rounded-full">
              <svg
                fill="#000000"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 554.625 554.625"
                xmlSpace="preserve"
                className="size-6"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <g>
                      <path d="M19.125,415.969h38.25c10.566,0,19.125-8.559,19.125-19.125h401.625c0,10.566,8.559,19.125,19.125,19.125h38.25 c10.566,0,19.125-8.559,19.125-19.125V234.281c0-10.566-8.559-19.125-19.125-19.125h-38.25c-10.566,0-19.125,8.559-19.125,19.125 v47.812v38.25v19.125H459H286.875H267.75H95.625H76.5v-19.125v-38.25v-47.812c0-10.566-8.559-19.125-19.125-19.125h-38.25 C8.559,215.156,0,223.715,0,234.281v162.562C0,407.41,8.559,415.969,19.125,415.969z"></path>
                      <path d="M248.826,243.844c6.923,0,13.33,2.008,18.924,5.269v-91.331c0-10.566-8.559-19.125-19.125-19.125H114.75 c-10.566,0-19.125,8.559-19.125,19.125v91.494c5.747-3.366,12.374-5.432,19.527-5.432H248.826z"></path>
                      <path d="M267.75,282.094c0-10.566-8.463-19.125-19.029-19.125h-0.096H115.152c-10.567,0-19.527,8.559-19.527,19.125v38.25H267.75 V282.094z"></path>
                      <path d="M440.076,243.844c6.923,0,13.33,2.008,18.924,5.269v-91.331c0-10.566-8.559-19.125-19.125-19.125H306 c-10.566,0-19.125,8.559-19.125,19.125v91.494c5.747-3.366,12.374-5.432,19.526-5.432H440.076z"></path>
                      <path d="M459,282.094c0-10.566-8.463-19.125-19.029-19.125h-0.096H306.401c-10.566,0-19.526,8.559-19.526,19.125v38.25H459 V282.094z"></path>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div>
              <p className="font-peyda-mdeium">هال</p>
              <p className="text-gray-400 text-sm pt-1">
                5 دستگاه
              </p>
            </div>
          </div>
          <div>
            <ChevronLeftIcon className="size-5 ml-2" />
          </div>
        </div>
        <div className="flex items-center justify-between w-full p-2 cursor-pointer rounded-full hover:bg-white transition-colors ease-linear">
          <div className="flex items-center gap-3">
            <div className="bg-gray-100 p-4 rounded-full">
              <svg
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
                className="size-6"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fill="var(--ci-primary-color, #000000)"
                    d="M464,280H80V100A51.258,51.258,0,0,1,95.113,63.515l.4-.4a51.691,51.691,0,0,1,58.6-10.162,79.1,79.1,0,0,0,11.778,96.627l10.951,10.951-20.157,20.158,22.626,22.626,20.157-20.157h0L311.157,71.471h0l20.157-20.157L308.687,28.687,288.529,48.844,277.578,37.893a79.086,79.086,0,0,0-100.929-8.976A83.61,83.61,0,0,0,72.887,40.485l-.4.4A83.054,83.054,0,0,0,48,100V280H16v32H48v30.7a23.95,23.95,0,0,0,1.232,7.589L79,439.589A23.969,23.969,0,0,0,101.766,456h12.9L103,496h33.333L148,456H356.1l12,40H401.5l-12-40h20.73A23.969,23.969,0,0,0,433,439.589l29.766-89.3A23.982,23.982,0,0,0,464,342.7V312h32V280ZM188.52,60.52a47.025,47.025,0,0,1,66.431,0L265.9,71.471,199.471,137.9,188.52,126.951A47.027,47.027,0,0,1,188.52,60.52ZM432,341.4,404.468,424H107.532L80,341.4V312H432Z"
                    className="ci-primary"
                  ></path>
                </g>
              </svg>
            </div>
            <div>
              <p className="font-peyda-mdeium">حمام</p>
              <p className="text-gray-400 text-sm pt-1">
                1 دستگاه
              </p>
            </div>
          </div>
          <div>
            <ChevronLeftIcon className="size-5 ml-2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rooms;
