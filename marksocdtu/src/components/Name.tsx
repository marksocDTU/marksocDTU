import React from 'react';
import Image from "next/image";
import l from "@/assets/landing.png";
import {motion} from 'framer-motion';

const Name= () => {
    return(
    
             <motion.div whileHover={{scale:1.5}} className="flex flex-col h-1/6 w-1/6 border flex-shrink-0  hover:shadow-xl">
                            <div className="flex border flex-shrink-0 bg-blue rounded">man</div>
                            <div className="flex  border flex-shrink-0" ><Image src={l} alt="logo" /></div>
                            <div className="flex border flex-shrink-0">designation</div>

            </motion.div>    
        

    );
};

export default Name ;