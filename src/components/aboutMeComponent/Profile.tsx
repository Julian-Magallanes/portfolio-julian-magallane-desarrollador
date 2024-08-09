"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import {
  faChevronDown,
  faMinus,
  faPlus,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import ButtonRedirect from "../ButtonRedirect";

const Profile = () => {
  const [deploy, setDeploy] = useState(false);

  const handleDeploy = () => {
    if (deploy === false) {
      setDeploy(true);
    } else setDeploy(false);
  };
  const handleDismantle = () => {
    setDeploy(false);
  };
  const scrollDownInterests = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
  return (
    <div className="flex flex-col items-center my-40 max-sm:my-20">
      <div className="flex items-start justify-center max-sm:flex-col max-sm:items-center">
        <Image
          src="https://res.cloudinary.com/dzxrc9b6o/image/upload/v1714054099/Portfolio/Tecnologias/profile_2_pvpomz.jpg"
          alt="imageProfile"
          width={300}
          height={300}
          className="rounded-full shadow-xl"
        />
        <div className="w-2/5 ml-6 flex flex-col items-center">
          <div className="flex flex-col justify-center items-center">
            <span className="text-6xl font-bold text-center max-sm:text-5xl">
              Hola soy Julian Magallanes.
            </span>
            <div className="bg-primary h-1 w-40 my-6" />
            <p className="text-2xl font-medium text-center max-sm:text-xl">
              Soy Full Stack Developer, especializado en el Frontend de las
              aplicaciones web. Me gusta el trabajo en equipo, creo que los
              proyectos en conjunto llegan a mejores resultados.
            </p>
          </div>
          <div className={`flex flex-wrap gap-2 w-full h-32 mt-6 justify-center max-sm:w-80 max-sm:${deploy ? "h-52" : "h-32"}`}>
            {deploy === false ? (
              <div onClick={handleDeploy}>
                <Button
                  color="bg-primary"
                  iconLeft={<FontAwesomeIcon icon={faPlus} />}
                />
              </div>
            ) : (
              <div onClick={handleDismantle}>
                <Button
                  iconLeft={<FontAwesomeIcon icon={faMinus} />}
                  color="bg-primary"
                />
              </div>
            )}
            <Button
              title="Proyectos"
              onClick="./trabajos"
              color="bg-primary"
              iconLeft={<FontAwesomeIcon icon={faRocket} />}
            />
            <ButtonRedirect
              title="GitHub"
              onClick="https://github.com/Julian-Magallanes"
              color="bg-primary"
              iconLeft={<FontAwesomeIcon icon={faGithub} />}
            />
            {(deploy === true) && (
              <>
                <ButtonRedirect
                  title="Linkedln"
                  onClick="https://www.linkedin.com/in/juli%C3%A1n-magallanes-2b074a187/"
                  color="bg-primary"
                  iconLeft={<FontAwesomeIcon icon={faLinkedin} />}
                />
                <ButtonRedirect
                  title="Curriculum"
                  onClick="https://drive.google.com/file/d/1qqwlBmmD4hBEeEg3CHmNxdhDRE3s1DHF/view?usp=drive_link"
                  color="bg-primary"
                  iconLeft={<FontAwesomeIcon icon={faFile} />}
                />
                <ButtonRedirect
                  title="Whatsapp"
                  onClick="https://wa.me/542613012708"
                  color="bg-primary"
                  iconLeft={<FontAwesomeIcon icon={faWhatsapp} />}
                />
              </>
            )}
          </div>
        </div>
      </div>
      <div
        className="mt-10 w-16 h-16 animate-bounce cursor-pointer"
        onClick={scrollDownInterests}
      >
        <FontAwesomeIcon
          icon={faChevronDown}
          style={{ color: "black", width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
};
export default Profile;
