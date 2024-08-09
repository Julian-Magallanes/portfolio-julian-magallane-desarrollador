"use client";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const KnowMore = () => {
    const scrollDownInterests = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
      };
    return(
        <div className="w-1/2 mt-40 max-lg:w-full">
            <p className="text-xl font-medium text-center m-10 max-sm:mx-2">¡Hola! Soy desarrollador y vivo en <strong>Mendoza, Argentina, tierra del Aconcagua.</strong> Mi viaje comenzó en el mundo de la arquitectura, donde desarrollé una sólida base de habilidades creativas y analíticas. Sin embargo, actulmente me desempeño en una pasion como es la programación.</p>
            <p className="text-xl font-medium text-center m-10 max-sm:mx-2">A lo largo de mi carrera como arquitecto, he dedicado tiempo y esfuerzo a estudiar y practicar programación de forma autodidacta.<strong> En el 2023 decidí que esto dejaría de ser un hobby y comenzaría a ser mi vida.</strong></p>
            <p className="text-xl font-medium text-center m-10 max-sm:mx-2">Además de mi dedicación a la programación, soy un ávido viajero. Explorar nuevos lugares y culturas, amplía mi perspectiva y alimenta mi creatividad. <strong>Sueño con poder combinar mi pasión por la programación con mi amor por los viajes</strong>, trabajando de forma remota mientras descubro nuevos destinos y experiencias en todo el mundo.</p>
            <p className="text-xl font-medium text-center m-10 max-sm:mx-2">Estoy emocionado por seguir <strong>mi viaje en el mundo de la programación</strong>, buscando oportunidades para contribuir a proyectos significativos y colaborar con personas talentosas de todo el mundo. Siempre estoy abierto a nuevas conexiones y desafíos que me permitan seguir creciendo como profesional y como persona.</p>
            <div className="mt-20 h-16 animate-bounce cursor-pointer rotate-90 flex flex-col justify-center w-full"
        onClick={scrollDownInterests}>
            <FontAwesomeIcon
          icon={faChevronUp}
          style={{ color: "black", width: "100%", height: "100%" }}
        />
        <h2 className="text-xl font-medium text-center text-nowrap">Volver al inicio</h2>
        </div>
        </div>
    )
}
export default KnowMore