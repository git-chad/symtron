import { Cairo } from "next/font/google";
import { Overpass } from "next/font/google";
import "./home-statistics.scss"
import StatisticItem from "./statistics-item";


const cairo = Cairo({
    weight: ['variable'],
    subsets: ["latin"]
  });
const overpass = Overpass({
    weight: ['variable'],
    subsets: ["latin"]
  });

  
  const HomeStadistics = () => {
    return (
      <div className="flex h-auto"> 
        <div className="w-1/2 p-8">
          <h2 className={`${cairo.className} text-5xl font-black`}>
            Latin America’s leading<br /> distributor
          </h2>
          <p className={`${overpass.className} mt-4`}>
            We pride ourselves on our impressive track record, boasting<br /> numerous
            customers, extensive installations, years of expertise,<br /> and a global
            footprint.
          </p>
        </div>
        <div className="w-1/2 flex flex-wrap">
          <StatisticItem finalValue={25} text="Over two decades of industry leadership" />
          <StatisticItem finalValue={8000} text="Of our products installed" />
          <StatisticItem finalValue={400} text="Satisfied customers" />
          <StatisticItem finalValue={4} text="Presence in 4 countries globally" />
        </div>
      </div>
    );
  };
  
  export default HomeStadistics;