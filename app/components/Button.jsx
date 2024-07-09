

import react from 'react'  
import Image from "next/image"


const Button = ({ type, title, icon, disabled, variant, altitle }) => {
    return (
        <button type={type} disabled={disabled} className={`btn-${variant} flex px-6 items-center py-2 border-2 border-black  rounded-full `}>
        
           <label className="font-normal  text-xl ">
           {title}
           </label>


            {icon && icon}
        </button>
    )
}

export default Button
