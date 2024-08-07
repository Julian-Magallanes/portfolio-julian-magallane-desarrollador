'use client';

import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface ButtonProps {
    title?: string;
    size?: 'sm' | 'md' | 'lg';
    color?: string;
    onClick?: string;
    customHover?: string;
    iconLeft?: ReactNode;
    iconRight?: ReactNode;
}

const Button: React.FC<ButtonProps> = ({color, title, size, customHover, onClick="#", iconLeft, iconRight }) => {
    let router = useRouter();
    return (
        <button onClick={()=>{router.push(onClick)}} className={`gap-2 rounded-3xl font-semibold text-customWhite transition-all flex justify-center px-6 py-2 h-14 text-sm ${color==="transparent"?"bg-transparent border-2  border-primary":`${color}`} items-center  hover:${customHover} `} >
            {iconLeft}{title}{iconRight}
        </button>
    );
};


export default Button;