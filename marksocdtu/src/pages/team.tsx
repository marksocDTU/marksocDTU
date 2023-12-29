import Head from "next/head";
import Image from "next/image";

import e from "@/assets/event.png";
import s from "@/assets/svg.png";
import Layout from "@/components/layout";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Name from "@/components/Name";
import  {Articles} from "@/components/Articles";
import Footer from "@/components/Footer";



// import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>marksoc DTU</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
       <Header/>
       <div className="flex flex-col flex-shrink-0 gap-7 justify-center p-20 w-max-screen h-max">
        <div className="flex flex-shrink-0 w-max-screen h-max p-4 border text-4xl text-center  font-dark font-bold  "> SENIOR COUNCIL</div>

        <div className="flex flex-row   m-10 gap-14 justify-center flex-shrink-0">
            <Name
             name = "ANSH DHAMA"
             image="/images/Ansh.png"
             designation = "PRESIDENT"
             />

             <Name
             name = "ANKIT GOYAL"
             image="/images/AnkitGoyal.png"
             designation = "VICE-PRESIDENT" />

             <Name
             name = "ANUJ"
             image="/images/Anuj.png"
             designation = "TREASURER" />

             <Name
             name = "AMAN YADAV"
             image="/images/Aman Yadav.png"
             designation = "JOINT TREASURER" />
            
        </div>


        <div className="flex flex-row   m-10 gap-14 justify-center flex-shrink-0">
            <Name
             name = "HARSH AGGARWAL"
             image="/images/Harsh.jpeg"
             designation = "GENERAL SECRETARY" />

             <Name
             name = "ADRIKA MISHRA"
             image="/images/Adrika.png"
             designation = "JOINT SECRETARY" />

             <Name
             name = "ABHINAV JHA"
             image="/images/Abhinav.png"
             designation = "CHIEF COORDINATOR" />

            
            
        </div>


        <div className="flex flex-shrink-0 w-max-screen h-max p-4 border text-4xl text-center  font-dark font-bold  "> JUNIOR COUNCIL</div>

        <div className="flex flex-row   m-10 gap-14 justify-center flex-shrink-0">
            <Name
             name = "YASH CHOUDHARY"
             image="/images/YashChoudhary.png"
             designation = "TECHNICAL HEAD"
             />

             <Name
             name = "SAHIL ANAND"
             image="/images/SahilAnand.png"
             designation = "TECHNICAL HEAD" />

             <Name
             name = "DIVYANSH"
             image="/images/Divyansh.png"
             designation = "TECHNICAL HEAD" />

         
        </div>

        <div className="flex flex-row   m-10 gap-14 justify-center flex-shrink-0">
            <Name
             name = "NIKITA"
             image="/images/Nikita.png"
             designation = "DESIGN HEAD"
             />

             <Name
             name = "JEFFIN"
             image="/images/Jeffin.png"
             designation = "DESIGN HEAD" />
         
        </div>

        <div className="flex flex-row   m-10 gap-14 justify-center flex-shrink-0">
            <Name
             name = "UJJAWAL"
             image="/images/Ujjawal.png"
             designation = "EVENTS HEAD"
             />

             <Name
             name = "SOMEEN"
             image="/images/Someen.png"
             designation = "EVENTS HEAD" />

             <Name
             name = "DEEPANSHU"
             image="/images/Deepanshu.png"
             designation = "EVENTS HEAD" />

         
        </div>

             



        


        

       </div>
       <Footer/>
      </main>
    </>
  );
}
