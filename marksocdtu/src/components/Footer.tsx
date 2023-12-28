"use client";
import Logo from "./Logo";
import Link from "next/link";
import { useState } from "react";


type Props = {};

const Footer = (props: Props) => {

  return (
    <div className="w-full h-56 px-32 pt-5 pb-2.5 bg-blue-900 flex-col justify-end items-center gap-2.5 inline-flex">
  <div className="self-stretch h-44 px-80 pb-5 flex-col justify-start items-center gap-5 inline-flex">
     <div className="self-stretch h-11 pl-1 pr-0.5 pt-2 pb-1 justify-center items-start gap-2.5 inline-flex">
      <div className="w-10 h-10 p-3 bg-zinc-700 rounded-3xl justify-center items-center inline-flex hover:bg-blue-400">
        <a href="https://www.instagram.com/marksoc.dtu/" target="_blank">
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
</a>
      </div>
      <div className="w-10 h-10 p-3 bg-zinc-700 rounded-3xl justify-center items-center inline-flex hover:bg-blue-400">
       <a href="https://www.linkedin.com/company/the-marketing-society-dtu/" target="_blank">
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
</a>
      </div>
    </div> 

    <a href="https://maps.app.goo.gl/DXScjgRLJ6wWZfX7A" target="_blank">
    <div className="text-white text-xs font-normal font-['Merriweather'] leading-none hover:text-gray-300">Delhi Technological University, Bawana Road, Shahbad Daulatpur, Rohini, New Delhi - 110042</div></a>
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
  <div><span className="text-white text-xs font-normal font-['Merriweather'] leading-none">Designed and Developed by </span><a href="https://www.linkedin.com/in/yash-choudhary-044889256/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><span className="text-emerald-300 text-xs font-normal font-['Merriweather'] underline leading-none">Yash Choudhary  </span></a><span className="text-emerald-300 text-xs font-normal font-['Merriweather'] leading-none">& </span><a href="https://www.linkedin.com/in/sahil-anand-640112e/" target="_blank"><span className="text-emerald-300 text-xs font-normal font-['Merriweather'] underline leading-none"> Sahil Anand</span></a></div>
</div>
  );
};

export default Footer;




