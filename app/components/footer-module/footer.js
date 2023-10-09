import { Cairo } from "next/font/google";
import Link from "next/link";

const cairo = Cairo({
  weight: ["variable"],
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <main className="lg:flex hidden bg-[#1E2124] h-96 w-full text-white lg:mt-96">
      <section className="flex flex-row border-r-2 border-l-white text-sm  w-[45%] ">
        <div className=" border-r-2  border-l-white w-[20%]">
          <div className="flex flex-col ml-4">
            <Link
              className={`${cairo.className} font-bold text-base mt-4`}
              href="/products"
            >
              Products
            </Link>
            <Link className="mt-4" href="#">
              ATM
            </Link>
            <Link className="mt-3" href="#">
              TAS
            </Link>
            <Link className="mt-3" href="#">
              KMM
            </Link>
            <Link className="mt-3" href="#">
              TDP
            </Link>
          </div>
        </div>

        <div className="flex flex-col border-r-2  border-l-white w-[33%]">
          <div className="flex flex-col ml-8  ">
            <h2 className={`${cairo.className} font-bold text-base mt-4`}>
              Solutions
            </h2>
            <Link className="mt-4" href="#">
              Sector Strategies
            </Link>
            <Link className="mt-3" href="#">
              Banking Solutions
            </Link>
            <Link className="mt-3" href="#">
              Entertainment Tech
            </Link>
            <Link className="mt-3" href="#">
              Commerce Innovation
            </Link>
          </div>
        </div>
        <div className="items-center allign-center text-start w-[41%]">
          <div className="flex flex-col ml-8 mt-4 ">
            <h2 className="font-bold text-base">Contact</h2>
            <a className="mt-4" href="tel:+541152633232">
              (+54) 11 5263 3232
            </a>
            <a className="mt-3" href="tel:+5408102203232">
              0810 220 3232
            </a>
            <a
              href="https://maps.app.goo.gl/RJsdJquNKvwcDJGYA"
              className="mt-3"
            >
              Pueyrredón 3831 (CP 1702 ASQ)
            </a>
            <a
              href="https://maps.app.goo.gl/RJsdJquNKvwcDJGYA"
              className="mt-3"
            >
              Ciudadela, Buenos Aires, Argentina
            </a>
            <a className="mt-3" href="mailto:symtron@latam.com">
              symtron@latam.com
            </a>
          </div>
        </div>
      </section>

      <section className=" border-r-2 border-l-white w-[30%] ">
        <div className="flex flex-col items-end mr-6 h-[60%] relative">
          <Link
            className={`${cairo.className} font-bold text-base mt-4`}
            href="#"
          >
            Service
          </Link>
          <Link
            className={`${cairo.className} font-bold text-base mt-4`}
            href="#"
          >
            About us
          </Link>
          <Link
            className={`${cairo.className} font-bold text-base mt-4`}
            href="#"
          >
            News
          </Link>

          <div className="flex flex-row absolute bottom-0 right-0">
            <a>
              <img src="/Frame-1.svg" alt="#"></img>
            </a>
            <a className="ml-4">
              <img src="/Frame.svg" alt="#"></img>
            </a>
          </div>
        </div>
        <div className=" border-t-white border-t-2 mt-4  "></div>
      </section>

      <section className="flex flex-col w-[59%]">
        <div className="h-[85%] relative">
          <h1
            className={`${cairo.className} absolute bottom-0 right-0 leading-4 font-black text-8xl mr-10 mb-6`}
          >
            SYMTRON
          </h1>
        </div>
        <div className="border-t-white border-t-2 mt-4 ">
          <p className="text-sm mt-3 ml-4">
            © 2023 Symtron - Todos los derechos reservados.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Footer;
