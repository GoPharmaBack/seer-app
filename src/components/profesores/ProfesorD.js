import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const ImgProfesor =
  "https://firebasestorage.googleapis.com/v0/b/seer-7d680.appspot.com/o/colaboradores-seer%2F4_GriseldaRodriguez.png?alt=media&token=0e2a319d-b08b-4f06-8534-603ad2efc6c7";
function ProfesorA() {
  const [modalShow, setModalShow] = useState(false);
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        className="text-light"
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <div className="contenedor-modal d-flex">
            <Button className="boton-cerrar" onClick={props.onHide}>
              x
            </Button>
            <img
              src={ImgProfesor}
              className="imagen-modal"
              alt="imagen-comite a"
            />
            <div className="texto">
              <p className="nombre">Griselda Rodriguez</p>
              <p className="titulo-ponente">Licenciada en Trabajo Social</p>
              <p className="trayectoria">
                Lic. en Trabajo Social, egresada de la UNAM. Diplomada en Intervención Social con Familias, Atención Temprana por la Asociación Pro Parálisis Cerebral APAC, Atención integral de las personas con discapacidad y de la tercera edad, Atención al cuidador y en Cuidadores Primarios. Miembro fundador y Delegada en la Ciudad de México de la Organización Mexicana de Enfermedades Raras (OMER). Colaboradora con la Asociación Nacional de Síndrome de Williams, A.C. Colaboradora de la Federación Mexicana de Enfermedades Raras (FEMEXER) y de la Asociación Mexicana de Enfermedades Raras (AMAER).
              </p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
  return (
    <React.Fragment>
      {" "}


      <div className="col-lg-3 col-md-6 col-sm-6 ponente-card" onClick={() => setModalShow(true)}>
        <div className="single-team m-2 ">
          <div className="team-img">
            <img src={ImgProfesor} alt="comite" />
          </div>
          <div className="info_box ">
            <h4 className="name mt-3">Griselda Rodriguez</h4>
            <p className="position">Licenciada en Trabajo Social
            </p>
          </div>
        </div>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </React.Fragment>
  );
}

export default ProfesorA;
