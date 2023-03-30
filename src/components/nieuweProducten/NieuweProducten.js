import React from "react";
import styles from "./nieuweProducten.module.css";

export default function NieuweProducten() {
  const producten = [
    {
      title: "Honden mand",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies eros ut congue lacinia. Quisque egestas consequat tortor, a varius ligula accumsan nec. Cras aliquet ante augue. ",
      img: "hondMand.svg",
    },
    {
      title: "Honden voer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies eros ut congue lacinia. Quisque egestas consequat tortor, a varius ligula accumsan nec. Cras aliquet ante augue. ",
      img: "hondMand.svg",
    },
    {
      title: "Katten voer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies eros ut congue lacinia. Quisque egestas consequat tortor, a varius ligula accumsan nec. Cras aliquet ante augue. ",
      img: "hondMand.svg",
    },
  ];

  return (
    <div className="flex flex-col p-6">
      <p className="text-4xl font-bold">Nieuwe producten</p>
      <div className="flex flex-col md:flex-row lg:flex-row p-6 gap-8">
        {producten.map((element) => {
          return (
            <div className="w-full" key={element.title}>
              <img
                className="w-full"
                src={require(`../../assets/${element.img}`)}
                alt={element.title}
              />
              <div>
                <p className="text-2xl font-semibold">{element.title}</p>
                <p>{element.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
