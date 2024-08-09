
import Image from "next/image";
import jobs from "@/utils/jobs.json";
import { faCss3Alt, faDocker, faGit, faGithub, faGitlab, faHtml5, faJs, faNode, faReact, faSass } from "@fortawesome/free-brands-svg-icons";
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
import expoIcon from "@/assets/expo.svg";
import reduxIcon from "@/assets/redux.svg";
import Button from "@/components/Button";
import miroIcon from "@/assets/miro.svg";
import { faArrowPointer } from "@fortawesome/free-solid-svg-icons";
import ButtonArrow from "@/components/ButtonArrow";
import ButtonRedirect from "@/components/ButtonRedirect";
export default function trabajo({ params }: { params: { slug: string } }) {

    const job = jobs.filter ((job) => job.slug === params.slug);
    console.log(job);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
        <div className="w-full flex flex-col items-center justify-center gap-10">
            <h1 className="text-3xl font-bold">{job[0].title}</h1>
            <Image src={job[0].urlImage} width={1000} height={1000} alt={job[0].title} className="rounded-3xl my-4 shadow-2xl"/>
            <p className="text-xl font-regular w-1/2 text-center max-sm:w-full">{job[0].description}</p>
            <div className="flex gap-5">
            {job[0].urlPage && <ButtonRedirect title="Ver sitio web" color="bg-primary" onClick={job[0].urlPage} iconLeft={<FontAwesomeIcon icon={faArrowPointer} style={{width:"20px", height:"20px"}}/>}/>}
            {job[0].urlGitHub && <ButtonRedirect title="Ver repositorio" color="bg-primary" onClick={job[0].urlGitHub} iconLeft={<FontAwesomeIcon icon={faGithub} style={{width:"20px", height:"20px"}}/>}/>}
            </div>
            
            {job[0].urlUIKit && 
            <>
            <h1 className="text-2xl font-medium">UI Kit - diseño de prototipo de componenetes.</h1>
            <div className="flex gap-5 px-10 max-sm:flex-col">
            {job[0].urlUIKit.map ((url, index) => 
                <Image key={index} src={url} width={1000} height={1000} alt={job[0].title} className="w-1/3 max-sm:w-full"/>
            )}</div></>}
            
            {job[0].urlMiro && <Image src={job[0].urlMiro} width={1000} height={1000} alt={job[0].title}/>}
            
            {job[0].urlPrototype && 
            <>
            <h2 className="text-2xl font-medium">Diseño de prototipo</h2>
            <Image src={job[0].urlPrototype} width={1000} height={1000} alt={job[0].title} className="w-2/3 max-sm:w-full"/>
            </>
            }
            <h2 className="text-2xl font-semibold">Tecnologias utilizadas</h2>
            <ul className="flex flex-col gap-3 mt-3 border border-primary px-20 py-10 rounded-3xl">
            {job[0].skills &&
            <>
                <h1 className="text-xl font-medium">Herramientas Utilizadas</h1>
            {job[0].skills?.map ((skill, index) => (
                
                <li key={index} className="flex gap-2 items-center">
                    {
                    skill === "github" && <FontAwesomeIcon icon={faGithub} style={{width:"28px", height:"28px"}}/> ||
                    skill === "git" && <FontAwesomeIcon icon={faGit} style={{width:"28px", height:"28px"}}/> ||
                    skill === "gitLab" && <FontAwesomeIcon icon={faGitlab} style={{width:"28px", height:"28px"}}/> ||
                    skill === "Vercel" && <Image src={vercelIcon} width={26} height={26} alt="vercel"/> ||
                    skill === "Trello" && <Image src={trelloIcon} width={26} height={26} alt="Trello"/> ||
                    skill === "Figma" && <Image src={figmaIcon} width={26} height={26} alt="Figma"/> ||
                    skill === "Miro" && <Image src={miroIcon} width={26} height={26} alt="Miro" /> 
                    }
                    {skill}
                </li>
            ))}</>}
            {job[0].skillsFront && 
            <>
            <h1 className="text-xl font-medium">Tecnologias utilizadas en el Frontend</h1>
            {job[0].skillsFront.map ((skill, index) => (
                
                <li key={index} className="flex gap-2 items-center">
                    {skill === "Html" && <FontAwesomeIcon icon={faHtml5} style={{width:"28px", height:"28px"}}/> ||
                    skill === "Css" && <FontAwesomeIcon icon={faCss3Alt} style={{width:"28px", height:"28px"}}/> ||
                    skill === "Javascript" && <FontAwesomeIcon icon={faJs} style={{width:"28px", height:"28px"}}/> ||
                    skill === "React" && <FontAwesomeIcon icon={faReact} style={{width:"28px", height:"28px"}}/> ||
                    skill === "Next" && <Image src={nextIcon} width={26} height={26} alt="next"/> ||
                    skill === "Tailwind" && <Image src={tailwindIcon} width={26} height={26} alt="tailwind"/> ||
                    skill === "Bootstrap" && <Image src={bootstrapIcon} width={26} height={26} alt="Bootstrap"/> ||
                    skill === "Sass" && <FontAwesomeIcon icon={faSass} style={{width:"28px", height:"28px"}}/> ||
                    skill === "Astro" && <Image src={astroIcon} width={26} height={26} alt="Astro"/> ||
                    skill === "Typescript" && <Image src={typescriptIcon} width={26} height={26} alt="Typescript"/> ||
                    skill === "Expo + React Native" && <Image src={expoIcon} width={26} height={26} alt="Expo"/> ||
                    skill === "Redux" && <Image src={reduxIcon} width={26} height={26} alt="Redux"/>
                    }
                    {skill}
                </li>
                
            ))}</>}
            {job[0].skillsBack &&
            <>
            <h1 className="text-xl font-medium">Tecnologias utilizadas en el Backend</h1>
            {job[0].skillsBack?.map ((skill, index) => (
                
                <li key={index} className="flex gap-2 items-center">
                    {
                    skill === "Javascript" && <FontAwesomeIcon icon={faJs} style={{width:"28px", height:"28px"}}/> ||
                    skill === "Node" && <FontAwesomeIcon icon={faNode} style={{width:"28px", height:"28px"}}/> ||
                    skill === "Docker" && <FontAwesomeIcon icon={faDocker} style={{width:"28px", height:"28px"}}/> ||
                    skill === "Express" && <Image src={expressIcon} width={26} height={26} alt="Express"/> ||
                    skill === "Typescript" && <Image src={typescriptIcon} width={26} height={26} alt="Typescript"/> ||
                    skill === "PostgreSQL" && <Image src={postgresqlIcon} width={26} height={26} alt="Postgresql"/> ||
                    skill === "MongoDB" && <Image src={mongoIcon} width={26} height={26} alt="Mongo" className="h-8"/> ||
                    skill === "Nest" && <Image src={nestIcon} width={26} height={26} alt="Nest"/> 
                    }
                    {skill}
                </li>
            ))}</>}
            </ul>
        </div>
        <ButtonArrow/>
    </main>
  );
}