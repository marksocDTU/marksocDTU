import React from 'react';
import Image from "next/image";
import l from "@/assets/landing.png";
import {motion} from 'framer-motion';

type Props = {
    name: string;
    logo: string;
    update: string;

};


const Updates= (props: Props) => {
    return(

        <div className=" animation flex flex-shrink-0 flex-col h-max m-5 p-10 px-14 gap-2 items-center rounded-md  border border-dark border-4 justify-center " data-aos="flip-right">
            <div className="flex flex-shrink-0  items-center   justify-center"><Image src={props.logo} alt="logo" /></div>
            <div className="flex flex-shrink-0  items-center   justify-center">{props.name}+</div>
            <div className="flex flex-shrink-0  items-center   justify-center">{props.update}</div>
            </div>
    
  
        

    );
};

export default Updates ;















