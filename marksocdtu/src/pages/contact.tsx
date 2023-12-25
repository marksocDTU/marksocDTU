import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/layout";
import { Inter } from "next/font/google";
import Header from "@/components/Header";

// import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ["latin"] });

export default function Contact() {
  return (
    <div>
         <Header/>
        <div>
            map ke liye space
        </div>
         
<div className="text-neutral-800 text-2xl font-medium font-['Inter'] leading-7  my-7">Send a Message</div>
<div className="w-96 h-96 pb-96 flex flex-col justify-start items-start gap-4 place-items-center">
      <div className="h-14 pl-3.5 py-4 bg-white border border-gray-500 flex justify-end items-center">
        <div className="w-96 h-6 text-black text-opacity-50 text-xs font-light font-inter leading-snug">
          Enter your name
        </div>
        <input type="text" className="ml-4 px-2 py-1 border border-gray-300 rounded" />
      </div>

      <div className="h-14 pl-3.5 py-4 bg-white border border-gray-500 flex justify-end items-center">
        <div className="w-96 h-6 text-black text-opacity-50 text-xs font-light font-inter leading-snug">
          Enter your email address
        </div>
        <input type="email" className="ml-4 px-2 py-1 border border-gray-300 rounded" />
      </div>

      <div className="h-14 pl-3.5 py-4 bg-white border border-gray-500 flex justify-end items-center">
        <div className="w-96 h-6 text-black text-opacity-50 text-xs font-light font-inter leading-snug">
          Enter your Subject
        </div>
        <input type="text" className="ml-4 px-2 py-1 border border-gray-300 rounded" />
      </div>

      <div className="h-20 pl-3.5 bg-white border border-gray-500 flex justify-end items-center">
        <div className="w-96 h-6 text-black text-opacity-50 text-xs font-light font-inter leading-snug">
          Message
        </div>
        <textarea className="ml-4 px-2 py-1 border border-gray-300 rounded"></textarea>
      </div>

      <div className="pl-3 pr-8 py-3 bg-gray-800 flex justify-start items-center">
        <button type="submit" className="text-white text-xs font-light font-inter leading-snug">
          Send Message
        </button>
      </div>
    </div>



<div className="w-full h-80 relative">
  <div className="w-64 h-56 pl-5 pb-96 left-0 top-[68.80px] absolute flex-col justify-start items-start gap-5 inline-flex">
    <div className="w-64 h-20 pb-2.5 justify-start items-start gap-3.5 inline-flex">
      <div className="w-6 h-6 relative"><svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      <div className="w-48 h-20 pr-1.5 pb-96 flex-col justify-start items-start inline-flex">
        <div className="text-black text-sm font-light font-['Inter'] leading-tight">Delhi Technological University,</div>
        <div className="text-black text-sm font-light font-['Inter'] leading-tight">Bawana Road, Shahbad Daulatpur Village,</div>
        <div className="text-black text-sm font-light font-['Inter'] leading-tight">Rohini, </div>
        <div className="text-black text-sm font-light font-['Inter'] leading-tight">New Delhi - 110042</div>
      </div>
    </div>
  </div>
  <div className="w-64 h-12 pr-4 pb-2.5 left-[691px] top-[79px] absolute justify-start items-start gap-3.5 inline-flex">
    <div className="w-6 h-6 relative"><svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    <div className="w-28 h-10 pb-96 flex-col justify-start items-start inline-flex">
      <div className="text-black text-sm font-light font-['Inter'] leading-tight">+91-999999xxxx</div>
      <div className="text-black text-sm font-light font-['Inter'] leading-tight">+91-999999xxxx</div>
    </div>
  </div>
  <div className="w-64 h-12 pb-2.5 left-[325px] top-[83px] absolute justify-start items-start gap-3.5 inline-flex">
    <div className="w-6 h-6 relative"><svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_567)">
<path d="M6.5 0C5.63805 0 4.8114 0.34241 4.2019 0.951903C3.59241 1.5614 3.25 2.38805 3.25 3.25V5.09113L1.72088 5.90688C1.20101 6.18407 0.766265 6.59737 0.463148 7.10256C0.160031 7.60776 -5.89008e-05 8.18585 1.62563e-08 8.775V22.75C1.62563e-08 23.612 0.34241 24.4386 0.951903 25.0481C1.5614 25.6576 2.38805 26 3.25 26H22.75C23.612 26 24.4386 25.6576 25.0481 25.0481C25.6576 24.4386 26 23.612 26 22.75V8.775C26.0001 8.18585 25.84 7.60776 25.5369 7.10256C25.2337 6.59737 24.799 6.18407 24.2791 5.90688L22.75 5.09113V3.25C22.75 2.38805 22.4076 1.5614 21.7981 0.951903C21.1886 0.34241 20.362 0 19.5 0L6.5 0ZM22.75 6.93388L23.5138 7.34013C23.774 7.47868 23.9916 7.68541 24.1433 7.93817C24.295 8.19093 24.3751 8.4802 24.375 8.775V10.1026L22.75 11.0776V6.93388ZM21.125 12.0526L15.0312 15.7089L13 14.4901L10.9688 15.7089L4.875 12.0526V3.25C4.875 2.81902 5.0462 2.4057 5.35095 2.10095C5.6557 1.7962 6.06902 1.625 6.5 1.625H19.5C19.931 1.625 20.3443 1.7962 20.649 2.10095C20.9538 2.4057 21.125 2.81902 21.125 3.25V12.0526ZM3.25 11.0776L1.625 10.1026V8.775C1.6252 8.48048 1.70543 8.19155 1.85713 7.9391C2.00883 7.68665 2.22629 7.48018 2.48625 7.34175L3.25 6.93388V11.0776ZM24.375 11.9974V21.3151L16.6108 16.6562L24.375 11.9974ZM24.3181 23.1774C24.2243 23.5214 24.02 23.825 23.7366 24.0414C23.4533 24.2579 23.1066 24.3751 22.75 24.375H3.25C2.89322 24.375 2.54636 24.2575 2.26295 24.0408C1.97955 23.8241 1.77535 23.5201 1.68187 23.1758L13 16.3849L24.3181 23.1774ZM1.625 21.3135V11.9974L9.38925 16.6562L1.625 21.3135Z" fill="#16417F"/>
</g>
<defs>
<clipPath id="clip0_1_567">
<rect width="26" height="26" fill="white"/>
</clipPath>
</defs>
</svg></div>
    <div className="w-48 h-10 pr-0.5 pb-96 flex-col justify-start items-start inline-flex">
      <div className="text-black text-sm font-light font-['Inter'] leading-tight">marksocdtuofficial@gm</div>
      <div className="text-black text-sm font-light font-['Inter'] leading-tight">ail.com</div>
    </div>
  </div>
  <div className="left-[60.30px] top-[-0.90px] absolute text-black text-2xl font-medium font-['Inter'] leading-7">Contact Info</div>
</div>



<div className="w-full h-56 px-32 pt-5 pb-2.5 bg-blue-900 flex-col justify-end items-center gap-2.5 inline-flex">
  <div className="self-stretch h-44 px-80 pb-5 flex-col justify-start items-center gap-5 inline-flex">
     <div className="self-stretch h-11 pl-1 pr-0.5 pb-1 justify-center items-start gap-2.5 inline-flex">
      <div className="w-10 h-10 p-3 bg-zinc-700 rounded-3xl justify-center items-center inline-flex">
        <div className="w-4 h-4 relative flex-col justify-start items-start flex"><svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_3_46)">
<path d="M5.151 15.0002C11.189 15.0002 14.492 9.9972 14.492 5.6662C14.492 5.5262 14.492 5.3842 14.486 5.2442C15.1291 4.77869 15.6841 4.20236 16.125 3.5422C15.5243 3.80706 14.8878 3.98161 14.236 4.0602C14.9225 3.64984 15.4367 3.00417 15.683 2.2432C15.038 2.62533 14.332 2.89358 13.596 3.0362C13.1012 2.50923 12.4464 2.16012 11.7331 2.04296C11.0198 1.9258 10.2877 2.04713 9.65034 2.38814C9.01296 2.72916 8.50581 3.27083 8.20745 3.92927C7.90909 4.5877 7.83618 5.32614 8 6.03021C6.69474 5.96476 5.41782 5.62567 4.25204 5.03495C3.08627 4.44422 2.05768 3.61505 1.233 2.6012C0.81434 3.32429 0.686574 4.17961 0.875646 4.99347C1.06472 5.80734 1.55645 6.51873 2.251 6.9832C1.73054 6.96552 1.22152 6.82576 0.765 6.5752V6.6202C0.765897 7.37769 1.02831 8.11163 1.50787 8.69796C1.98744 9.2843 2.65475 9.68708 3.397 9.83821C3.11526 9.91582 2.82423 9.95451 2.532 9.95321C2.32598 9.95383 2.12038 9.93474 1.918 9.8962C2.12779 10.5483 2.53627 11.1184 3.08625 11.5267C3.63622 11.935 4.30013 12.1611 4.985 12.1732C3.82156 13.087 2.3844 13.5826 0.905 13.5802C0.644321 13.5813 0.383823 13.5663 0.125 13.5352C1.62651 14.4925 3.3703 15.0008 5.151 15.0002Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_3_46">
<rect width="16" height="16" fill="white" transform="translate(0.125)"/>
</clipPath>
</defs>
</svg>
</div>
      </div>
      <div className="w-10 h-10 p-3 bg-zinc-700 rounded-3xl justify-center items-center inline-flex">
        <div className="w-4 h-4 relative flex-col justify-start items-start flex"><svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_3_43)">
<path d="M8.5 0C6.329 0 6.056 0.01 5.203 0.048C4.35 0.088 3.769 0.222 3.26 0.42C2.72609 0.620819 2.24249 0.935826 1.843 1.343C1.43608 1.7427 1.12111 2.22624 0.92 2.76C0.722 3.268 0.587 3.85 0.548 4.7C0.51 5.555 0.5 5.827 0.5 8.001C0.5 10.173 0.51 10.445 0.548 11.298C0.588 12.15 0.722 12.731 0.92 13.24C1.125 13.766 1.398 14.212 1.843 14.657C2.287 15.102 2.733 15.376 3.259 15.58C3.769 15.778 4.349 15.913 5.201 15.952C6.055 15.99 6.327 16 8.5 16C10.673 16 10.944 15.99 11.798 15.952C12.649 15.912 13.232 15.778 13.741 15.58C14.2746 15.3791 14.7578 15.0641 15.157 14.657C15.602 14.212 15.875 13.766 16.08 13.24C16.277 12.731 16.412 12.15 16.452 11.298C16.49 10.445 16.5 10.173 16.5 8C16.5 5.827 16.49 5.555 16.452 4.701C16.412 3.85 16.277 3.268 16.08 2.76C15.8789 2.22623 15.5639 1.74268 15.157 1.343C14.7576 0.935676 14.274 0.620645 13.74 0.42C13.23 0.222 12.648 0.087 11.797 0.048C10.943 0.01 10.672 0 8.498 0H8.501H8.5ZM7.783 1.442H8.501C10.637 1.442 10.89 1.449 11.733 1.488C12.513 1.523 12.937 1.654 13.219 1.763C13.592 1.908 13.859 2.082 14.139 2.362C14.419 2.642 14.592 2.908 14.737 3.282C14.847 3.563 14.977 3.987 15.012 4.767C15.051 5.61 15.059 5.863 15.059 7.998C15.059 10.133 15.051 10.387 15.012 11.23C14.977 12.01 14.846 12.433 14.737 12.715C14.6087 13.0624 14.404 13.3764 14.138 13.634C13.858 13.914 13.592 14.087 13.218 14.232C12.938 14.342 12.514 14.472 11.733 14.508C10.89 14.546 10.637 14.555 8.501 14.555C6.365 14.555 6.111 14.546 5.268 14.508C4.488 14.472 4.065 14.342 3.783 14.232C3.4355 14.1039 3.12113 13.8996 2.863 13.634C2.59675 13.376 2.39172 13.0617 2.263 12.714C2.154 12.433 2.023 12.009 1.988 11.229C1.95 10.386 1.942 10.133 1.942 7.996C1.942 5.86 1.95 5.608 1.988 4.765C2.024 3.985 2.154 3.561 2.264 3.279C2.409 2.906 2.583 2.639 2.863 2.359C3.143 2.079 3.409 1.906 3.783 1.761C4.065 1.651 4.488 1.521 5.268 1.485C6.006 1.451 6.292 1.441 7.783 1.44V1.442ZM12.771 2.77C12.6449 2.77 12.5201 2.79483 12.4036 2.84308C12.2872 2.89132 12.1813 2.96203 12.0922 3.05118C12.003 3.14032 11.9323 3.24615 11.8841 3.36262C11.8358 3.4791 11.811 3.60393 11.811 3.73C11.811 3.85607 11.8358 3.9809 11.8841 4.09738C11.9323 4.21385 12.003 4.31968 12.0922 4.40882C12.1813 4.49797 12.2872 4.56868 12.4036 4.61692C12.5201 4.66517 12.6449 4.69 12.771 4.69C13.0256 4.69 13.2698 4.58886 13.4498 4.40882C13.6299 4.22879 13.731 3.98461 13.731 3.73C13.731 3.47539 13.6299 3.23121 13.4498 3.05118C13.2698 2.87114 13.0256 2.77 12.771 2.77ZM8.501 3.892C7.95607 3.8835 7.41489 3.98349 6.90898 4.18614C6.40306 4.3888 5.94251 4.69007 5.55415 5.07242C5.16579 5.45478 4.85736 5.91057 4.64684 6.41326C4.43632 6.91595 4.3279 7.4555 4.3279 8.0005C4.3279 8.5455 4.43632 9.08505 4.64684 9.58774C4.85736 10.0904 5.16579 10.5462 5.55415 10.9286C5.94251 11.3109 6.40306 11.6122 6.90898 11.8149C7.41489 12.0175 7.95607 12.1175 8.501 12.109C9.57954 12.0922 10.6082 11.6519 11.365 10.8833C12.1217 10.1146 12.5459 9.07917 12.5459 8.0005C12.5459 6.92183 12.1217 5.88641 11.365 5.11775C10.6082 4.34909 9.57954 3.90883 8.501 3.892ZM8.501 5.333C9.20833 5.333 9.88669 5.61399 10.3869 6.11415C10.887 6.61431 11.168 7.29267 11.168 8C11.168 8.70733 10.887 9.38569 10.3869 9.88585C9.88669 10.386 9.20833 10.667 8.501 10.667C7.79367 10.667 7.11531 10.386 6.61515 9.88585C6.11499 9.38569 5.834 8.70733 5.834 8C5.834 7.29267 6.11499 6.61431 6.61515 6.11415C7.11531 5.61399 7.79367 5.333 8.501 5.333Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_3_43">
<rect width="16" height="16" fill="white" transform="translate(0.5)"/>
</clipPath>
</defs>
</svg>
</div>
      </div>
      <div className="w-10 h-10 p-3 bg-zinc-700 rounded-3xl justify-center items-center inline-flex">
        <div className="w-4 h-4 relative flex-col justify-start items-start flex"><svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_3_40)">
<path d="M0.875 1.146C0.875 0.513 1.401 0 2.05 0H15.7C16.349 0 16.875 0.513 16.875 1.146V14.854C16.875 15.487 16.349 16 15.7 16H2.05C1.401 16 0.875 15.487 0.875 14.854V1.146ZM5.818 13.394V6.169H3.417V13.394H5.818ZM4.618 5.182C5.455 5.182 5.976 4.628 5.976 3.934C5.961 3.225 5.456 2.686 4.634 2.686C3.812 2.686 3.275 3.226 3.275 3.934C3.275 4.628 3.796 5.182 4.602 5.182H4.618ZM9.526 13.394V9.359C9.526 9.143 9.542 8.927 9.606 8.773C9.779 8.342 10.174 7.895 10.838 7.895C11.707 7.895 12.054 8.557 12.054 9.529V13.394H14.455V9.25C14.455 7.03 13.271 5.998 11.691 5.998C10.417 5.998 9.846 6.698 9.526 7.191V7.216H9.51C9.51531 7.20765 9.52064 7.19932 9.526 7.191V6.169H7.126C7.156 6.847 7.126 13.394 7.126 13.394H9.526Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_3_40">
<rect width="16" height="16" fill="white" transform="translate(0.875)"/>
</clipPath>
</defs>
</svg>
</div>
      </div>
    </div> 






    <div className="text-white text-xs font-normal font-['Merriweather'] leading-none">Delhi Technological University, Bawana Road, Shahbad Daulatpur, Rohini, New Delhi - 110042</div>
    <div className="self-stretch h-4 justify-center items-start gap-2.5 inline-flex">
      <div className="w-4 h-4 relative flex-col justify-start items-start flex"><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_3_35)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.99436 1.26115C2.16933 1.08644 2.37944 0.950905 2.61075 0.863537C2.84207 0.776169 3.08931 0.738958 3.3361 0.75437C3.58288 0.769782 3.82357 0.837465 4.04222 0.952935C4.26087 1.0684 4.45248 1.22902 4.60436 1.42415L6.39936 3.73015C6.72836 4.15315 6.84436 4.70415 6.71436 5.22415L6.16736 7.41415C6.13908 7.52758 6.1406 7.64639 6.17179 7.75906C6.20298 7.87172 6.26277 7.97441 6.34536 8.05715L8.80236 10.5141C8.88519 10.5969 8.98805 10.6568 9.10091 10.688C9.21377 10.7192 9.33278 10.7206 9.44636 10.6921L11.6354 10.1451C11.892 10.081 12.1598 10.076 12.4186 10.1306C12.6775 10.1851 12.9205 10.2978 13.1294 10.4601L15.4354 12.2541C16.2644 12.8991 16.3404 14.1241 15.5984 14.8651L14.5644 15.8991C13.8244 16.6391 12.7184 16.9641 11.6874 16.6011C9.04854 15.6727 6.65263 14.162 4.67736 12.1811C2.69665 10.2062 1.18597 7.81061 0.257358 5.17215C-0.104642 4.14215 0.220358 3.03515 0.960358 2.29515L1.99436 1.26115Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_3_35">
<rect width="16" height="16" fill="white" transform="translate(0.109375 0.75)"/>
</clipPath>
</defs>
</svg>
</div>
      <div className="text-white text-xs font-normal font-['Merriweather'] leading-none"> +91 99999 xxxxx   +91 99999 xxxxx</div>
    </div>
    <div className="self-stretch h-4 justify-center items-start gap-2.5 inline-flex">
      <div className="w-4 h-4 relative flex-col justify-start items-start flex"><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_3_31)">
<path d="M0.78125 4.25C0.78125 3.71957 0.991964 3.21086 1.36704 2.83579C1.74211 2.46071 2.25082 2.25 2.78125 2.25H14.7812C15.3117 2.25 15.8204 2.46071 16.1955 2.83579C16.5705 3.21086 16.7812 3.71957 16.7812 4.25V12.25C16.7812 12.7804 16.5705 13.2891 16.1955 13.6642C15.8204 14.0393 15.3117 14.25 14.7812 14.25H2.78125C2.25082 14.25 1.74211 14.0393 1.36704 13.6642C0.991964 13.2891 0.78125 12.7804 0.78125 12.25V4.25ZM2.78125 3.25C2.51603 3.25 2.26168 3.35536 2.07414 3.54289C1.88661 3.73043 1.78125 3.98478 1.78125 4.25V4.467L8.78125 8.667L15.7812 4.467V4.25C15.7812 3.98478 15.6759 3.73043 15.4884 3.54289C15.3008 3.35536 15.0465 3.25 14.7812 3.25H2.78125ZM15.7812 5.633L11.0732 8.458L15.7812 11.355V5.633ZM15.7472 12.509L10.1073 9.038L8.78125 9.833L7.45525 9.038L1.81525 12.508C1.87208 12.7208 1.99757 12.9089 2.17224 13.0431C2.34691 13.1772 2.561 13.25 2.78125 13.25H14.7812C15.0014 13.25 15.2154 13.1774 15.39 13.0434C15.5647 12.9095 15.6902 12.7216 15.7472 12.509ZM1.78125 11.355L6.48925 8.458L1.78125 5.633V11.355Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_3_31">
<rect width="16" height="16" fill="white" transform="translate(0.78125 0.25)"/>
</clipPath>
</defs>
</svg>
</div>
      <div className="text-white text-xs font-normal font-['Merriweather'] leading-none">marksocdtuofficial@gmail.com</div>
    </div>
  </div>
  <div><span className="text-white text-xs font-normal font-['Merriweather'] leading-none">Designed and Developed by </span><span className="text-emerald-300 text-xs font-normal font-['Merriweather'] underline leading-none">Yash Choudhary </span><span className="text-blue-900 text-xs font-normal font-['Merriweather'] leading-none">, </span><span className="text-emerald-300 text-xs font-normal font-['Merriweather'] leading-none">& </span><span className="text-emerald-300 text-xs font-normal font-['Merriweather'] underline leading-none"> Sahil Anand</span></div>
</div>
         
    </div>
    

  );
}