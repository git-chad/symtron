import { Cairo } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import linkedinIcon from "../../../public/Frame.svg";
import instagramIcon from "../../../public/Frame-1.svg";
import facebookIcon from "../../../public/icons8-facebook.svg";
import localFont from 'next/font/local'

const porscha = localFont({ src: '../../../public/911porschav3.ttf' })

const cairo = Cairo({
  weight: ["variable"],
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <footer className="lg:flex hidden bg-[#1E2124] w-full text-white lg:mt-96">
      <section className="flex flex-row border-r-2 border-l-white text-sm  w-[45%] ">
        <div className=" border-r-2  border-l-white w-[35%]">
          <div className="flex flex-col ml-8">
            <Link
              className={`${cairo.className} font-bold text-lg 2xl:text-2xl mt-4`}
              href="/products"
            >
              Products
            </Link>
            <Link className="mt-8" href="/products/ATM">
              ATM
            </Link>
            <Link className="mt-3" href="/products/TAS">
              TAS
            </Link>
            <Link className="mt-3" href="/products/KMM">
              KMM
            </Link>
            <Link className="mt-3" href="/products/GMG">
              GMG
            </Link>
          </div>
        </div>

        <div className="items-center text-start w-[67%]">
          <div className="flex flex-col ml-8 mt-4">
            <h2 className="font-bold text-lg 2xl:text-2xl">Contact</h2>
            <p className="mt-4 text-lg font-extrabold">Buenos Aires</p>
            <a className="mt-3" href="tel:+541152633232">
              (+54) 11 5263 3232
            </a>
            <a className="mt-4" href="tel:+5408102203232">
              0810 220 3232
            </a>
            <a className="mt-3" href="mailto:symtron@latam.com">
              symtron@latam.com
            </a>
            <a
              href="https://maps.app.goo.gl/RJsdJquNKvwcDJGYA"
              target="_blank"
              className="mt-3"
            >
              Pueyrredón 3831 (CP 1702 ASQ),
              <br />
              Ciudadela, Buenos Aires, Argentina
            </a>
            <a
              href="https://maps.app.goo.gl/RJsdJquNKvwcDJGYA"
              className="mt-3"
            ></a>
          </div>

          <div className=" border-t-2 border-t-white">
            <div className="flex flex-col text-start  ml-8 mb-2">
              <p className="mt-4 text-sm 2xl:text-lg font-extrabold">Bogota</p>
              <a className="mt-3" href="tel:+5717460030">
              +57 (1) 746 00 30
              </a>
              <a className="mt-3" href="mailto:selfia@latam.com">
                selfia@latam.com
              </a>
              <a
                href="https://maps.app.goo.gl/SWyNiGbA7ic7hv9G7"
                target="_blank"
                className="mt-3"
              >
                Calle 74A # 23 - 19
                <br />
                Bogota, Colombia
              </a>

            </div>
          </div>
        </div>
      </section>

      <section className=" border-r-2 border-l-white w-[30%]">
        <div className="flex flex-col items-end mr-6 h-[60%] relative">
          <Link
            className={`${cairo.className} font-bold text-lg 2xl:text-2xl mt-4`}
            href="/solutions"
          >
            Solutions
          </Link>
          <Link
            className={`${cairo.className} font-bold text-lg 2xl:text-2xl mt-4`}
            href="/about"
          >
            About us
          </Link>
          <Link
            className={`${cairo.className} font-bold text-lg 2xl:text-2xl mt-4`}
            href="/contact"
          >
            Contact
          </Link>

          <div className="icons flex mb-4 space-x-3 absolute bottom-0 right-0">
            <a href="https://www.instagram.com/symtron/" target="_blank">
              <Image src={instagramIcon} alt="instagram"></Image>
            </a>
            <a href="https://www.linkedin.com/company/symtron/" target="_blank">
              <Image src={linkedinIcon} alt="linkedin"></Image>
            </a>
            <a
              href="https://www.facebook.com/symtronargentina/"
              target="_blank"
            >
              <Image src={facebookIcon} alt="facebook"></Image>
            </a>
          </div>
        </div>
        <div className=" border-t-white border-t-2 mt-4"></div>
      </section>

      <section className="flex flex-col w-[50%]">
        <div className="h-[85%] relative">
          <h1
            className={`${porscha.className} absolute bottom-0 right-0 leading-4 font-black text-5xl 2xl:text-6xl mr-10 mb-6`}
          >
            SYMTRON
          </h1>
        </div>
        <div className="border-t-white border-t-2 mt-4">
          <p className="text-sm mt-3 ml-4">
            © 2023 Symtron - Todos los derechos reservados.
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
