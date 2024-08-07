import React from 'react';
import { FloatButton } from 'antd';
import Profile from "@/components/aboutMeComponent/Profile";
import Skills from "@/components/aboutMeComponent/Skills";
import Experience from "@/components/aboutMeComponent/Experience";
import Education from "@/components/aboutMeComponent/Education";
import KnowMore from "@/components/aboutMeComponent/knowMore";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
export default function Home() {


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
        <Profile/>
        <Experience/>
        <Education/>
        <Skills/>
        <KnowMore/>
        <Link href="https://wa.me/573104668555"><FloatButton icon={<FontAwesomeIcon icon={faWhatsapp} style={{ width: "22px", height: "22px"}}/>} style={{ width: "72px", height: "72px"}}/></Link>
    </main>
  );
}
