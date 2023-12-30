import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import Image from "next/image";
import l from "@/assets/event1.png";
import m from "@/assets/event2.png";


type Props = {
  latest : string; 
};

export const Articles = () => {
  const clientData = [
    {
      name: "Visionary Vortex",
      content:
      <Image src={l} alt="logo" />,
    },
    {
      name: "Pixel Pitch",
      content:
      <Image src={m} alt="logo" />,
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
    slidesToShow: 4,
    slidesToScroll: 3,
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
    <div className="w-3/4 m-auto">
      <div className="mt-20 mb-10">
        <Slider {...settings}>
          {clientData.map((client) => (
            <div
              key={client.name}
              className="bg-light h-[300px] text-black rounded-xl  border border-dark border-5"
            >
              
              <div className="flex flex-col items-center gap-4 p-4 ">
                <p className="text-center px-4">{client.content}</p>
                <p className="text-xl text-center font-semibold mt-4">
                  {client.name}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

