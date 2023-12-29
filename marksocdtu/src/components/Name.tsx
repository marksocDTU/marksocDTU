import React from 'react';
import Image from "next/image";
import l from "@/assets/landing.png";
import {motion} from 'framer-motion';

type Props = {
    name: string;
    designation: string;
    image : string;
};


const Name= (props: Props) => {
    return(
    
             <motion.div whileHover={{scale:1.5}} className="flex flex-col h-1/6 w-1/6 border flex-shrink-0  hover:shadow-xl">
                            <div className="flex border flex-shrink-0 text-center text-white font-semibold justify-center bg-dark rounded-b-full">{props.name}</div>
                            <div className="flex   flex-shrink-0" ><Image src={props.image} alt="logo" /></div>
                            <div className="flex  flex-shrink-0 text-center  font-bold justify-center">{props.designation}</div>

            </motion.div>    
        

    );
};

export default Name ;