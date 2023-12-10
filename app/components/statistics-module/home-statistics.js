import { Cairo } from "next/font/google";
import { Overpass } from "next/font/google";
import "./home-statistics.scss";
import StatisticItem from "./statistics-item";
import ClientsComponent from "../client-module/clients-component";
import LineBreak from "../line-break";

const cairo = Cairo({
  weight: ["variable"],
  subsets: ["latin"],
});
const overpass = Overpass({
  weight: ["variable"],
  subsets: ["latin"],
});

const HomeStatistics = () => {
  return (
    <div className="flex items-center justify-center mt-16 sm:mt-0 py-16 self-center my-36">
      <div className="statistics-component flex flex-col justify-center items-center 2xl:w-[80%]">
        <div className="flex flex-col lg:flex-row justify-center">
          <div className="text-container 2xl:w-1/2 sm:p-8 flex flex-col items-center lg:items-start lg:w-1/2">
            <h1
              className={`${cairo.className} text-2xl text-center lg:text-start lg:pl-8`}
            >
              Latin America&apos;s leading distributor
            </h1>
            <p className={`mt-8 lg:text-start text-center lg:pl-8`}>
              We pride ourselves on our impressive track record, boasting
              numerous customers, extensive installations, years of expertise,
              and a global footprint.
            </p>
          </div>

          <div className="flex sm:flex-row flex-col lg:items-start mt-8 sm:mt-0">
            <div className="sm:w-1/2 flex flex-col items-center ml-6 sm:ml-0 sm:pr-8 lg:p-0 lg:space-y-8 2xl:space-y-0">
              <StatisticItem
                finalValue={30}
                text="Over two decades of industry leadership"
              />
              <StatisticItem
                finalValue={12000}
                text="Of our products installed"
              />
            </div>
            <div className="flex flex-col sm:items-start ml-6 sm:ml-0 sm:p-8 lg:p-0 lg:space-y-8 2xl:space-y-0">
              <StatisticItem finalValue={400} text="Satisfied customers" />
              <StatisticItem
                finalValue={5}
                text="Presence in 5 countries globally"
              />
            </div>
          </div>
        </div>
        {/* <ClientsComponent /> */}
      </div>
    </div>
  );
};

export default HomeStatistics;
