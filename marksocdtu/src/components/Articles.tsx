
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';


export const Articles = () => {
  const clientData = [
    {
      name: "Tom Smithenson",
      content:
        "I'm a testimonial. Click to edit me and add text that syas soemthing nice about you and your services.",
    },
    {
      name: "Tom ",
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
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
              className="bg-light h-[500px] text-black rounded-xl border border-black"
            >
              <div className="h-10 bg-blue-500 rounded-t-xl border border-b-black ">
                <div className="flex items-start p-3 gap-2">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4 p-4 mt-20">
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

