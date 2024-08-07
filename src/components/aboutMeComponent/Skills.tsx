import {
  faCss3Alt,
  faDocker,
  faGit,
  faGithub,
  faGitlab,
  faHtml5,
  faJs,
  faNode,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import astroIcon from "@/assets/astro.svg";
import bootstrapIcon from "@/assets/bootstrap.svg";
import expressIcon from "@/assets/express.svg";
import nextIcon from "@/assets/next.svg";
import tailwindIcon from "@/assets/tailwind.svg";
import typescriptIcon from "@/assets/typescript.svg";
import vercelIcon from "@/assets/vercel.svg";
import postgresqlIcon from "@/assets/postgresql.svg";
import mongoIcon from "@/assets/mongo.svg";
import trelloIcon from "@/assets/trello.svg";
import figmaIcon from "@/assets/figma.svg";
import nestIcon from "@/assets/nest.svg";
import reduxIcon from "@/assets/redux.svg";
import expoIcon from "@/assets/expo.svg";
import visualIcon from "@/assets/visual.svg";
import antIcon from "@/assets/ant.svg";
import miroIcon from "@/assets/miro.svg";
import Image from "next/image";

const Skills = () => {
  return (
    <div className="text-primary">
      <h1 className="text-4xl font-bold text-center">Habilidades</h1>
      <div className="flex">
        <div>
      <div className="mt-4 flex flex-col gap-2">
        <h2 className="text-3xl font-medium text-end">Lenguajes</h2>
        <div className="flex flex-col gap-3">
            <div className="flex gap-2 items-center justify-end">
        <p>Javascript</p>
        <FontAwesomeIcon icon={faJs} style={{ width: "28px", height: "28px" }} />
            </div>
            <div className="flex gap-2 items-center justify-end">
        <p className="text-end">Typescript</p>
        <Image src={typescriptIcon} width={26} height={26} alt="Typescript" />
            </div>
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-2">
        <h2 className="text-3xl font-medium text-end">Frontend</h2>
        <div className="flex flex-col gap-3">
        <div className="flex gap-2 items-center justify-end">
        <p className="text-end">HTML</p>
            <FontAwesomeIcon icon={faHtml5} style={{ width: "28px", height: "28px" }}  />
            </div>
            <div className="flex gap-2 items-center justify-end">
            <p className="text-end">Css</p>
            <FontAwesomeIcon icon={faCss3Alt} style={{ width: "28px", height: "28px" }}  />
            </div>
            <div className="flex gap-2 items-center justify-end">
            <p className="text-end">Sass</p>
            <FontAwesomeIcon icon={faSass} style={{ width: "28px", height: "28px" }}  />
            </div>
            <div className="flex gap-2 items-center justify-end">   
            <p className="text-end">React</p>
            <FontAwesomeIcon icon={faReact} style={{ width: "28px", height: "28px" }}  />
            </div>
            <div className="flex gap-2 items-center justify-end">
            <p className="text-end">Redux</p>
            <Image src={reduxIcon} width={26} height={26} alt="redux" />
            </div>
            <div className="flex gap-2 items-center justify-end">
            <p className="text-end">Next</p>
            <Image src={nextIcon} width={26} height={26} alt="next" />
            </div>
            <div className="flex gap-2 items-center justify-end">
            <p className="text-end">Tailwind</p>
            <Image src={tailwindIcon} width={26} height={26} alt="tailwind" />
            </div>
            <div className="flex gap-2 items-center justify-end">
            <p className="text-nowrap text-end">Ant Design</p>
            <Image src={antIcon} width={26} height={26} alt="ant" />
            </div>
            <div className="flex gap-2 items-center justify-end">
            <p className="text-end">Bootstrap</p>
            <Image src={bootstrapIcon} width={26} height={26} alt="Bootstrap" />
            </div>
            <div className="flex gap-2 items-center justify-end">
            <p className="text-end">Astro</p>
            <Image src={astroIcon} width={26} height={26} alt="Astro" />
            </div>
            
        </div>
      </div>
            
      </div>
      <div className="bg-primary w-1 h-[800px] mx-6 mt-6"/>
      <div>
      <div className="mt-4 flex flex-col gap-2">
        <h2 className="text-3xl font-medium">Backend</h2>
        <div className="grid grid-cols-2 gap-3 w-14 items-center">
        <FontAwesomeIcon icon={faNode} style={{ width: "28px", height: "28px" }}  />
        <p>Node</p>
        <Image src={expressIcon} width={26} height={26} alt="Express" />
        <p>Express</p>
        <Image src={postgresqlIcon} width={26} height={26} alt="Postgresql" />
        <p className="text-nowrap">Postgre SQL</p>
        <Image src={mongoIcon} width={26} height={26} alt="Mongo" />
        <p>MongoDB</p>
        {/*<FontAwesomeIcon icon={faDocker} style={{ width: "26px" }} />
            <Image src={nestIcon} width={26} height={26} alt="Nest" />*/}
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-2">
        <h2 className="text-3xl font-medium">Mobile</h2>
        <div className="grid grid-cols-2 gap-3 w-40 items-center">
        <Image src={expoIcon} width={100} height={100} alt="Expo" />
        <p className="text-nowrap">Expo + React Native</p>
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-2">
        <h2 className="text-3xl font-medium">Control de version</h2>
        <div className="grid grid-cols-2 gap-3 w-14">
        <FontAwesomeIcon icon={faGit} style={{ width: "28px", height: "28px" }}  />
        <p>Git</p>
        <FontAwesomeIcon icon={faGithub} style={{ width: "28px", height: "28px" }}  />
        <p>Github</p>
        <FontAwesomeIcon icon={faGitlab} style={{ width: "28px", height: "28px" }} />
        <p>Gitlab</p>
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-2">
        <h2 className="text-3xl font-medium">Herramientas</h2>
        <div className="grid grid-cols-2 gap-4 w-14 items-center">
        <Image src={trelloIcon} width={26} height={26} alt="Trello" />
        <p>Trello</p>
        <Image src={figmaIcon} width={26} height={26} alt="Figma" />
        <p>Figma</p>
        <Image src={miroIcon} width={26} height={26} alt="Miro" />
        <p>Miro</p> 
        <Image src={visualIcon} width={26} height={26} alt="Visual Studio" />
        <p className="text-nowrap">Visual Studio</p>
        <Image src={vercelIcon} width={26} height={26} alt="vercel" />
        <p>Vercel</p>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
};

export default Skills;
