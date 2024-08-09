"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const ButtonArrow = () => {
    const scrollDownInterests = () => {
        window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
    };
  return (
    <div className="mt-20 h-16 animate-bounce cursor-pointer rotate-90 flex flex-col justify-center w-full"
        onClick={scrollDownInterests}>
            <FontAwesomeIcon
          icon={faChevronUp}
          style={{ color: "black", width: "100%", height: "100%" }}
        />
        <h2 className="text-xl font-medium text-center text-nowrap">Volver al inicio</h2>
        </div>
  )
}

export default ButtonArrow