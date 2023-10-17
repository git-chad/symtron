"use client";
import { Cairo } from "next/font/google";
import React from "react";
import { useForm } from "../../hooks/useForm";

const cairo = Cairo({
  weight: ["variable"],
  subsets: ["latin"],
});

const initialForm = {
  firstname: "",
  email: "",
  phone: "",
  message: "",
};

const validationsForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexMessage = /^.{1,255}$/;
  let regexPhone = /^[0-9]+$/;

  if (!form.firstname.trim()) {
    errors.firstname = "El 'Nombre' es requerido";
  } else if (!regexName.test(form.name)) {
    errors.firstname = "El campo 'Nombre' sólo acepta letras ";
  }

  if (!form.email.trim()) {
    errors.email = "El campo 'Email' es requerido";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El campo 'Email' es incorrecto";
  }

  if (!form.phone.trim()) {
    errors.phone = "El telefono es requerido";
  } else if (!regexPhone.test(form.phone.trim())) {
    errors.phone = "El campo 'Teléfono' sólo acepta números";
  }

  if (!form.message.trim()) {
    errors.message = "El 'mensaje' es requerido";
  } else if (!regexMessage.test(form.message.trim())) {
    errors.comments = "El campo 'mensaje' no debe exceder los 255 caracteres";
  }

  return errors;
};

const ContactUs = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  return (
    <main className="flex flex-col items-center justify-center w-full h-screen">
      <div className="relative flex sm:flex-row flex-col sm:w-5/6 justify-evenly mt-8">
        <div className="flex flex-col justify-between ">
          <h1 className={`${cairo.className} text-6xl font-bold p-8 sm:p-0`}>
            {" "}
            Contact Us
          </h1>
          <div className="hidden sm:flex flex-col space-y-2">
            <a href="tel=+541152633232">(+54) 11 5263 3232</a>
            <a href="tel:+5408102203232">0810 220 3232</a>
            <a href="mailto:symtron@latam.com">symtron@latam.com</a>
          </div>
        </div>
        <form
          className="flex flex-col justify-between space-y-2 sm:w-[40%]"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <label>Name</label>
          <input
            className="border-b-2 border-gray-300 outline-none"
            type="text"
            name="firstname"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.firstname}
            required
          />
          {errors.firstname && (
            <p className=" text-sm text-red-600">{errors.firstname}</p>
          )}

          <label>Email</label>
          <input
            className="border-b-2 border-gray-300 outline-none"
            type="email"
            name="email"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.email}
            required
          />
          {errors.email && (
            <p className=" text-sm text-red-600">{errors.email}</p>
          )}
          <label>Phone</label>

          <input
            name="phone"
            className="border-b-2 border-gray-300 outline-none "
            type="tel"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.phone}
            required
          />
          {errors.phone && (
            <p className=" text-sm text-red-600">{errors.phone}</p>
          )}
          <label>Message</label>

          <textarea
            name="message"
            className="border-2 border-gray-300 rounded-md h-40 outline-none"
            type="text"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.message}
            required
          />
          {errors.message && (
            <p className=" text-sm text-red-600">{errors.message}</p>
          )}

          <button
            type="submit"
            className="bg-[#1e2124] text-white py-2 w-3/6 self-center"
          >
            Send
          </button>
        </form>
        <div className="pointer-events-none shape01 absolute top-0 -left-12 sm:w-[15vw] sm:h-[15vw] w-48 h-48 bg-green-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob"></div>
        <div className="pointer-events-none shape02 absolute -top-48 left-16 sm:w-[25vw] sm:h-[25vw] w-48 h-48 bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="pointer-events-none shape03 absolute -top-24 -left-48 sm:w-[30vw] sm:h-[30vw] w-48 h-48 bg-indigo-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
    </main>
  );
};

export default ContactUs;
