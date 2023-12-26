import Head from "next/head";
import Image from "next/image";
import l from "@/assets/landing.png";
import e from "@/assets/event.png";
import s from "@/assets/svg.png";
import Layout from "@/components/layout";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import  {Articles} from "@/components/Articles";




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
       <div className="flex flex-shrink-0 flex-col h-max w-max-screen justify-center">
       
        <div className="flex flex-shrink-0 flex-row h-max w-max-screen pl-20 items-center  justify-center">
          <div className="flex flex-shrink-0 flex-col item-center m-10 w-1/2">
            <div className="flex flex-shrink-0 text-5xl font-Inter  ">MARKETING</div>
            <div className="flex flex-shrink-0 text-5xl font-Inter ">SOCIETY DTU</div>
            <div className="flex flex-shrink-0 ">TEXT</div>

          </div>
          <div className="flex flex-shrink-0  h-max w-1/2">
          <Image src={l} alt="logo" />
          </div>

        </div>

        <div className="flex flex-shrink-0 flex-row h-max w-max-screen items-center font-bold justify-center">
          <div className="flex flex-shrink-0 flex-col h-max m-5 p-10 px-14 gap-2 items-center rounded-md  border border-blue border-bold  justify-center">
            <div className="flex flex-shrink-0  items-center   justify-center"><Image src={e} alt="logo" /></div>
            <div className="flex flex-shrink-0  items-center   justify-center">26+</div>
            <div className="flex flex-shrink-0  items-center   justify-center">Events</div>

          </div>

          <div className="flex flex-shrink-0 flex-col h-max m-5 p-10 gap-2 items-center rounded-md border border-blue border-bold  justify-center">
            <div className="flex flex-shrink-0  items-center   justify-center"><Image src={s} alt="logo" /></div>
            <div className="flex flex-shrink-0  items-center   justify-center">26+</div>
            <div className="flex flex-shrink-0  items-center   justify-center">Registrations</div>

          </div>

          <div className="flex flex-shrink-0 flex-col h-max m-5 p-10 px-14 gap-2 items-center rounded-md border border-blue border-bold  justify-center">
            <div className="flex flex-shrink-0  items-center   justify-center"><Image src={s} alt="logo" /></div>
            <div className="flex flex-shrink-0  items-center   justify-center">26+</div>
            <div className="flex flex-shrink-0  items-center   justify-center">Projects</div>

          </div>

          <div className="flex flex-shrink-0 flex-col h-max m-5 p-10 gap-2 items-center rounded-md  border border-blue border-bold  justify-center">
            <div className="flex flex-shrink-0  items-center   justify-center"><Image src={s} alt="logo" /></div>
            <div className="flex flex-shrink-0  items-center   justify-center">26+</div>
            <div className="flex flex-shrink-0  items-center   justify-center">IG Followers</div>

          </div>



          
        </div>

       </div>



       <div className="flex flex-shrink-0 flex-col h-max w-max-screen justify-center bg-blue"><Articles/></div>

       <div className="flex flex-shrink-0 flex-row h-max w-max-screen justify-center">
        <div>vision</div>
        <div>mission</div>
       </div>
      </main>
    </>
  );
}
