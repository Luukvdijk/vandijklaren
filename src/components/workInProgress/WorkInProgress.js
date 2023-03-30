import React from 'react'
import workInProgress from "../../assets/logoBlue.svg"
import Navbar from '../navbar/Navbar'

export default function WorkInProgress() {
    return (
        <div>
            <Navbar />
            <div className="flex flex-col gap-5 justify-center items-center w-screen h-screen">
                <img alt='work in progress' src={workInProgress} className="w-3/5" />
                <p className="text-4xl">Wij zijn bezig met onderhoud op deze pagina</p>
            </div>
        </div>
    )
}
