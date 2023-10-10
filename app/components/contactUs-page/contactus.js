"use client";
import { Cairo } from "next/font/google";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import asset from "public/Asset_1.png"
import Image from "next/image";

const cairo = Cairo({
  weight: ["variable"],
  subsets: ["latin"],
});

const ContactUs = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const { firstName, lastName, email, phone, message } = data;
    const emailBody = `
      Nombre: ${firstName} ${lastName}
      Teléfono: ${phone}
      Email: ${email}
      Mensaje: ${message}
    `;
    const mailtoLink = `mailto:troncosojuan@gmail.com?subject=Mensaje de contacto&body=${encodeURIComponent(
      emailBody
    )}`;
    window.location.href = mailtoLink;

    reset();
  };

  return (
    <main className="flex flex-col items-center justify-center w-screen h-screen mt-8">
      <div className="flex sm:flex-row flex-col sm:w-5/6 justify-evenly">
        <div className="flex flex-col justify-between">
          <h1 className={`${cairo.className} text-6xl font-bold mt-4`}> Contact Us</h1>
          <div className="hidden sm:flex flex-col space-y-2">
            <a href="tel=+541152633232">(+54) 11 5263 3232</a>
            <a href="tel:+5408102203232">0810 220 3232</a>
            <a href="mailto:symtron@latam.com">symtron@latam.com</a>
          </div>
        </div>
        <form
          className="flex flex-col justify-between space-y-2 sm:w-[40%]"
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label>First Name</label>
          <Controller
            name="firstName"
            control={control}
            defaultValue=""
            rules={{
              required: "El campo de Nombre es obligatorio",
              minLength: {
                value: 3,
                message: "El campo de Nombre debe tener al menos 3 caracteres",
              },
              maxLength: {
                value: 20,
                message:
                  "El campo de Nombre debe tener como máximo 20 caracteres",
              },
            }}
            render={({ field }) => (
              <>
                <input
                  className={`border-b-2 border-gray-300 outline-none ${
                    errors.firstName ? "border-red-500" : ""
                  }`}
                  type="text"
                  {...field}
                />
                {errors.firstName && (
                  <div className="text-red-500">{errors.firstName.message}</div>
                )}
              </>
            )}
          />

          <label>Last Name</label>
          <Controller
            name="lastName"
            control={control}
            defaultValue=""
            rules={{
              required: "El campo de Apellido es obligatorio",
              minLength: {
                value: 3,
                message:
                  "El campo de Apellido debe tener al menos 3 caracteres",
              },
              maxLength: {
                value: 20,
                message:
                  "El campo de Apellido debe tener como máximo 20 caracteres",
              },
            }}
            render={({ field }) => (
              <>
                <input
                  className={`border-b-2 border-gray-300 outline-none ${
                    errors.lastName ? "border-red-500" : ""
                  }`}
                  type="text"
                  {...field}
                />
                {errors.lastName && (
                  <div className="text-red-500">{errors.lastName.message}</div>
                )}
              </>
            )}
          />

          <label>Email</label>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: "El campo de Email es obligatorio",
              minLength: {
                value: 6,
                message: "El campo de Email debe tener al menos 7 caracteres",
              },
              maxLength: {
                value: 40,
                message:
                  "El campo de Email debe tener como máximo 40 caracteres",
              },
              pattern: {
                value: /^\S+@\S+$/i,
                message: "El campo de Email debe ser un email válido",
              },
            }}
            render={({ field }) => (
              <>
                <input
                  className={`border-b-2 border-gray-300 outline-none ${
                    errors.email ? "border-red-500" : ""
                  }`}
                  type="text"
                  {...field}
                />
                {errors.email && (
                  <div className="text-red-500">{errors.email.message}</div>
                )}
              </>
            )}
          />

          <label>Phone</label>
          <Controller
            name="phone"
            control={control}
            defaultValue=""
            rules={{
              required: "El campo de Teléfono es obligatorio",
              minLength: {
                value: 7,
                message:
                  "El campo de Teléfono debe tener al menos 7 caracteres",
              },
              maxLength: {
                value: 16,
                message:
                  "El campo de Teléfono debe tener como máximo 16 caracteres",
              },
            }}
            render={({ field }) => (
              <>
                <input
                  className={`border-b-2 border-gray-300 outline-none ${
                    errors.phone ? "border-red-500" : ""
                  }`}
                  type="text"
                  {...field}
                />
                {errors.phone && (
                  <div className="text-red-500">{errors.phone.message}</div>
                )}
              </>
            )}
          />

          <label>Message</label>
          <Controller
            name="message"
            control={control}
            defaultValue=""
            rules={{
              required: "El campo de Mensaje es obligatorio",
              minLength: {
                value: 10,
                message:
                  "El campo de Mensaje debe tener al menos 10 caracteres",
              },
              maxLength: {
                value: 250,
                message:
                  "El campo de Mensaje debe tener como máximo 250 caracteres",
              },
            }}
            render={({ field }) => (
              <>
                <textarea
                  className={`border-2 border-gray-300 rounded-md h-40 outline-none ${
                    errors.message ? "border-red-500" : ""
                  }`}
                  {...field}
                />
                {errors.message && (
                  <div className="text-red-500">{errors.message.message}</div>
                )}
              </>
            )}
          />

          <button
            className="bg-slate-700 text-white py-2 px-4 rounded"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
      <Image width={1000} height={0} src={asset} className="absolute top-0 -left-64 opacity-40 -z-10"></Image>
    </main>
  );
};

export default ContactUs;
