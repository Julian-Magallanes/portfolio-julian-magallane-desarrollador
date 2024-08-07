import Button from "@/components/Button";
import Card from "@/components/Cards";
import Image from "next/image";
import jobs from "@/utils/jobs.json";

export default function trabajos() {


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
        <div className="w-full flex flex-wrap justify-center gap-10">
        {jobs.map ((job, index) => (
            <Card key={index} img={job.urlImage} title={job.title} description={job.description} onClick={`./trabajos/${job.slug}`}/>
        ))}
        
        </div>
    </main>
  );
}