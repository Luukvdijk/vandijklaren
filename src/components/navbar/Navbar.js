import React from "react";
import styles from "./navbar.module.css";
import logoBlue from "../../assets/logoBlue.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div class="w-screen h-28 flex flex-row justify-center items-center bg-[#d2d2d27a] fixed top-0 left-0 z-[100] backdrop-blur-[5px]">
      <Link class="hidden md:block lg:block absolute left-[1em] object-cover" to="/">
        <img
          src={logoBlue}
          alt="logo van van dijk laren"
        />
      </Link>
      <div className="flex flex-row justify-between items-center gap-[1em] w-fit">
        <Link className="text-primary-text-color font-bold" to="/honden">
          Honden
        </Link>
        <Link className="text-primary-text-color font-bold" to="/katten">
          Katten
        </Link>
        <Link className="text-primary-text-color font-bold" to="/meer">
          en meer
        </Link>
        <div className={styles.devider} />
        <Link className="text-primary-text-color font-bold" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
}
