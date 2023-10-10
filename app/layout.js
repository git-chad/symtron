import React from 'react';
import Head from 'next/head';
import Navbar from "./components/navbar/navbar-component";
import "./globals.css";
import { Overpass } from "next/font/google";
import Footer from './components/footer-module/footer';

const overpass = Overpass({ subsets: ["latin"] });

export const metadata = {
  title: "Symtron",
  description: "Built by TOJU",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      
      <body className={`${overpass.className}`}>
        <Navbar />
        {children}
        <Cursor />
        <Footer />
      </body>
    </html>
  );
}
