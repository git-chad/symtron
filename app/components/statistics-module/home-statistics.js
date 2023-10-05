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
    <div className="flex flex-col items-center justify-center">
      <div className="statistics-component flex flex-col justify-center items-center w-[80%]">
        <div className="flex flex-col sm:flex-row justify-center">
          <div className="text-container sm:w-1/2 sm:p-8 flex flex-col items-center sm:items-start">
            <h1
              className={`${cairo.className} sm:text-5xl text-2xl text-center  sm:text-start`}
            >
              Latin America&apos;s leading distributor
            </h1>
            <p className={`mt-8 sm:text-start text-center`}>
              We pride ourselves on our impressive track record, boasting
              numerous customers, extensive installations, years of expertise,
              and a global footprint.
            </p>
          </div>

          <div className="flex sm:flex-row flex-col sm:items-start mt-8 sm:mt-0 sm:w-1/2">
            <div className="sm:w-1/2 flex flex-col sm:items-start ml-6 sm:ml-0">
              <StatisticItem
                finalValue={25}
                text="Over two decades of industry leadership"
              />
              <StatisticItem
                finalValue={8000}
                text="Of our products installed"
              />
            </div>
            <div className="sm:w-1/2 flex flex-col sm:items-start ml-6 sm:ml-0">
              <StatisticItem finalValue={400} text="Satisfied customers" />
              <StatisticItem
                finalValue={4}
                text="Presence in 4 countries globally"
              />
            </div>
          </div>
        </div>
        <ClientsComponent />
      </div>
      <LineBreak />
    </div>
  );
};

export default HomeStatistics;
