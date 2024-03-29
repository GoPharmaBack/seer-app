import React from "react";
const myArray = [
  {
    name: "AMaeh",
    id: 0,
    img: "https://firebasestorage.googleapis.com/v0/b/seer-7d680.appspot.com/o/aliados%2Famaeh.png?alt=media&token=0f49f665-d789-46e5-952b-82cf37ca5a93"
  },
  {
    name: "AMFQ",
    id: 0,
    img: "https://firebasestorage.googleapis.com/v0/b/seer-7d680.appspot.com/o/aliados%2FAsociacio%CC%81n%20Mexicana%20de%20Fibrosis%20Quistica.png?alt=media&token=9f22aa2b-3955-45e4-8706-f1716cfb866c"
  },
  {
    name: "AMFQ",
    id: 0,
    img: "https://firebasestorage.googleapis.com/v0/b/seer-7d680.appspot.com/o/logo%402x_test.png?alt=media&token=d53e0c85-ecf1-452c-a2f0-239826a65172"
  }, {
    name: "AMFQ",
    id: 0,
    img: "https://firebasestorage.googleapis.com/v0/b/seer-7d680.appspot.com/o/aliados%2FRecurso%201.png?alt=media&token=34cb4b1d-14ae-4cd0-aac1-3e57195c89e5"
  },
  {
    name: "disautonomia",
    id: 0,
    img: "https://firebasestorage.googleapis.com/v0/b/seer-7d680.appspot.com/o/aliados%2Fdisautonomia.jpg?alt=media&token=b2d6afd0-7e39-4856-bb63-fb2bb525b16a"
  },

  {
    name: "Fermex",
    id: 1,
    img: "https://firebasestorage.googleapis.com/v0/b/seer-7d680.appspot.com/o/aliados%2Ffemexer_logo_1000x670.png?alt=media&token=a1c660b3-86ca-4987-a091-0dc2f9813e3e"
  },
  {
    name: "Fumeni",
    id: 2,
    img: "https://firebasestorage.googleapis.com/v0/b/seer-7d680.appspot.com/o/aliados%2FFUMENI.jpeg?alt=media&token=dc88f447-24c7-4583-a504-cb83e129de7f"
  },
  {
    name: "Grupo Fabry",
    id: 3,
    img: "https://firebasestorage.googleapis.com/v0/b/seer-7d680.appspot.com/o/aliados%2FGrupo%20Fabry.png?alt=media&token=0e6879bf-bbc1-4a54-8811-2d260de411f1"
  },
  {
    name: "Huntington",
    id: 4,
    img: "https://firebasestorage.googleapis.com/v0/b/seer-7d680.appspot.com/o/aliados%2FlogoCompletoHungtinton.png?alt=media&token=fc5ed0d9-2281-4a99-b75a-ee59ec316cec"
  },
  {
    name: "omer",
    id: 5,
    img: "https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/partners%2FOmer.png?alt=media&token=ccbed7f3-b183-4d90-b209-74d3a08d12c3"
  },
  {
    name: "ppudm",
    id: 6,
    img: "https://firebasestorage.googleapis.com/v0/b/seer-7d680.appspot.com/o/aliados%2FPPuDM.png?alt=media&token=f6f9462c-9334-4e74-8193-83ace51080ef"
  },
  {
    name: "UCEM",
    id: "7",
    img: "https://firebasestorage.googleapis.com/v0/b/seer-7d680.appspot.com/o/aliados%2Fucem-q.png?alt=media&token=74b159f6-6902-45b9-b43a-04190ef1ed92"
  }
];
function Aliados() {
  return (
    <>

      <div className=" bg-white container-fluid pt-4 pt-5 pb-4" data-aos="fade-up">

        <h3 className="text-center titulo">Aliados</h3>

        <div className="aliados">
          <div className="aliados-Contenedor">
            {myArray.map((item, index) => (
              <div key={index} className="aliados-img">
                <img
                  src={item.img}
                  className="patrocinadoresImg"
                  alt="seer 2022"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Aliados;