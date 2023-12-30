import React from 'react';
import Image from "next/image";
import l from "@/assets/landing.png";
import {motion} from 'framer-motion';

type Props = {
    name: string;

};


const Updates= (props: Props) => {
    return(

            <div className="flex flex-shrink-0  items-center   justify-center">{props.name}+</div>
        
    
  
        

    );
};

export default Updates ;















