"use client";
import { useEffect, useState } from "react";
import { Toggle } from "./Toggle";
import { ChevronLeft, ChevronRight, ChevronUp, ChevronDown } from "./Chevron";
import { useVisitorData } from '@fingerprintjs/fingerprintjs-pro-react'
import { EventsGetResponse, VisitorsResponse } from "@fingerprintjs/fingerprintjs-pro-server-api";
import { getOrdinalWord } from "@/utils/textHelper";
import { getTimeDifference } from "@/utils/dateHelper";
import dynamic from "next/dynamic";


const MainContent = ({ unsealedResult, visitHistory, isLoading }: { unsealedResult: EventsGetResponse | undefined, visitHistory: VisitorsResponse | undefined, isLoading: boolean | undefined }) => {
  const visitorId = unsealedResult?.products.identification?.data?.visitorId || "";
  const city = unsealedResult?.products.ipInfo?.data?.v4?.geolocation.city?.name || "";
  const country = unsealedResult?.products.ipInfo?.data?.v4?.geolocation.country?.name || "";
  const isVPN = unsealedResult?.products.vpn?.data?.result || false;
  const incognitoCount = visitHistory?.visits.filter(session => session.incognito === true).length;
  const allIps = visitHistory?.visits.map(session => session.ip);
  const distinctIps = new Set(allIps);
  const distinctIpCount = distinctIps.size;
  const totalVisitCount = visitHistory?.visits.length;
  const latitude = unsealedResult?.products.ipInfo?.data?.v4?.geolocation.latitude || 0;
  const longitude = unsealedResult?.products.ipInfo?.data?.v4?.geolocation.longitude || 0;
  const [visitIndex, setVisitIndex] = useState(0);

  const handlePrevious = () => {
    setVisitIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setVisitIndex((prev) => Math.min(prev + 1, totalVisitCount! - 1));
  };

  const MapLeaflet = dynamic(() => import('@/components/MapLeaflet').then(mod => mod.default), {
    ssr: false,
  });


  return (
    <div className={`flex border-1 border-gray-300 font-sans rounded-lg ${isLoading ? "blur-xs" : ""}`}>
      <div className="hidden xl:flex flex-col max-w-64 rounded-tl-lg rounded-bl-lg bg-[#CAE2E4] text-xs text-left p-4 shadow-lg font-heading">
        <p>
          Welcome to Fingerprint,
        </p>
        <p>
          Visitor <span className="highlighted-text font-bold">{visitorId}!</span>
        </p>
        <p className="mt-4">
          It&apos;s great to have you here.
        </p>
        <p className="font-bold">This is your {`${getOrdinalWord(totalVisitCount || 1)}`} visit using Chrome.</p>
        <p className="mt-4">
          Your <span className="font-bold">current IP </span>suggests you&apos;re in
        </p>
        <p>{`${city}`}, {`${country}`}</p>
        {!isVPN &&
          <p>
            Are you sure you&apos;re not using a VPN?
          </p>
        }
        <p className="mt-4">
          Curious to explore more? <span className="red-highlighted-text underline">Sign up</span> for a free trial and unlock all the features we offer - without any commitment.
        </p>
        <p className="mt-6">
          Hope we see you soon!
        </p>
      </div>
      <div className="w-full bg-zinc-100 outline-1 outline-zinc-300 rounded-lg shadow-xl min-w-64 xl:rounded-tl-none xl:rounded-bl-none">
        <section className="font-bold flex items-center justify-start px-4 py-2 text-black gap-2 text-sm flex-wrap">
          Hello, visitor ID
          <span className="highlighted-text">
            {visitorId}
          </span>
        </section>
        <section className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y divide-gray-300 border-t-1 border-gray-300 text-xs">
          <div className="flex flex-col gap-1 p-2 pl-4 items-start justify-center">
            <p>Your visit summary</p>
            <p className="font-bold">You visited {`${totalVisitCount}`} time{totalVisitCount === 1 ? "" : "s"}</p>
          </div>
          <div className="flex flex-col gap-1 p-2 pl-4 items-start justify-center sm:border-r-1 border-r-0">
            <p>Incognito</p>
            <p className="font-bold">{`${incognitoCount}`} sessions</p>
          </div>
          <div className="flex flex-col gap-1 p-2 pl-4 items-start justify-center">
            <p>Your visit summary</p>
            <p className="font-bold">{`${distinctIpCount}`} IP</p>
          </div>
          <div className="flex flex-col gap-1 p-2 pl-4 items-start justify-center border-b-1 border-gray-300">
            <p>Geolocation</p>
            <p className="font-bold">{`${distinctIpCount}`} location{distinctIpCount === 1 ? "" : "s"}</p>
          </div>
        </section>
        <section>
          <div className="flex items-start justify-start px-4 py-2 ">
            <p className="text-xs">Your visit history</p>
          </div>
          <div className="flex text-sm justify-between border-y-1 border-gray-300">
            <div className="hidden sm:flex flex-col">
              <button
                tabIndex={-1}
                className={`border-r-1 border-b-1 border-gray-300 w-14 items-center justify-center cursor-pointer hidden sm:flex py-2 ${visitIndex === 0 ? "text-gray-400" : "text-[#008080]"}`}
                onClick={handlePrevious}
              >
                <ChevronUp />
              </button>
              <button
                tabIndex={-1}
                className={`border-r-1 border-b-1 border-gray-300 w-14 items-center justify-center cursor-pointer hidden sm:flex py-2 ${visitIndex === totalVisitCount! - 1 ? "text-gray-400" : "text-[#008080]"}`}
                onClick={handleNext}
              >
                <ChevronDown />
              </button>
            </div>
            <button
              tabIndex={-1}
              className={`border-r-1 border-gray-300 w-20 flex items-center justify-center cursor-pointer sm:hidden ${visitIndex === 0 ? "text-gray-400" : "text-[#008080]"}`}
              onClick={handlePrevious}
            >
              <ChevronLeft />
            </button>
            <div className="flex flex-col gap-1 p-2 pl-4 items-start justify-center text-xs w-[95%] md:w-[94%]">
              <p>{getTimeDifference(Date.now(), visitHistory?.visits[visitIndex].timestamp ?? Date.now())}</p>
              <p className="font-bold flex-nowrap text-left">{`${visitHistory?.visits[visitIndex].ipLocation?.city?.name || city}`}, {`${visitHistory?.visits[visitIndex].ipLocation?.country?.name || country}`}</p>
            </div>
            <div className="h-20 w-full hidden sm:flex items-center justify-center border-l-1 border-gray-300 overflow-hidden">
              <MapLeaflet latitude={visitHistory?.visits[visitIndex].ipLocation?.latitude ?? latitude} longitude={visitHistory?.visits[visitIndex].ipLocation?.longitude ?? longitude} mapId={"map-sm"} />
            </div>
            <div>
            </div>
            <button
              tabIndex={-1}
              className={`border-l-1 border-gray-300 w-20 flex items-center justify-center cursor-pointer sm:hidden ${visitIndex === totalVisitCount! - 1 ? "text-gray-400" : "text-[#008080]"}`}
              onClick={handleNext}
            >
              <ChevronRight />
            </button>
          </div>
          <div className="h-20 flex sm:hidden">
            <MapLeaflet latitude={visitHistory?.visits[visitIndex].ipLocation?.latitude ?? latitude} longitude={visitHistory?.visits[visitIndex].ipLocation?.longitude ?? longitude} mapId={"map-xs"} />
          </div>
        </section>
        <section className="grid grid-cols-2 divide-x divide-y divide-gray-300  border-gray-300 text-xs sm:pl-[55px]">
          <div className="flex flex-col gap-1 p-2 pl-4 items-start justify-center border-b-1 sm:border-l-1 border-gray-300">
            <p className="font-bold">IP Address</p>
            <p>{`${visitHistory?.visits[visitIndex].ip}`}</p>
          </div>
          <div className="flex flex-col gap-1 p-2 pl-4 items-start justify-center border-r-0 bg-green-100 border-b-1">
            <p className="font-bold">Incognito mode</p>
            <p className="text-green-700 font-bold">{visitHistory?.visits[visitIndex].incognito ? "Detected" : "Not Detected"}</p>
          </div>
          <div className="flex flex-col gap-1 p-2 pl-4 items-start justify-center border-b-0 sm:border-l-1 border-gray-300">
            <p className="font-bold">Browser</p>
            <p>{`${visitHistory?.visits[visitIndex].browserDetails.browserName}`} {`${visitHistory?.visits[visitIndex].browserDetails.browserFullVersion}`}</p>
          </div>
          <div className="flex flex-col gap-1 p-2 pl-4 items-start justify-center  border-gray-300 bg-red-100 rounded-br-lg">
            <p className="font-bold">VPN</p>
            <p className="text-red-400 font-bold">{isVPN ? "Detected" : "Not Detected"}</p>
          </div>
        </section>
      </div>
    </div>

  );
}

export default function Modal() {
  const { isLoading, data } = useVisitorData(
    { extendedResult: true },
    { immediate: true }
  );

  const [sealedResult, setSealedResult] = useState<string | undefined>();
  const [unsealedResult, setUnsealedResult] = useState<EventsGetResponse | undefined>(undefined);
  const [visitHistory, setVisitHistory] = useState<VisitorsResponse | undefined>(undefined);
  const [isDeveloper, setIsDeveloper] = useState(false);

  // Set sealedResult once data is loaded
  useEffect(() => {
    if (data?.sealedResult) {
      setSealedResult(data.sealedResult);
    }
  }, [data]);

  // Unseal data when sealedResult is available
  useEffect(() => {
    if (!sealedResult) return;

    const unsealData = async () => {
      try {
        const response = await fetch('/api/unseal', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ sealedResult }),
        });

        if (!response.ok) {
          const { error } = await response.json();
          throw new Error(error || 'Unsealing failed');
        }

        const { unsealedResult } = await response.json();
        setUnsealedResult(unsealedResult);

        const visitHistoryResponse = await fetch('/api/visit-history', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ visitorId: unsealedResult?.products.identification?.data?.visitorId }),
        });

        if (!visitHistoryResponse.ok) {
          const { error } = await response.json();
          throw new Error(error || 'Missing visitor id');
        }

        const visitHistoryJson = await visitHistoryResponse.json();
        setVisitHistory(visitHistoryJson);

      } catch (err) {
        console.error('Failed to unseal:', err);
      }
    };

    unsealData();
  }, [sealedResult]);

  return (
    <div className="mx-4 sm:mx-auto max-w-4xl py-4 sm:px-6 sm:py-4 lg:px-8">
      <div className="isolate overflow-hidden bg-white p-4 text-center shadow-2xl rounded-3xl flex flex-col gap-2 text-zinc-950">
        <div className="w-full flex items-center justify-end min-w-64">
          <Toggle
            isDeveloper={isDeveloper}
            setIsDeveloper={setIsDeveloper}
            label="Im a developer"
          />
        </div>

        <MainContent
          unsealedResult={unsealedResult}
          visitHistory={visitHistory}
          isLoading={isLoading}
        />

      </div>
    </div>
  );
}
