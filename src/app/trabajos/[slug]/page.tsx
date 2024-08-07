
import Image from "next/image";
import jobs from "@/utils/jobs.json";
import { faCss3Alt, faGit, faGithub, faGitlab, faHtml5, faJs, faNode, faReact, faSass } from "@fortawesome/free-brands-svg-icons";
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
export default function trabajo({ params }: { params: { slug: string } }) {

    const job = jobs.filter ((job) => job.slug === params.slug);
    console.log(job);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
        <div>
            <h1 className="text-3xl font-bold">{job[0].title}</h1>
            <ul>
            {job[0].skills.map ((skill, index) => (
                
                <li key={index} className="flex gap-2 items-center">
                    {skill === "Html" && <FontAwesomeIcon icon={faHtml5} style={{width:"26px"}}/> ||
                    skill === "Css" && <FontAwesomeIcon icon={faCss3Alt} style={{width:"26px"}}/> ||
                    skill === "Javascript" && <FontAwesomeIcon icon={faJs} style={{width:"26px"}}/> ||
                    skill === "React" && <FontAwesomeIcon icon={faReact} style={{width:"26px"}}/> ||
                    skill === "Node" && <FontAwesomeIcon icon={faNode} style={{width:"26px"}}/> ||
                    skill === "Next" && <Image src={nextIcon} width={26} height={26} alt="Bootstrap"/> ||
                    skill === "Tailwind" && <Image src={tailwindIcon} width={26} height={26} alt="Bootstrap"/> ||
                    skill === "Bootstrap" && <Image src={bootstrapIcon} width={26} height={26} alt="Bootstrap"/> ||
                    skill === "Sass" && <FontAwesomeIcon icon={faSass} style={{width:"26px"}}/> ||
                    skill === "github" && <FontAwesomeIcon icon={faGithub} style={{width:"26px"}}/> ||
                    skill === "git" && <FontAwesomeIcon icon={faGit} style={{width:"26px"}}/> ||
                    skill === "gitLab" && <FontAwesomeIcon icon={faGitlab} style={{width:"26px"}}/> ||
                    skill === "Astro" && <Image src={astroIcon} width={26} height={26} alt="Astro"/> ||
                    skill === "Vercel" && <Image src={vercelIcon} width={26} height={26} alt="Astro"/> ||
                    skill === "Express" && <Image src={expressIcon} width={26} height={26} alt="Express"/> ||
                    skill === "Typescript" && <Image src={typescriptIcon} width={26} height={26} alt="Typescript"/> ||
                    skill === "Postgresql" && <Image src={postgresqlIcon} width={26} height={26} alt="Postgresql"/> ||
                    skill === "Mongo" && <Image src={mongoIcon} width={26} height={26} alt="Mongo"/>
                    }
                    {skill}
                </li>
            ))}
            </ul>
        </div>
    </main>
  );
}