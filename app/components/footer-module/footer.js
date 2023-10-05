import { Cairo } from "next/font/google";
import { Overpass } from "next/font/google";
import Link from "next/link";

const cairo = Cairo({
  weight: ["variable"],
  subsets: ["latin"],
});
const overpass = Overpass({
  weight: ["variable"],
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <main className="flex bg-black h-96 w-screen text-white">
      <section className="flex flex-row border-r-2 border-l-white pt-4 w-[40%] ">
        <div className="flex flex-col items-center border-r-2  border-l-white w-[25%]">
          <Link className="pb-4" href="">
            Products
          </Link>
          <Link className="pt-2" href="#">
            ATM
          </Link>
          <Link className="pt-2" href="#">
            TAS
          </Link>
          <Link className="pt-2" href="#">
            KMM
          </Link>
          <Link className="pt-2" href="#">
            TDP
          </Link>
        </div>
        <div className="flex flex-col items-center border-r-2  border-l-white w-[35%]">
          <h2 className="pb-4">Solutions</h2>
          <Link className="pt-2" href="#">
            Sector Strategies
          </Link>
          <Link className="pt-2" href="#">
            Banking Solutions
          </Link>
          <Link className="pt-2" href="#">
            Entertainment Tech
          </Link>
          <Link className="pt-2" href="#">
            Commerce
          </Link>
        </div>
        <div className="flex flex-col items-center allign-center text-start w-[45%]">
          <h2 className="pb-4">Contact</h2>
          <Link className="pt-2" href="tel:+541152633232">
            (+54) 11 5263 3232
          </Link>
          <Link className="pt-2" href="tel:+5408102203232">
            (+54) 0810 220 3232
          </Link>
          <Link href="https://maps.app.goo.gl/RJsdJquNKvwcDJGYA" className="pt-2">
            Pueyrredón 3831 (CP 1702 ASQ)
          </Link>
          <Link href="https://maps.app.goo.gl/RJsdJquNKvwcDJGYA" className="pt-2"> Ciudadela, Buenos Aires, Argentina</Link>
          <Link className="pt-2" href="mailto:symtron@latam.com">
            symtron@latam.com
          </Link>
        </div>
      </section>

      <section className=" border-r-2 border-l-white w-[18%]">
        <div className="flex flex-col items-end  ">
          <Link className="pt-9 text-3xl font-bold" href="#">
            Service
          </Link>
          <Link className="pt-7 text-3xl font-bold" href="#">
            About us
          </Link>
          <Link className="pt-7 text-3xl font-bold" href="#">
            News
          </Link>
          <a className="pt-2">icono 1</a>
          <a className="pt-2">icono 2</a>
        </div>
        <div className=" border-t-white border-r-2 w-[30%]  ">
            </div>
      </section>

      <section className="flex-col w-[25%]">
        <div>
          <h1>SYMTRON</h1>
        </div>
        <div>
          <p>© 2023 Symtron - Todos los derechos reservados.</p>
        </div>
      </section>
    </main>
  );
};

export default Footer;
