import "./client-module.scss";
import Image from "next/image";

const ClientsComponent = () => {

  const imageNumbers = Array.from({ length: 12 }, (_, i) =>
    String(i + 1).padStart(2, "0")
  );

  return (
    <div className="w-screen h-[35vh] flex items-center overflow-hidden relative">
      <div className="flex logos-slide">
        {imageNumbers.map((num) => (
          <Image
            key={num} 
            className="mx-12"
            src={`https://www.symtron.com.ar/images/marcas/${num}.png`}
            alt={`Client Image ${num}`}
            width={200} 
            height={100} 
          />
        ))}

        {imageNumbers.map((num) => (
          <Image
            key={num}
            className="mx-12"
            src={`https://www.symtron.com.ar/images/marcas/${num}.png`}
            alt={`Client Image ${num}`}
            width={200} 
            height={100} 
          />
        ))}
      </div>
    </div>
  );
};

export default ClientsComponent;
