 "use client";
import { faCode, faFaceSmile, faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
    const pathname = usePathname();
    console.log(pathname);
  return (
    <div className="w-full flex justify-center  px-10 max-sm:px-5">
      <div className="flex gap-20 justify-center bg-primary rounded-b-3xl w-full pt-10 max-sm:gap-2">
        <Link href="/" className={`text-xl font-semibold hover:scale-110 py-2 rounded-t-xl px-8 max-sm:text-lg max-sm:px-4 text-nowrap ${pathname === "/" ? "bg-[#d7dcdd] " : "text-white"} `}><FontAwesomeIcon icon={faCode} style={{width: "18px", height: "18px", color: `${ pathname === "/" ? "#1E1E1E" : "white"}`}} className="mr-2"/>SOBRE MI</Link >
        <Link href="/trabajos" className={`text-xl font-semibold hover:scale-110 py-2 rounded-t-xl px-8 max-sm:text-lg max-sm:px-4 text-nowrap ${pathname === "/trabajos" ? "bg-[#d7dcdd]" : "text-white"} `}><FontAwesomeIcon icon={faRocket} style={{width: "18px", height: "18px", color: `${ pathname === "/trabajos" ? "#1E1E1E" : "white"}`}} className="mr-2"/>TRABAJOS</Link >
      </div>
    </div>
  );
};

export default Navbar;