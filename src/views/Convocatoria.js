import React from 'react'
import ImagenBanner from "../img/Logo-banner-hero.png"
function Convocatoria() {
  return (
    <section className="convocatoria bg-white">
      <div className="contenedor-convocatoria p-4 ">
        <img className='mx-auto' src={ImagenBanner} alt="" />
        <h1 className='mt-5'>Convocatoria</h1>

        <p>Con el objetivo de SEER la asociación referente en NorLatam en investigación, diagnóstico, tratamiento y concientización de las enfermedades raras, generando conocimiento en la comunidad médica y la sociedad, provocando un impacto positivo en la atención y calidad de vida de los pacientes. La Sociedad de Especialistas de Enfermedades Raras (SEER) convoca a todos los médicos que radiquen en la República Mexicana que cuenten con cédula profesional a enviar un caso de difícil diagnóstico, con la intención de brindarles SIN COSTO el Estudio Molecular.  </p>
        <p>La Convocatoria está limitada a TRES EXOMAS, por lo que los casos deberán cumplir con ciertas características, el día limité para recepción de casos será el 25 de febrero 24:00 hrs CdMx. El resultado se anunciará el 25 de marzo del 2022 por las redes oficiales de SEER.  </p>
        <br />

        <h1>Requisitos:</h1>
        <p>El Médico Aspirante a UN exoma deberá tener 80% de conectividad al 1er Congreso Internacional de Especialistas en Enfermedades Raras, información que será proporcionada a SEER por los ingenieros electrónicos de GoPharma. </p>
        <p>El Caso Clínico debe SEER sometido por un Médico con cédula profesional que radique en la República Mexicana. </p>
        <p>El Caso Clínico debe haber sido estudiado clínicamente, con estudios de laboratorio y gabinete; que aún no cuente con diagnóstico de certeza. Se deberá enviar resumen detallado siguiendo la NOM-004-SSA3-2012, Del expediente clínico.  </p>
        <p>El paciente deberá ser de limitados recursos económicos para poder sufragar el gasto del monto de la prueba. Por lo que, el paciente será sometido a un estudio socioeconómico evaluado por profesionistas miembros de SEER. </p>
        <p>Los casos recibidos serán valorados por 2 de las Comisiones dentro de SEER: Comisión de Financiamiento a Estudios de Laboratorio y Gabinete (para Pacientes) y Comisión de Financiamiento a Proyectos de Investigación. Así como por alguno de los Médicos Genetistas, Miembros de SEER (Habrá casos en los que el exoma no sea el estudio adecuado, por lo que esta valoración es muy importante) </p>
        <p>Ningún Miembro del Comité Científico, ni Colaboradores SEER; puede participar en la presente convocatoria.  </p>
        <p>Solo se recibirá un caso por Médico.</p>
        <p>Los Aspirantes deben cumplir al 100% los requisitos de la presente convocatoria. </p>
        <p>El caso deberá ser enviado al correo electrónico: comunicacion@seerlatam.org </p>
        <p>
          A los ganadores les llegará un correo informándoles el dictamen.
        </p>
        <p>Un Miembro de SEER será el contacto con cada uno de los ganadores. </p>
        <p>Cualquier otra situación que se presente, será evaluada y resuelta por los Comités de Evaluación.Se garantiza la Confidencialidad, el Respeto y el Reconocimiento al Médico Ganador. </p>
      </div>

    </section>
  )
}

export default Convocatoria