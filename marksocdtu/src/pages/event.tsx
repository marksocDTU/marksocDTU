import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/layout";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";



// import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <div>
    <Header/>
    {/* <div className="flex flex-shrink-0 justify-items-center max-w-full max-h-screen bg-zinc-300">
      <div className="flex flex-shrink-0 text-black">Events</div>
    </div> */}
    <div className={"flex flex-shrink-0 bg-[#d9d9d9] w-[full] h-[750px] mx-10 my-8 "}>
      <div className="flex flex-shrink-0 text-black"> Events </div>
    </div>
    
    <Footer/>
   </div>
  );
}