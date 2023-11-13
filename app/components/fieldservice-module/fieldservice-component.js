import React from 'react'
import { Cairo } from "next/font/google";
import "./fieldservice-module.scss";

const cairo = Cairo({
    weight: ["variable"],
    subsets: ["latin"],
  });

const services = [
    {
      number: "24",
      description:["Area metropolitana", "Asistencia de profesional tecnico con repuestos de uso habitual"]
       
    },
    {
      number: "48",
      description:["Capitales de provincia", "Ciudades cabecera"]
    },
    {
      number: "72",
      description: ["Cobertura Nacional", "Distribucion “Just-in-time”."]
    }
  ];


const fieldservice = () => {
  return (
   
<main className="flex flex-col mt-20 justify-items-center ml-6">
      <div className="flex flex-row  ">
        <div className="flex flex-col  ">
          <h1 className="text-4xl font-bold mt-6">Field Service</h1>
          <p className="text-xl mt-6">
          Symtron SA empresa líder en la región, en fabricación y mantenimiento de Kioskos </p>
        </div>
        
        <img src="./fieldServiceBanner.jpg" alt="Imagen de servicio" className='w-3/5 h-[800px] object-cover p-8' />
      </div>
      <div className="flex flex-row space-x-32 mt-24 ml-4 ">
        <p className=" w-1/2 ">
          Symtron provee a sus clientes servicios de mantenimiento integrales con el
          valor agregado del sistema de monitoreo, maximizando el time-up de la
          red. La aplicación además maneja remotamente upgrade de firmwares,
          diagnóstico y gestión de incidentes (entre otras capacidades).
        </p>
        <ul className=" w-1/2">
            <li>- Alcance territorial</li>
            <li>- Soporte Nivel 1, 2 y 3</li>
            <li>- Mesa de Ayuda</li>
            <li>- Laboratorio de reparación</li>
            <li>- Sistema de monitoreo Q-net</li>
        </ul>
      </div>
    <h1 className="text-4xl ml-4 mt-32">Nivel de Servicio </h1>

      <section className=" flex flex-col justify-center items-center values-component">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 p-8">
          {services.map((service, index) => (
            <section
              key={index}
              className="relative flex flex-col items-center justify-start mb-4"
            >
              <div className="flex flex-col w-full max-w-[500px] mx-auto  p-8">
                <h2 className="font-extralight mt-4 mb-4">{`${service.number} Horas`}</h2>
                {service.description.map((desc, index) => (
                    <p className="text-start my-2 fieldservice" key={index}>{`- ${desc}`}</p> 
                ))}
                
              </div>
            </section>
          ))}
        </div>
      </section>
      <div className="flex flex-col">
        <h2>Mesa de ayuda</h2>
        <a><h3> </h3></a>
        <a>telefono</a>
      </div>
    </main>
  )
}

export default fieldservice



