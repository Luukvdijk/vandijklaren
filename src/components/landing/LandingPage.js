import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import bg from "../../assets/landingBg.svg";

export default function Landing() {
    let location = useLocation();

    useEffect(() => {
        if (location.pathname === "/honden") {
            setPage(Dog)
        }
        if (location.pathname === "/honden/voedsel") {
            setPage(Dog)
        }
        if (location.pathname === "/honden/goederen") {
            setPage(Dog)
        }

        if (location.pathname === "/katten") {
            setPage(Cat)
        }
        if (location.pathname === "/katten/voedsel") {
            setPage(Cat)
        }
        if (location.pathname === "/katten/goederen") {
            setPage(Cat)
        }
    }, [])

    const Dog = [
        {
            title: "Honden",
            descption: "Wij verkopen een heleboel verschillende soorten merken voor uw hond. Voor verschillende soorten producten. Ook geven wij advies over de verzorging van een hond en wat daarvoor nodig is.",
            img: "landingBg.svg",
        }
    ]

    const Cat = [
        {
            title: "Katten",
            descption: "Wij verkopen een heleboel verschillende soorten merken voor uw hond. Voor verschillende soorten producten. Ook geven wij advies over de verzorging van een hond en wat daarvoor nodig is.",
            img: "bgCat.svg",
        }
    ]

    const [page, setPage] = useState(Dog)

    return (
        <section>
            {page?.map((element) => {
                return (
                    <div key={element.title} className="flex flex-row justify-center w-screen h-[80vh] text-secondary-text-color mt-28">
                        <img
                            className="w-screen h-4/5 object-cover absolute"
                            src={require(`../../assets/${element.img}`)}
                            alt="Foto van een hond als achtergrond"
                        />
                        <div className="w-4/5 h-full relative flex flex-col justify-evenly">
                            <div className="w-fit h-72 flex flex-col md:justify-evenly lg:justify-evenly">
                                <div className="text-5xl md:text-9xl lg:text-9xl font-bold">
                                    {element.title}
                                </div>
                            </div>
                            <div className="w-fit h-80 md:h-56 lg:h-56 flex flex-col justify-evenly">
                                <p className="text-xl w-4/5 md:w-3/5 lg:w-2/5">
                                    {element.descption}
                                </p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </section>
    );
}
