import React from "react";
import Navbar from "../../components/navbar/Navbar";
import LandingPage from "../../components/landing/LandingPage";
import Footer from "../../components/footer/Footer";
import DogCatCard from "../../components/dogCatCard/DogCatCard";

export default function DogFood() {
    return (
        <div className="h-fit">
            <Navbar />
            <LandingPage />
            <DogCatCard />
            <Footer />
        </div>
    )
}
