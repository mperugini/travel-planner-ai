import GeneratePlanButton from "@/components/GeneratePlanButton";
import {Lightbulb} from "lucide-react";
import TravelHero from "@/components/home/TravelHero";

const Banner = () => {
  return (
    <section
      className="lg:px-20 px-5 py-2 
                bg-background
                w-full h-full
                flex lg:flex-row flex-col lg:justify-between justify-center items-center
                gap-5
                min-h-[calc(100svh-4rem)]"
    >
      <article className="flex flex-col h-full justify-center items-center lg:flex-1 ">
        <h1
          className="font-bold lg:text-7xl md:text-5xl text-4xl font-sans
      text-left w-full"
        >
          Descubre el <br /> <span className="text-blue-500">AI</span> Travel{" "}
          <span className="text-blue-500">Plan</span>
        </h1>

        <div className="mt-5 lg:mt-10 rounded-md w-full text-left lg:text-lg md:text-md text-base">
          <div className="flex justify-start  items-center">
            <Lightbulb className="mr-1 text-yellow-600" />
            <span className="text-center ">Imagínate contárselo a tu planificador de viajes,</span>
          </div>
          <div className="p-2">
            <p className="text-blue-500 font-bold tracking-wide lg:text-md md:text-base text-sm">
              'Escapada de fin de semana a una ciudad diferente, <br className="lg:hidden" />
              con presupuesto medio en verano.'
            </p>
            <p
              className="mt-5 mb-5 
                        lg:text-md md:text-base text-sm
                      text-muted-foreground
                        font-medium
                        tracking-wide
                        md:max-w-xl 
                        text-left"
            >
              Nuestra IA no solo comprende, sino que también crea una aventura personalizada. Descubra secretos locales, saboree delicias culinarias y explore lugares emblemáticos con un itinerario diseñado solo para usted.
            </p>
          </div>
        </div>
        <div className="w-full ml-2 flex justify-start">
          <GeneratePlanButton />
        </div>
      </article>
      <figure className="h-full lg:flex-1 flex-1 overflow-hidden">
        <TravelHero />
      </figure>
    </section>
  );
};

export default Banner;
