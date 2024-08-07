import Button from "@/components/Button";
import Card from "@/components/Cards";
import Image from "next/image";
import jobs from "@/utils/jobs.json";
import Profile from "@/components/aboutMeComponent/Profile";
export default function Home() {


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
        <Profile/>
    </main>
  );
}
