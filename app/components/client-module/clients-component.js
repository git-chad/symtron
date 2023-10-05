import Image from "next/image";
import React from "react";

const ClientsComponent = () => {
  // Create an array from 1 to 12
  const imageNumbers = Array.from({ length: 12 }, (_, i) =>
    String(i + 1).padStart(2, "0")
  );

  return (
    <div className="w-screen h-[35vh] bg-slate-500 flex overflow-x-hidden items-center">
      <div className="flex gap-12 w-full h-[200px] whitespace-nowrap">
        {imageNumbers.map((num) => (
              <img
                src={`https://www.symtron.com.ar/images/marcas/${num}.png`}
                alt={`Client Image ${num}`}
              />
        ))}
      </div>
    </div>
  );
};

export default ClientsComponent;
