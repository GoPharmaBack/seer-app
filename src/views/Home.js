
import React, { useEffect } from 'react';
import { Link } from "react-router-dom"
import logo from "../img/logo-prin.png";
import logo2 from "../img/LOGO_SEER_WHITE_2.png";


import Logo from '../img/logo.svg';
import LogoA from '../img/Logotipo-SEER_AZUL_GO_PHARMA.png';
import HeroSlider1 from "../img/fondo-hero-slider.png";
import HeroSlider1R from "../img/fondo-hero-slider-r.png";
import HeroSliderAzul from "../img/azul.png"
import HeroSliderAzulR from "../img/azul-r.png"
import BannerConvo from "../img/CARRUSEL_CONVOCATORIA.png"
import BannerConvoR from "../img/CARRUSEL_CONOCATORIA_MOVIL.png"
import ListaComite from "../components/ListaComite";
import ListaPonente from "../components/ListaPonentes";
import Patrocinadores from "../components/Patrocinadores"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
//import { ExternalLink } from "react-external-link";
import {
  //FaInstagram,
  FaChevronDown,
} from "react-icons/fa";
import {
  useScrollSection
} from 'react-scroll-section';
//import CountDown from "../components/CountDown";

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

//import Agenda from '../components/Agenda'
import Carousel from 'react-bootstrap/Carousel'
import Aliados from '../components/Alidos';
function Home() {


  const homeSection = useScrollSection('comite');
  useEffect(() => {

    AOS.init({
      offset: 120,
      delay: 20,
      duration: 500,
      easing: 'ease-in-out',
      debounceDelay: 50,
      throttleDelay: 99,
      mirror: false,
      anchorPlacement: 'bottom-top',
    });
  }, [])

  return (
    <>
      <section className="Home" data-aos="fade-in">
        <div className="row" data-aos="fade-in">
          <Carousel className="Carousel-hero container-fluid bg-seer"  >


            <Carousel.Item interval={5500}    >
              <img
                className="d-block w-100 slider"
                src={BannerConvo}
                alt="First slide"
              />
              <img
                className="d-block  h-75 w-100 slider-r"
                src={BannerConvoR}
                alt="First slide responsive"
              />
              <Carousel.Caption>
                <img src={LogoA} className="App-logo" alt="logo" />
                <br />
                <br />
                <p className="titulo-c"> <strong>Resultados</strong> de la  <br /><strong>convocatoria</strong></p>
                <br />
                <Link className="btn-primario" to="/convocatoria" >¡Conoce más!</Link>

              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={4500}    >
              <img
                className="d-block w-100 slider"
                src={HeroSlider1}
                alt="First slide"
              />
              <img
                className="d-block  h-75 w-100 slider-r"
                src={HeroSlider1R}
                alt="First slide responsive"
              />
              <Carousel.Caption>
                <img src={logo} className="App-logo" alt="logo" />
                <br />
                <img src={logo2} className="App-logo2" alt="logo" />
                <p className="titulo">¡Muchas gracias por formar parte de esta gran experiencia!</p>
                <br />


              </Carousel.Caption>
            </Carousel.Item>



            <Carousel.Item interval={4500}    >
              <img
                className="d-block w-100 slider"
                src={HeroSliderAzul}
                alt="First slide"
              />
              <img
                className="d-block  h-75 w-100 slider-r"
                src={HeroSliderAzulR}
                alt="First slide responsive"
              />

              <Carousel.Caption>
                <img src={logo2} className="App-logo2" alt="logo" />
                <br />
                <br />
                <Link className="btn-secundario" to="/" onClick={homeSection.onClick} >¡Conoce a nuestro comité!</Link>
              </Carousel.Caption>
            </Carousel.Item>


          </Carousel>
        </div>

      </section>

      <div className="row mt-5" data-aos="fade-up" >
        <div className="container-fluid mt-5 mb-5 text-center">
          <p className="mt-3 h4">Conoce más de este gran proyecto</p>
          <FaChevronDown className="bounce" onClick={homeSection.onClick} selected={homeSection.selected} />
        </div>

        <div className="row mt-5 mb-5  justify-content-center" data-aos="fade-up">
          <div className="col-12 d-flex justify-content-center">
            <img src={logo} className=" img-responsive" alt="SEER 2022" />
          </div>

        </div>



      </div>

      <section id="info" data-aos="fade-up">
        <div className="contenedor" data-aos="fade-up">
          <VerticalTimeline data-aos="fade-up"  >

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#103561', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  #103561' }}


              icon={<img src={Logo} alt="" />}
            >
              <h3 className="titulo">¿QUIÉNES SOMOS?</h3>

              <p>
                SEER es una asociación civil constituída por profesionales de la salud y
                disciplinas que coadyuven con el objeto de promover la educación e
                investigación sobre las Enfermedades Raras; Con el propósito de
                mejorar el conocimiento, abordaje y manejo de las mismas para
                favorecer la calidad de vida de los pacientes.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#fff', color: '#103561' }}
              contentArrowStyle={{ borderRight: '7px solid  #fff' }}


              icon={<img src={Logo} alt="" />}
            >
              <h3 className="titulo">MISIÓN</h3>

              <p>
                Sensibilizar y educar a la comunidad médica sobre las enfermedades raras, con base en nuestros cuatro pilares: <strong>Concientización,
                  Prevención, Diagnóstico y Manejo.</strong> Así contribuyendo a la difusión y
                correcto encause de las enfermedades raras, colaborando con los
                diferentes actores del ecosistema de salud y la sociedad civil.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#103561', color: '#fff' }}
              iconStyle={{ background: '#103561', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  #103561' }}
              icon={<img src={Logo} alt="" />}
            >
              <h3 className="titulo">VISIÓN </h3>

              <p>
                SEER, la asociación referente en Norlatam en <strong>investigación,
                  diagnóstico, tratamiento y concientización</strong> de las enfermedades
                raras, generando conocimiento en la comunidad médica y la
                sociedad, provocando un impacto positivo en la atención y calidad
                de vida de los pacientes.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"

              iconStyle={{ background: '#103561', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  #103561' }}
              icon={<img src={Logo} alt="" />}
            >

            </VerticalTimelineElement>

          </VerticalTimeline>
        </div>
      </section>
      <section className="comite-contenedor" >
        <div className="contenedor">


          <ListaComite />

          {/* <Agenda /> */}

          <ListaPonente />
          <Patrocinadores />
          <Aliados />

        </div>
      </section>
      <section className="contacto-section" data-aos="fade-up">
        <br />
        <h3>
          Cualquier duda, comentario o interés <br /> por favor comunicarse al correo:
        </h3>

        <a className="titulo" href="mailto:comunicacion@seerlatam.org">
          comunicacion@seerlatam.org
        </a>
      </section>

    </>
  );
}

export default Home;
