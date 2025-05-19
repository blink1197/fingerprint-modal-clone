"use client";
import { useState } from "react";
import { Toggle } from "./Toggle";
import { ChevronLeft, ChevronRight, ChevronUp, ChevronDown } from "./Chevron";


const MainContent = () => {
  return (
    <div className="flex border-1 border-gray-300 font-sans rounded-lg">
      <div className="hidden xl:flex flex-col max-w-64 rounded-tl-lg rounded-bl-lg bg-[#CAE2E4] text-xs text-left p-4 shadow-lg font-heading">
        <p>
          Welcome to Fingerprint,
        </p>
        <p>
          Visitor <span className="highlighted-text font-bold">R3XQyt0R3QJ9NZZ6j2pG!</span>
        </p>
        <p className="mt-2">
          It's great to have you here.
        </p>
        <p className="font-bold">This is your second visit using Chrome.</p>
        <p className="mt-2">
          Your <span className="font-bold">current IP </span>suggests you're in
        </p>
        <p>Caloocan City, Philippines</p>
        <p>
          Are you sure you're not using a VPN?
        </p>
        <p className="mt-2">
          Curious to explore more? <span className="red-highlighted-text">Sign up</span> for a free trial and unlock all the features we offer - without any commitment.
        </p>
        <p className="mt-4">
          Hope we see you soon!
        </p>
      </div>
      <div className="w-full bg-zinc-100 outline-1 outline-zinc-300 rounded-lg shadow-xl min-w-64 xl:rounded-tl-none xl:rounded-bl-none">
        <section className="font-bold flex items-center justify-start px-4 py-4 text-black gap-2 text-sm flex-wrap">
          Hello, visitor ID
          <span className="highlighted-text">
            R3XQyt0R3QJ9NZZ6j2pG
          </span>
        </section>
        <section className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y divide-gray-300 border-t-1 border-gray-300 text-xs">
          <div className="flex flex-col gap-1 p-2 pl-4 items-start justify-center">
            <p>Your visit summary</p>
            <p className="font-bold">You visited 1 time</p>
          </div>
          <div className="flex flex-col gap-1 p-2 pl-4 items-start justify-center border-r-0">
            <p>Incognito</p>
            <p className="font-bold">0 sessions</p>
          </div>
          <div className="flex flex-col gap-1 p-2 pl-4 items-start justify-center">
            <p>Your visit summary</p>
            <p className="font-bold">1 IP</p>
          </div>
          <div className="flex flex-col gap-1 p-2 pl-4 items-start justify-center border-b-1 border-gray-300">
            <p>Geolocation</p>
            <p className="font-bold">1 location</p>
          </div>
        </section>
        <section>
          <div className="flex items-start justify-start px-4 py-4 ">
            <p className="text-xs">Your visit history</p>
          </div>
          <div className="flex text-sm justify-between border-y-1 border-gray-300">
            <div className="hidden sm:flex flex-col">
              <button
                tabIndex={-1}
                className="border-r-1 border-b-1 border-gray-300 w-20 text-gray-400 items-center justify-center cursor-pointer hidden sm:flex py-2">
                <ChevronUp />
              </button>
              <button
                tabIndex={-1}
                className="border-r-1 border-gray-300 w-20 text-gray-400 items-center justify-center cursor-pointer hidden sm:flex py-2">
                <ChevronDown />
              </button>
            </div>
            <button
              tabIndex={-1}
              className="border-r-1 border-gray-300 w-20 text-gray-400 flex items-center justify-center cursor-pointer sm:hidden">
              <ChevronLeft />
            </button>
            <div className="flex flex-col gap-1 p-2 pl-4 items-start justify-center text-xs w-[95%] md:w-[96%]">
              <p>Now</p>
              <p className="font-bold flex-nowrap text-left">Quezon City, Philippines</p>
            </div>
            <div className="h-20 w-full hidden sm:flex items-center justify-center border-l-1 border-gray-300">
              A
            </div>
            <div>
            </div>
            <button
              tabIndex={-1}
              className="border-l-1 border-gray-300 w-20 text-gray-400 flex items-center justify-center cursor-pointer sm:hidden">
              <ChevronRight />
            </button>
          </div>
          <div className="h-20 flex sm:hidden">
          </div>
        </section>
        <section className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y divide-gray-300 border-t-1 border-gray-300 text-xs sm:pl-[79px]">
          <div className="flex flex-col gap-1 p-2 pl-4 items-start justify-center sm:border-l-1 md:border-b-0 border-gray-300">
            <p className="font-bold">IP Address</p>
            <p>10.191.167.192</p>
          </div>
          <div className="flex flex-col gap-1 p-2 pl-4 items-start justify-center border-r-0 bg-green-100 md:border-b-0">
            <p className="font-bold">Incognito mode</p>
            <p className="text-green-700 font-bold">Not Detected</p>
          </div>
          <div className="flex flex-col gap-1 p-2 pl-4 items-start justify-center border-b-0 sm:border-l-1 border-gray-300">
            <p className="font-bold">Browser</p>
            <p>Chrome 136.0.0</p>
          </div>
          <div className="flex flex-col gap-1 p-2 pl-4 items-start justify-center  border-gray-300 bg-red-100 rounded-br-lg">
            <p className="font-bold">VPN</p>
            <p className="text-red-400 font-bold">Detected</p>
          </div>
        </section>
      </div>
    </div>

  );
}

const DeveloperContent = () => {
  return (
    <div className="w-full bg-zinc-100 outline-1 outline-zinc-300 rounded-lg shadow-xl min-w-64">
      <section>
        here
      </section>
    </div>
  );
}


export default function Modal() {
  const [isDeveloper, setIsDeveloper] = useState(false);

  return (
    <div className="mx-4 sm:mx-auto max-w-4xl py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="isolate overflow-hidden bg-white p-4 text-center shadow-2xl  rounded-3xl flex flex-col gap-2 text-zinc-950">
        <div className="w-full  flex items-center justify-end min-w-64">
          <Toggle
            isDeveloper={isDeveloper}
            setIsDeveloper={setIsDeveloper}
            label="I'm a developer"
          />
        </div>

        {!isDeveloper
          ? <MainContent />
          : <DeveloperContent />
        }

      </div>
    </div>
  )
}
