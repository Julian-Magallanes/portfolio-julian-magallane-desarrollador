"use client";

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
}

const Card: React.FC<CardProps> = ({
  img,
  title,
  description,
  onClick = "#",
}) => {
  let router = useRouter();
  
  return (
    <section
      onClick={() => {
        router.push(onClick);
      }}
      className={`card rounded-xl w-[350px] h-[200px] lg:w-[500px] lg:h-[300px] relative flex justify-center items-center hover:shadow-2xl hover:scale-105 cursor-pointer ease-in bg-slate-500`}
    >
        <Image src={img} alt={title} width={1000} height={1000} />
      <div className="card__content bg-slate-500">
        <p className="card__title text-2xl font-bold m-0 pl-1">{title}</p>
        <p className="card__description text-sm mt-3">
            {description}
        </p>
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
  