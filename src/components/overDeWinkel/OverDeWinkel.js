import React from "react";
import styles from "./overDeWinkel.module.css";
import foto1 from "../overDeWinkel/Images/foto1.svg";
import foto2 from "../overDeWinkel/Images/foto2.svg";
import foto3 from "../overDeWinkel/Images/foto3.svg";
import foto4 from "../overDeWinkel/Images/foto4.svg";
import foto5 from "../overDeWinkel/Images/foto5.svg";

export default function OverDeWinkel() {
  return (
    <section className="md:flex flew-row lg:w-8/12 mx-auto">
      <div className="md:p-10">
        <div>
          <h1 className="text-xl font-bold">Over de Winkel</h1>
        </div>
        <div className="flex flex-col md:flex-row justify-center justify-evenly">
          <div className="flex p-6 basis-1/2 justify-center">
            <img src={foto1} alt="1954" />
          </div>
          <div className="flex flex-col p-6 basis-1/2 justify-center">
            <h1 className="text-lg mb-4">1950</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut natus
              doloremque animi. Dolorem corrupti repellat, quasi libero error
              mollitia dolor quaerat dolores doloremque recusandae cupiditate
              assumenda accusamus sequi amet quisquam nihil rerum at ad maiores
              reiciendis officia! Repellendus, facere cumque?
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse justify-center justify-evenly bg-[#ACD4FA]">
          <div className="flex p-6 basis-1/2 justify-center">
            <img src={foto2} alt="1960" />
          </div>
          <div className="flex flex-col p-6 basis-1/2 justify-center">
            <h1 className="text-lg mb-4">1960</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              possimus et id error officia debitis quas, laborum minima,
              mollitia, delectus tenetur culpa quo suscipit illo ipsum? Deserunt
              consequuntur dolores recusandae fuga quas eius ea similique, modi
              quis, iure, consectetur esse impedit ipsam vero illum. Reiciendis,
              aut! Sapiente officia, facilis repellat eveniet ab, cupiditate
              excepturi saepe optio omnis totam voluptatem id.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center justify-evenly">
          <div className="flex p-6 basis-1/2 justify-center">
            <img src={foto3} alt="1972" />
          </div>
          <div className="flex flex-col p-6 basis-1/2 justify-center">
            <h1 className="text-lg mb-4">1972</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
              sapiente officia eveniet nesciunt cupiditate saepe non et dolor
              aperiam molestias magnam in rem, amet odio, doloribus nisi veniam,
              labore nulla! Quas, magni! Incidunt tenetur ratione quae, ex alias
              itaque dignissimos odit, corporis deserunt at ipsa!
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse justify-center justify-evenly bg-[#ACD4FA]">
          <div className="flex p-6 basis-1/2 justify-center">
            <img src={foto4} alt="2000" />
          </div>
          <div className="flex flex-col p-6 basis-1/2 justify-center">
            <h1 className="text-lg mb-4">2000</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
              dolores inventore amet pariatur dolor atque odio voluptas, dicta
              perspiciatis animi maxime iste, obcaecati corporis modi corrupti.
              Asperiores, eos, sed deleniti qui iste atque, facilis quae error
              voluptatum modi quam. Ratione consequuntur nemo omnis doloremque
              maxime dolores odit quas debitis repellat?
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center justify-evenly">
          <div className="flex p-6 basis-1/2 justify-center">
            <img src={foto5} alt="nu" />
          </div>
          <div className="flex flex-col p-6 basis-1/2 justify-center">
            <h1 className="text-lg mb-4">Heden</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Recusandae velit autem sunt aliquid quasi tenetur nostrum
              excepturi, perspiciatis possimus a vel ipsam, odio officia quam
              repudiandae omnis iusto laborum ullam, ex fugit. Numquam voluptate
              officiis voluptates iste quidem reprehenderit deserunt quasi
              placeat, quod tempore temporibus sunt facere suscipit, est
              repellendus delectus debitis voluptas eaque! Dolorum deserunt
              architecto labore qui possimus.
            </p>
          </div>
        </div>
      </div>
      <div className=" md:flex flex-col fixed">
        <div>
          <h1>1951</h1>
        </div>
        <div>
          <h1>1960</h1>
        </div>
        <div>
          <h1>1972</h1>
        </div>
        <div>
          <h1>2000</h1>
        </div>
        <div>
          <h1>Nu</h1>
        </div>
      </div>
    </section>
  );
}
