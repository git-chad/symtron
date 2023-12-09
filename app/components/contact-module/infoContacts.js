"use client"
import React from 'react'

const infoContacts = () => {
  return (
    <div className="flex flex-col ">
    <div className="hidden sm:flex flex-col space-y-2 ">
            <p className="text-lg font-extrabold">Buenos Aires</p>
            <a href="tel=+541152633232">(+54) 11 5263 3232</a>
            <a href="tel:+5408102203232">0810 220 3232</a>
            <a href="mailto:symtron@latam.com">symtron@latam.com</a>
    </div>
    <div className="hidden sm:flex flex-col pt-8 space-y-2">
            <p className="text-lg font-extrabold">Bogota</p>
            <a href="tel=+5717460030">+57 (1) 746 00 30</a>
            <a href="mailto:selfia@latam.com">selfia@latam.com</a>
    </div>
    </div>
    
  )
}

export default infoContacts