import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/layout";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ["latin"] });

export default function Contact() {
  return (
    <div>
         <Header/>
      
         <div className=" flex flex-shrink-0 flex-col h-max w-max-screen ">
          <div className=" flex flex-shrink-0 flex-col h-1/2 w-full-screen p-50 border justify-item-center ">
            <div className="flex flex-shrink-0 flex-col h-max w-max-screen text-center text-4xl px-50 m-10 ">Send a message</div>
            <div className="flex flex-shrink-0 flex-col h-max w-max-screen  mx-auto ">
            <div className="flex flex-shrink-0 w-max h-max items-stretch flex-col justify-center  gap-4 ml-10 ">
              
                <input type="text" className="flex flex-shrink-0 w-max-screen pr-80 border border-gray  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6" placeholder="Enter your Name"/> 
                <input type="text" className="flex flex-shrink-0 w-max-screen pr-80 border border-gray  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6" placeholder="Enter your Email-address"/> 
                <input type="text" className="flex flex-shrink-0 w-max-screen  border border-gray  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6" placeholder="Enter your Subject"/>
                <input type="text" className="flex flex-shrink-0 w-max-screen h-24  border border-gray  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6" placeholder="Enter your Message"/>
                <div className="mt-3 mb-7">
                <button className="flex flex-shrink-0 bg-black text-white font-Inter text-base px-6 py-3 rounded hover:bg-zinc-800 active:bg-gray-700">Send Message</button>
                </div>
     
           </div>  
            </div>

          </div>
          <div></div>

         </div>
         



































 <div className="flex flex-shrink-0 w-full h-60 relative lg:ml-80 mt-10 sm: ml-0 ">

  <div className="flex flex-shrink-0 w-64 h-56 pl-5 pb-96 left-0 top-[68.80px] absolute flex-col justify-start items-start gap-5 ">
    <div className="flex flex-shrink-0 w-64 h-20 pb-2.5 justify-start items-start gap-3.5 ">
      <div className="flex flex-shrink-0 w-6 h-6 relative"><svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_559)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 7.29676C6.50012 6.04588 6.86117 4.8216 7.53983 3.77082C8.21849 2.72005 9.18593 1.88742 10.3261 1.37283C11.4662 0.858253 12.7306 0.683583 13.9676 0.869783C15.2045 1.05598 16.3614 1.59514 17.2996 2.42257C18.2377 3.24999 18.9171 4.33053 19.2564 5.53454C19.5956 6.73854 19.5803 8.01486 19.2121 9.21034C18.844 10.4058 18.1387 11.4697 17.1809 12.2743C16.2232 13.0789 15.0536 13.59 13.8125 13.7464V22.7343C13.8125 22.9497 13.7269 23.1564 13.5745 23.3088C13.4222 23.4612 13.2155 23.5468 13 23.5468C12.7845 23.5468 12.5778 23.4612 12.4255 23.3088C12.2731 23.1564 12.1875 22.9497 12.1875 22.7343V13.748C10.6161 13.55 9.17099 12.7851 8.12372 11.5969C7.07645 10.4087 6.49906 8.88062 6.5 7.29676ZM10.5511 21.2295C10.5864 21.442 10.5358 21.6597 10.4106 21.8349C10.2853 22.0101 10.0957 22.1285 9.88325 22.1639C8.72625 22.3556 7.80325 22.6433 7.19388 22.965C6.97002 23.0726 6.76658 23.2183 6.59263 23.3956C6.5533 23.4385 6.52193 23.488 6.5 23.5419V23.5468L6.50325 23.5598C6.50964 23.5787 6.51838 23.5967 6.52925 23.6134C6.59339 23.7074 6.67307 23.7899 6.76488 23.8571C7.033 24.0684 7.47175 24.2959 8.086 24.499C9.30637 24.9053 11.0435 25.1718 13 25.1718C14.9565 25.1718 16.6936 24.9069 17.914 24.499C18.5283 24.2943 18.967 24.0684 19.2351 23.8571C19.3275 23.7899 19.4077 23.7075 19.4724 23.6134C19.4827 23.5966 19.4909 23.5786 19.4967 23.5598L19.5 23.5468V23.5403C19.4781 23.4864 19.4467 23.4369 19.4074 23.394C19.2333 23.2173 19.0299 23.0721 18.8061 22.965C18.1951 22.6433 17.2738 22.3556 16.1168 22.1639C16.009 22.1493 15.9052 22.1132 15.8117 22.0577C15.7181 22.0023 15.6366 21.9286 15.572 21.8411C15.5075 21.7536 15.4611 21.654 15.4358 21.5483C15.4104 21.4425 15.4065 21.3327 15.4244 21.2254C15.4422 21.1181 15.4814 21.0155 15.5396 20.9237C15.5979 20.8318 15.674 20.7526 15.7634 20.6907C15.8528 20.6288 15.9538 20.5855 16.0602 20.5633C16.1667 20.5411 16.2766 20.5406 16.3832 20.5616C17.6345 20.768 18.7427 21.0946 19.5634 21.5269C20.3125 21.9218 21.125 22.5718 21.125 23.5468C21.125 24.239 20.7025 24.7688 20.241 25.1344C19.7698 25.5049 19.136 25.8055 18.4275 26.0411C17.0008 26.5173 15.0816 26.7968 13 26.7968C10.9184 26.7968 8.99925 26.5173 7.5725 26.0411C6.864 25.8055 6.23025 25.5049 5.759 25.1344C5.2975 24.7688 4.875 24.239 4.875 23.5468C4.875 22.5734 5.6875 21.9218 6.43663 21.5269C7.25725 21.0946 8.3655 20.768 9.61675 20.5616C9.82921 20.5264 10.047 20.5769 10.2222 20.7022C10.3974 20.8274 10.5157 21.0171 10.5511 21.2295Z" fill="#16417F"/>
</g>
<defs>
<clipPath id="clip0_1_559">
<rect width="26" height="26" fill="white" transform="translate(0 0.796875)"/>
</clipPath>
</defs>
</svg>
</div>
      <a href="https://maps.app.goo.gl/DXScjgRLJ6wWZfX7A" target="_blank">
      <div className="flex flex-shrink-0 w-48 h-20 pr-1.5 pb-96 flex-col justify-start items-start">
        <div className="flex flex-shrink-0 text-black text-sm font-light font-['Inter'] leading-tight">Delhi Technological University,</div>
        <div className="flex flex-shrink-0 text-black text-sm font-light font-['Inter'] leading-tight">Bawana Road, Shahbad Daulatpur Village,</div>
        <div className="flex flex-shrink-0 text-black text-sm font-light font-['Inter'] leading-tight">Rohini, </div>
        <div className="flex flex-shrink-0 text-black text-sm font-light font-['Inter'] leading-tight">New Delhi - 110042</div>
      </div>
      </a>
    </div>
  </div>
  <div className="flex flex-shrink-0 w-64 h-12 pr-4 pb-2.5 left-[691px] top-[79px] absolute justify-start items-start gap-3.5 ">
    <div className="flex flex-shrink-0 w-6 h-6 relative"><svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_573)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.06291 0.830492C3.34725 0.546586 3.68867 0.326349 4.06456 0.184375C4.44045 0.0424018 4.84222 -0.018066 5.24324 0.00697882C5.64426 0.0320237 6.03539 0.142009 6.39069 0.329647C6.74599 0.517285 7.05736 0.77829 7.30416 1.09537L10.221 4.84262C10.7557 5.52999 10.9442 6.42537 10.7329 7.27037L9.84404 10.8291C9.79808 11.0134 9.80056 11.2065 9.85125 11.3896C9.90193 11.5727 9.99909 11.7395 10.1333 11.874L14.1259 15.8666C14.2605 16.0011 14.4277 16.0984 14.6111 16.1491C14.7945 16.1998 14.9879 16.2021 15.1724 16.1559L18.7295 15.267C19.1465 15.1627 19.5818 15.1546 20.0024 15.2433C20.423 15.332 20.8179 15.5151 21.1573 15.7789L24.9045 18.6941C26.2517 19.7422 26.3752 21.7329 25.1694 22.937L23.4892 24.6172C22.2867 25.8197 20.4894 26.3479 18.814 25.758C14.526 24.2492 10.6326 21.7944 7.42279 18.5755C4.20413 15.3661 1.74928 11.4734 0.240289 7.18587C-0.347961 5.51212 0.180164 3.71324 1.38266 2.51074L3.06291 0.830492Z" fill="#16417F"/>
</g>
<defs>
<clipPath id="clip0_1_573">
<rect width="26" height="26" fill="white"/>
</clipPath>
</defs>
</svg>

</div>
    <div className="flex flex-shrink-0 w-28 h-10 pb-96 flex-col justify-start items-start ">
      <div className="flex flex-shrink-0 text-black text-sm font-light font-['Inter'] leading-tight">+91-999999xxxx</div>
      <div className="flex flex-shrink-0 text-black text-sm font-light font-['Inter'] leading-tight">+91-999999xxxx</div>
    </div>
  </div>
  <div className="flex flex-shrink-0 w-64 h-12 pb-2.5 left-[325px] top-[83px] absolute justify-start items-start gap-3.5 ">
    <div className="flex flex-shrink-0 w-6 h-6 relative"><svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_567)">
<path d="M6.5 0C5.63805 0 4.8114 0.34241 4.2019 0.951903C3.59241 1.5614 3.25 2.38805 3.25 3.25V5.09113L1.72088 5.90688C1.20101 6.18407 0.766265 6.59737 0.463148 7.10256C0.160031 7.60776 -5.89008e-05 8.18585 1.62563e-08 8.775V22.75C1.62563e-08 23.612 0.34241 24.4386 0.951903 25.0481C1.5614 25.6576 2.38805 26 3.25 26H22.75C23.612 26 24.4386 25.6576 25.0481 25.0481C25.6576 24.4386 26 23.612 26 22.75V8.775C26.0001 8.18585 25.84 7.60776 25.5369 7.10256C25.2337 6.59737 24.799 6.18407 24.2791 5.90688L22.75 5.09113V3.25C22.75 2.38805 22.4076 1.5614 21.7981 0.951903C21.1886 0.34241 20.362 0 19.5 0L6.5 0ZM22.75 6.93388L23.5138 7.34013C23.774 7.47868 23.9916 7.68541 24.1433 7.93817C24.295 8.19093 24.3751 8.4802 24.375 8.775V10.1026L22.75 11.0776V6.93388ZM21.125 12.0526L15.0312 15.7089L13 14.4901L10.9688 15.7089L4.875 12.0526V3.25C4.875 2.81902 5.0462 2.4057 5.35095 2.10095C5.6557 1.7962 6.06902 1.625 6.5 1.625H19.5C19.931 1.625 20.3443 1.7962 20.649 2.10095C20.9538 2.4057 21.125 2.81902 21.125 3.25V12.0526ZM3.25 11.0776L1.625 10.1026V8.775C1.6252 8.48048 1.70543 8.19155 1.85713 7.9391C2.00883 7.68665 2.22629 7.48018 2.48625 7.34175L3.25 6.93388V11.0776ZM24.375 11.9974V21.3151L16.6108 16.6562L24.375 11.9974ZM24.3181 23.1774C24.2243 23.5214 24.02 23.825 23.7366 24.0414C23.4533 24.2579 23.1066 24.3751 22.75 24.375H3.25C2.89322 24.375 2.54636 24.2575 2.26295 24.0408C1.97955 23.8241 1.77535 23.5201 1.68187 23.1758L13 16.3849L24.3181 23.1774ZM1.625 21.3135V11.9974L9.38925 16.6562L1.625 21.3135Z" fill="#16417F"/>
</g>
<defs>
<clipPath id="clip0_1_567">
<rect width="26" height="26" fill="white"/>
</clipPath>
</defs>
</svg></div>
    <div className="flex flex-shrink-0 w-48 h-10 pr-0.5 pb-96 flex-col justify-start items-start">
      <div className="flex flex-shrink-0 text-black text-sm font-light font-['Inter'] leading-tight">marksocdtuofficial@gmail.com</div>
      
    </div>
  </div>
  <div className="flex flex-shrink-0 left-[60.30px] top-[-0.90px] absolute text-black text-2xl font-medium font-['Inter'] leading-7">Contact Info</div>
</div> 


<Footer/>
         
    </div>
    

  );
}