import { faCalendar } from "@fortawesome/free-regular-svg-icons"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import experience from "@/utils/experience.json"

const Experience = () => {
    return(
        <div className="text-primary my-40">
            
            <div className="flex h-auto ">
            <div className="bg-gradient-to-b from-transparent to-tertiary px-[3px]  h-auto mx-6 mt-6"/>
            <div className="flex flex-col gap-2 mt-4">
            <h1 className="text-4xl font-bold text-start">Experiencia</h1>
            {experience.map((job, index) => (
                <div key={index} className="flex flex-col gap-2 mt-4 w-[600px] max-sm:w-full">
                    <h2 className="text-2xl font-medium text-gray-600">{job.company}</h2>
                    <p className="text-xl">{job.position}</p>
                    <div className="flex gap-2 items-center">
                        <FontAwesomeIcon icon={faLocationDot} style={{color: "#00cbcc"}}/>
                        <p className="font-medium text-tertiary">{job.lacation}</p>
                        <FontAwesomeIcon icon={faCalendar} style={{color: "#00cbcc"}}/>
                        <p className="font-medium text-tertiary">{job.date}</p>
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