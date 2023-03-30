import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { Dog, DogFood, DogGoods, Cat, CatFood, CatGoods } from "./Product"
import Devider from "../devider/Devider"

export default function DogCatCard() {
    let location = useLocation();

    useEffect(() => {
        if (location.pathname === "/honden") {
            setPage(Dog)
        }
        if (location.pathname === "/honden/voedsel") {
            setPage(DogFood)
        }
        if (location.pathname === "/honden/goederen") {
            setPage(DogGoods)
        }

        if (location.pathname === "/katten") {
            setPage(Cat)
        }
        if (location.pathname === "/katten/voedsel") {
            setPage(CatFood)
        }
        if (location.pathname === "/katten/goederen") {
            setPage(CatGoods)
        }
    }, [])

    const [page, setPage] = useState(Dog)

    return (
        <section>
            {page?.map((element) => {
                return (
                    <div key={element.title}>
                        <div className="reverseEven md:flex flex-row justify-center pt-16 pb-16">
                            <div className="basis-1/3">
                                <img src={require(`../../assets/${element.img}`)} alt="food" />
                            </div>
                            <div className="flex flex-col basis-1/2 p-16">
                                <div className="flex flex-col justify-between mb-8">
                                    <h1 className="flex justify-center mb-8 text-3xl">{element.title}</h1>
                                    <p>
                                        {element.desription}
                                    </p>
                                </div>
                                <div className="flex justify-evenly">
                                    {element.button === ""
                                        ? ""
                                        :
                                        <Link to={element.direct} className="p-[1em] rounded-[1em] bg-primary-color text-secondary-text-color text-l font-bold md:text-l md:font-normal lg:text-l lg:font-normal">
                                            {element.button}
                                        </Link>
                                    }

                                </div>
                            </div>
                        </div>
                        {element.devider === true
                            ? <Devider />
                            : ""
                        }

                    </div>
                )
            })}

        </section>
    )
}
