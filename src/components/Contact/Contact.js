import React, { useState } from "react";
import bg from "../../assets/contactBg.svg";
import checked from "../../assets/checked.svg"

const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/8d5f75b0-c97a-11ed-9580-715614691683";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <div className="relative w-screen h-fit">
        <img
          className="w-screen h-full object-cover absolute brightness-50"
          src={bg}
          alt="maps"
        />
        <div className="flex flex-col h-full w-screen justify-around items-center py-40 md:flex-row md:items-end lg:flex-row lg:items-end">
          <div className="text-white relative basis-1/2 ">
            <div>
              <p className="text-6xl mb-[0.5em]">Neem contact met ons op</p>
              <p className="text-xl">
                Heb je nog vragen die wij niet hebben kunnen beantwoorden op de
                website? <br /> Stuur ons dan een mailtje met je vraag!
              </p>
            </div>
            <div className="backdrop-opacity-30  bg-[#d9d9d9]/60 p-8 rounded-xl mt-[2em] flex flex-col w-full items-center gap-2 cursor-pointer" onClick={() => window.location.href = window.location.href}>
              <img className="w-40" src={checked} alt="checked icon" />
              <p className="text-2xl text-black font-bold">Succes vol verstuurd</p>
              <p className="text-xl text-black font-light text-center">Nog een vraag stellen?</p>
            </div>
          </div>
          <div className="relative w-[12em]">
            <div className="md:absolute inset-x-0 bottom-6 backdrop-opacity-30  bg-[#d9d9d9]/60 p-4 rounded-xl">
              <div className="">
                <p>Zevenend 29</p>
                <p>1251RL Laren NH</p>
              </div>
              <div className="">
                <p>info@vandijklaren.nl</p>
                <p>035-5314262</p>
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }


  return (
    <div className="relative w-screen h-fit">
      <img
        className="w-screen h-full object-cover absolute brightness-50"
        src={bg}
        alt="maps"
      />
      <div className="flex flex-col h-full w-screen justify-around items-center py-40 md:flex-row md:items-end lg:flex-row lg:items-end">
        <div className="text-white relative basis-1/2 ">
          <div>
            <p className="text-6xl mb-[0.5em]">Neem contact met ons op</p>
            <p className="text-xl">
              Heb je nog vragen die wij niet hebben kunnen beantwoorden op de
              website? <br /> Stuur ons dan een mailtje met je vraag!
            </p>
          </div>
          <div className="backdrop-opacity-30  bg-[#d9d9d9]/60 p-8 rounded-xl mt-[2em]">
            <form
              // action={FORM_ENDPOINT}
              onSubmit={handleSubmit}
              method="POST"
              target="_blank"
            >
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Naam"
                  name="name"
                  className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                  required
                />
              </div>
              <div className="mb-3 pt-0">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                  required
                />
              </div>
              <div className="mb-3 pt-0">
                <textarea
                  placeholder="Bericht"
                  name="message"
                  className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full h-36"
                  required
                />
              </div>
              <div className="flex justify-center">
                <button
                  className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="submit"

                >
                  verstuur
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="relative w-[12em]">
          <div className="md:absolute inset-x-0 bottom-6 backdrop-opacity-30  bg-[#d9d9d9]/60 p-4 rounded-xl">
            <div className="">
              <p>Zevenend 29</p>
              <p>1251RL Laren NH</p>
            </div>
            <div className="">
              <p>info@vandijklaren.nl</p>
              <p>035-5314262</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
