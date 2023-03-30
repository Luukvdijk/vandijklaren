import React from "react";
import bg from "../../assets/landingBg.svg";

export default function Landing() {
  return (
    <div className="flex flex-row justify-center w-screen h-[80vh] text-secondary-text-color mt-28">
      <img
        className="w-screen h-4/5 object-cover absolute"
        src={bg}
        alt="Foto van een hond als achtergrond"
      />
      <div className="w-4/5 h-full relative flex flex-col justify-evenly">
        <div className="w-fit h-72 flex flex-col md:justify-evenly lg:justify-evenly">
          <div className="text-5xl md:text-9xl lg:text-9xl font-bold">
            Wij willen
          </div>
          <div className="text-3xl md:text-6xl lg:text-6xl pl-5 md:pl-32 lg:pl-32">
            het best voor jouw
          </div>
          <div className="text-3xl md:text-6xl lg:text-6xl font-semibold pl-16 md:pl-52 lg:pl-52">
            en jouw huisdier
          </div>
        </div>
        <div className="w-fit h-80 md:h-56 lg:h-56 flex flex-col justify-evenly">
          <p className="text-xl w-4/5 md:w-2/5 lg:w-2/5">
            Alles voor jouw huisdier hebben wij in onze winkel staan. Wij helpen
            graag met advies of als u problemen heeft met uw huisdier.
          </p>
          <div className="flex flex-row gap-[2rem]">
            <button className="p-[1em] rounded-[1em] bg-primary-color text-secondary-text-color text-l font-bold md:text-2xl md:font-normal lg:text-2xl lg:font-normal">
              Kom bij ons langs
            </button>
            <button className="p-[1em] text-secondary-text-color text-2xl">
              Reviews
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
