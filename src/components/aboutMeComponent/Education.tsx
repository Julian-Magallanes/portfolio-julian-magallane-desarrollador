import education from "@/utils/education.json"
import { faCalendar } from "@fortawesome/free-regular-svg-icons"
import { faArrowPointer, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Button from "../Button"
const Education = () => {
    return(
        <div className="text-primary my-40">
            <h1 className="text-4xl font-bold text-center">Educación</h1>
            <div className="flex">
            <div className="bg-primary w-1 h-[600px] mx-6 mt-6"/>
            <div className="flex flex-col gap-2 mt-4">
            {  education.map((edu, index) => (
                <div key={index} className="flex flex-col gap-2 mt-4 w-[600px]">
                <h2 className="text-2xl font-medium">{edu.lacation}</h2>
                <p className="text-xl">{edu.title}</p>
                <div className="flex gap-2">
                    <FontAwesomeIcon icon={faLocationDot} />
                    <p>{edu.lacation}</p>
                    <FontAwesomeIcon icon={faCalendar} />
                    <p>{edu.date}</p>
                </div>
                <p>{edu.description}</p>
                <div className="flex gap-2 items-center rounded-2xl border-2 border-primary py-1 px-4 w-min">
                <FontAwesomeIcon icon={faArrowPointer} style={{width:"18px"}}/>
                <a href={edu.urlDrive} rel="noopener" target="_blank" className="text-nowrap">Ver Certificado</a>
                </div>
            </div>
            ))

            }
            </div>
            </div>
        </div>
    )
}

export default Education