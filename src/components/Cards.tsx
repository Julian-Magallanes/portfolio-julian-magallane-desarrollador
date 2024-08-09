"use client";

import { faFire, faRocket, faScrewdriverWrench, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface CardProps {
  description: string;
  img: string;
  title: string;
  size?: "sm" | "md" | "lg";
  color?: string;
  onClick?: string;
  customHover?: string;
  skills: string[]
  after?: boolean
  favorite?: boolean
  noContent?: boolean
}

const Card: React.FC<CardProps> = ({
  img,
  title,
  description,
  onClick = "#",
  skills,
  after,
  favorite,
  noContent
}) => {
  let router = useRouter();
  
  return (
    <section
      onClick={() => {
        router.push(onClick);
      }}
      className={`card rounded-xl w-[380px] h-[200px] lg:w-[500px] lg:h-[300px] relative flex justify-center items-center shadow-2xl hover:shadow-2xl hover:scale-105 cursor-pointer ease-in bg-slate-500`}
    >
        {after && noContent === false && <p className="font-bold text-lg absolute bottom-2 left-2 text-red-600 px-2"> <FontAwesomeIcon icon={faScrewdriverWrench} style={{width: "18px", height: "18px", color: "#dc2626"}} className="mr-2"/>En Construcción</p>}
        {favorite && <p className="font-bold text-lg absolute bottom-2 left-2 text-tertiary px-2 "><FontAwesomeIcon icon={faStar} style={{width: "18px", height: "18px", color: "#00cbcc"}} className="mr-2"/>Destacado</p>}
        <Image src={img} alt={title} width={1000} height={1000} className="object-cover w-full h-full"/>
      <div className="card__content bg-slate-500">
        <p className="card__title text-2xl font-bold m-0 pl-1">{title}</p>
        <p className="card__description text-sm mt-3 font-regular">
            {description}
        </p>
        <p className="text-lg font-medium my-4 max-sm:hidden">Tecnologias usadas:</p>
        <ul className="flex flex-wrap gap-2 max-sm:hidden">
            
            {skills.map((skill) => (
                <li className="text-xs">{` ${skill} `}</li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default Card;
/*section.card {
    background-color: #474dc3;
    perspective: 1000px;
  }
  .card img {
    fill: #333;
  }
  .card:hover {
    background-color: #474dc3;
    color: #ffffff;
  }
  
  .card__content {
    box-sizing: border-box;
    background-color: #474dc3;
  }
  
  .card:hover .card__content {
    transform: rotateX(0deg);
  }
  
  .card__title {
    color: var(--white);
  }
  
  .card:hover svg {
    scale: 0;
  }
  
  .card__description {
    color: #ffffff;
  }
 */
  