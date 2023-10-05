import "./client-module.scss";

const ClientsComponent = () => {

  const imageNumbers = Array.from({ length: 12 }, (_, i) =>
    String(i + 1).padStart(2, "0")
  );

  return (
    <div className="w-screen h-[35vh] flex items-center overflow-hidden relative">
      <div className="flex logos-slide">
        {imageNumbers.map((num) => (
          <img
            className="mx-12 w-[200px]" // added margin for gap between images
            src={`https://www.symtron.com.ar/images/marcas/${num}.png`}
            alt={`Client Image ${num}`}
          />
        ))}

        {imageNumbers.map((num) => (
          <img
            className="mx-12 w-[200px]" // added margin for gap between images
            src={`https://www.symtron.com.ar/images/marcas/${num}.png`}
            alt={`Client Image ${num}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ClientsComponent;
