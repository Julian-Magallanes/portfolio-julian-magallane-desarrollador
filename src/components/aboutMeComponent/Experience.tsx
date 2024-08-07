import { faCalendar } from "@fortawesome/free-regular-svg-icons"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import experience from "@/utils/experience.json"

const Experience = () => {
    return(
        <div className="text-primary my-40">
            <h1 className="text-4xl font-bold text-center">Experiencia</h1>
            <div className="flex">
            <div className="bg-primary w-1 h-[1000px] mx-6 mt-6"/>
            <div className="flex flex-col gap-2 mt-4">
            {experience.map((job, index) => (
                <div key={index} className="flex flex-col gap-2 mt-4 w-[600px]">
                    <h2 className="text-2xl font-medium">{job.company}</h2>
                    <p className="text-xl">{job.position}</p>
                    <div className="flex gap-2">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <p>{job.lacation}</p>
                        <FontAwesomeIcon icon={faCalendar} />
                        <p>{job.date}</p>
                    </div>
                    <p>{job.description}</p>
                </div>
            ))}

            </div>
            </div>
            
            
        </div>
    )
}

export default Experience