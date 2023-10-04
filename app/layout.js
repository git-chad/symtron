import Cursor from "./components/custom-cursor/cursor";
import Navbar from "./components/navbar/navbar-component";
import "./globals.css";
import { Overpass } from "next/font/google";

const overpass = Overpass({ subsets: ["latin"] });

export const metadata = {
  title: "Symtron",
  description: "Built by TOJU",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${overpass.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
