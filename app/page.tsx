import Navbar from "@/components/ui/Navbar";
import Temprature from "./components/Temprature/Temprature";
import AirPollution from "./components/airPollution/airPollution";
import SunSet from "./components/sunset/SunSet";
import Wind from "./components/wind/Wind";

export default function Home() {
  return (
    <main className="mx-[1px] lg:mx-[2rem] xl:mx-[6rem] 2xl:mx-[16rem] m-auto ">
      <Navbar />
      <div className=" pb-4 flex flex-col gap-4 md:flex-row ">
        <div className="flex flex-col gap-4 w-full min-w-[18rem] md:w-[35rem]">
          <Temprature />
        </div>
        <div className=" flex flex-col w-full">
          <div className=" instruments grid w-full gap-4 col-span-full sm-2:col-span-2 lg:grid-cols-3">
            <AirPollution />
            <SunSet />
            <Wind />
          </div>
        </div>
      </div>
    </main>
  );
}
