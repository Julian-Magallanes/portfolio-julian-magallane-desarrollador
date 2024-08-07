 "use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
    const pathname = usePathname();
    console.log(pathname);
  return (
    <div className="w-full flex justify-center gap-20 py-10">
        <Link href="./" className={`text-3xl font-semibold hover:scale-110 border-b-4 ${pathname === "/" ? "border-primary" : "border-transparent"} `}>SOBRE MI</Link >
        <Link href="./trabajos" className={`text-3xl font-semibold hover:scale-110 border-b-4 ${pathname === "/trabajos" ? "border-primary" : "border-transparent"} `}>TRABAJOS</Link >
    </div>
  );
};

export default Navbar;