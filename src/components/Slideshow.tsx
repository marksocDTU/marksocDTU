
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import Image from "next/image";
import l from "@/assets/event1.png";


type Props = {
  latest : string; 
};

export const Slideshow = () => {
  const clientData = [
    {
      name: "Tom Smithenson",
      content:
      <Image src={l} alt="logo"  />,
    },
    {
      name: "T ",
      content:
        "I'm a testimonial. Click to edit me and add text that syas soemthing nice about you and your services.",
    },
    {
      name: "Tom Smnson",
      content:
        "I'm a testimonial. Click to edit me and add text that syas soemthing nice about you and your services.",
    },
    {
      name: "Tom Smienson",
      content:
        "I'm a testimonial. Click to edit me and add text that syas soemthing nice about you and your services.",
    },
    {
      name: "Tom enson",
      content:
        "I'm a testimonial. Click to edit me and add text that syas soemthing nice about you and your services.",
    },
    {
      name: "Tom enson",
      content:
        "I'm a testimonial. Click to edit me and add text that syas soemthing nice about you and your services.",
    },
    {
      name: "Tom enson",
      content:
        "I'm a testimonial. Click to edit me and add text that syas soemthing nice about you and your services.",
    },
    {
      name: "Tom enson",
      content:
        "I'm a testimonial. Click to edit me and add text that syas soemthing nice about you and your services.",
    },
    {
      name: "Tom enson",
      content:
        "I'm a testimonial. Click to edit me and add text that syas soemthing nice about you and your services.",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed: 2000,
  
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplayspeed: 2000,
        },
      },
    ],
  };

  return (
    <div className="w-[720px]  border-10 ml-40 pl-40">
      <div className="w-max-screen border h-max-screen  ">
        <Slider {...settings}>
          {clientData.map((client) => (
            <div
              key={client.name}
              className="s w-full-screen  text-black rounded-xl  "
            >
              
              <div className="flex flex-col  w-screen-full h-[480px] items-center gap-4 ">
                <div className="text-center px-4">{client.content}</div>
                <div className="text-xl text-center font-semibold mt-4">
                  {client.name}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

