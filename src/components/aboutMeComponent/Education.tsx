import education from "@/utils/education.json"
import { faCalendar } from "@fortawesome/free-regular-svg-icons"
import { faArrowPointer, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Button from "../Button"
const Education = () => {
    return(
        <div className="text-primary my-40">
            
            <div className="flex h-auto">
            
            <div className="flex flex-col gap-2 mt-4">
            <h1 className="text-4xl font-bold text-end">Educación</h1>
            {  education.map((edu, index) => (
                <div key={index} className="flex flex-col gap-2 mt-4 w-[600px] max-sm:w-full items-end">
                <h2 className="text-2xl font-medium text-end text-gray-600">{edu.lacation}</h2>
                <p className="text-xl text-end ">{edu.title}</p>
                <div className="flex gap-2 items-center justify-end">
                    <div  className="w-1/2 flex gap-2 items-center justify-center ">
                    <FontAwesomeIcon icon={faLocationDot} style={{color: "#00cbcc"}}/>
                    <p className="text-nowrap text-tertiary">{edu.lacation}</p>
                    </div>
                    <div className="w-1/2 flex gap-2 items-center justify-center">
                    <FontAwesomeIcon icon={faCalendar} style={{color: "#00cbcc"}}/>
                    <p className="text-nowrap text-tertiary"> {edu.date}</p>
                    </div>
                </div>
                <p className="text-end">{edu.description}</p>
                <div className="flex gap-2 items-center rounded-2xl border-2 border-tertiary py-1 px-4 w-min">
                <FontAwesomeIcon icon={faArrowPointer} style={{width:"18px", color: "#00cbcc"}}/>
                <a href={edu.urlDrive} rel="noopener" target="_blank" className="text-nowrap text-tertiary font-medium">Ver Certificado</a>
                </div>
            </div>
            ))

            }
            </div>
            <div className="bg-gradient-to-b from-transparent to-tertiary px-[3px]  h-auto mx-6 mt-6"/>
            </div>
        </div>
    )
}

export default Education