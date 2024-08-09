
import Card from "@/components/Cards";

import jobs from "@/utils/jobs.json";
import { FloatButton } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import ButtonArrow from "@/components/ButtonArrow";

export default function trabajos() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 mt-4">
      <div className="w-full flex flex-wrap justify-center gap-10">
        {jobs.map((job, index) => (
          <div key={index}>
            {job.slug ? (
              <Card
                img={job.urlImage}
                title={job.title}
                description={job.description}
                onClick={`./trabajos/${job.slug}`}
                skills={[
                  ...(job.skills || []),
                  ...(job.skillsFront || []),
                  ...(job.skillsBack || []),
                ]}
                favorite={job.favorites.valueOf()}
                
              />
            ) : (
              <Card
                img={job.urlImage}
                title={job.title}
                description={job.description}
                skills={[
                  ...(job.skills || []),
                  ...(job.skillsFront || []),
                  ...(job.skillsBack || []),
                ]}
                after={true}
                favorite={job.favorites.valueOf()}
                onClick={job.urlPage || "#"}
                noContent={job.NoContent?.valueOf()}
              />
            )}
          </div>
        ))}
      </div>
      <a target="_blank" rel="noopener noreferrer" href="https://wa.me/573104668555"><FloatButton icon={<FontAwesomeIcon icon={faWhatsapp} style={{ width: "22px", height: "22px", color: "white"}}/>} style={{ width: "72px", height: "72px",background: "#3f3f3f", backgroundColor: "#3f3f3f"}}/></a>
      <ButtonArrow/>
    </main>
  );
}
