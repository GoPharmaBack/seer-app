import React, { useEffect, useState } from "react";

import { NavLink, useLocation } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import Logo from "../img/logo.svg";
//import Logo from "../../img/logo.png";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useScrollSection } from "react-scroll-section";

function Navbar() {
  const location = useLocation();
  const [navBg, setNavBg] = useState("block");
  const [homePage, setHomePage] = useState("block")
  const [click, setClick] = useState(false);
  const homeSection = useScrollSection("comite");
  const colabSection = useScrollSection("colab");
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  useEffect(() => {
    navegador();


    if (window.location.pathname === "/") {
      setNavBg("block");
    } else {
      setNavBg('none')
    }

    if (window.location.pathname === "/") {

      setHomePage("block")
    } else {
      setHomePage("none")

    }
  }, [location]);
  const navegador = () => {
    var navScr = document.getElementById("navScr");
    window.onscroll = function () {
      if (
        document.body.scrollTop >= 30 ||
        document.documentElement.scrollTop >= 30
      ) {
        navScr.classList.add("nav-colored");
        navScr.classList.remove("nav-transparent");
      } else {
        navScr.classList.add("nav-transparent");
        navScr.classList.remove("nav-colored");
      }
    };
  };

  useEffect(() => {
    AOS.init({
      offset: 120,
      delay: 20,
      duration: 500,
      easing: "ease-in-out",
      debounceDelay: 50,
      throttleDelay: 99,
      mirror: false,
      anchorPlacement: "bottom-top",
    });
  }, []);

  return (
    <nav id="navScr" className="navbar " data-aos="fade-in">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active-nav" : "")}
        onClick={closeMobileMenu}
      >
        <img src={Logo} className="navbar_logo" alt="seer-latam" />
      </NavLink>
      <ul className={click ? "navbar_menu active " : "navbar_menu"}>
        {/* <NavLink
          to="/congreso-2022"
          className={({ isActive }) => (isActive ? "active-nav" : "")}
          onClick={closeMobileMenu}
        >
          <li className="btn-primario"> Congreso 2022 </li>
        </NavLink> */}
        <NavLink
          to="/"
          className="navbar_menu_link home-icon"
          onClick={closeMobileMenu}
        >
          <FaIcons.FaHome /> Inicio
        </NavLink>
        <NavLink
          style={{ display: homePage }}

          onClick={homeSection.onClick}
          selected={homeSection.selected}
          to="/"

          className={({ isActive }) => (isActive ? "active-nav" : "comite-nav")}
        >
          <li onClick={closeMobileMenu}>Comité científico </li>
        </NavLink>
        <NavLink

          style={{ display: navBg }}
          to="/"
          onClick={colabSection.onClick}
          selected={colabSection.selected}
          className={({ isActive }) =>
            isActive ? `active-nav ` : `ponente-nav `
          }
        >
          <li onClick={closeMobileMenu}> Colaboradores </li>
        </NavLink>

        <NavLink
          to="/registro"
          className={({ isActive }) => (isActive ? "active-nav" : "")}
          onClick={closeMobileMenu}
        >
          <li> Registro</li>
        </NavLink>
        {/* <NavLink
          to="/agenda"
          className={({ isActive }) => isActive ? 'active-nav' : ''}
          onClick={closeMobileMenu}
        >
          <li > Agenda </li>
        </NavLink> */}

        <NavLink
          to="/convocatoria"
          className={({ isActive }) => (isActive ? "active-nav" : "")}
          onClick={closeMobileMenu}
        >
          <li className="btn-secundario"> Convocatoria </li>
        </NavLink>
      </ul>
      <div className="navbar-icon" onClick={handleClick}>
        {click ? <FaIcons.FaTimes /> : <FaIcons.FaBars />}
      </div>
    </nav>
  );
}

export default Navbar;
