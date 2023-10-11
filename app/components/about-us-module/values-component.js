import React from "react";
import { Cairo } from "next/font/google";
import "./about-us-module.scss";

const cairo = Cairo({
  weight: ["variable"],
  subsets: ["latin"],
});

const services = [
  {
    number: "01",
    title: "Our mission",
    description:
      "Design, develop, and produce high-quality tech products for both domestic and international markets. We aim to fulfill specific needs with innovative self-service solutions that enhance the omnichannel customer experience.",
  },
  {
    number: "02",
    title: "Our vision",
    description:
      "Lay solid foundations for growth to achieve regional leadership through strategic business partnerships, strengthening all parties involved, with the goal of entering new markets. We strive to solidify our position at the top of our segment.",
  },
  {
    number: "03",
    title: "Our values",
    description:
      "Uphold honorable conduct. Foster a culture rooted in effective communication, respect, and best practices. Champion teamwork within and outside the company. Always prioritize customer satisfaction.",
  }
];

const ValuesComponent = () => {
  return (
    <>
      <main className="values-component flex flex-col justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 p-8">
          {services.map((service, index) => (
            <section
              key={index}
              className="relative flex flex-col items-center justify-start mb-4"
            >
              <div className="flex flex-col w-full max-w-[500px] mx-auto">
                <h2 className="font-extralight mt-4">{service.number}</h2>
                <h3
                  className={`${cairo.className} font-bold mt-8 leading-[95%]`}
                >
                  {service.title}
                </h3>
                <p className="text-start my-8">{service.description}</p>
              </div>
            </section>
          ))}
        </div>
      </main>
    </>
  );
};

export default ValuesComponent;
