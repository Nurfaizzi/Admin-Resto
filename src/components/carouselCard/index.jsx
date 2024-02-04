import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import orang1 from "../../assets/orang1.jpeg";
import orang2 from "../../assets/orang2.jpeg";
import orang3 from "../../assets/orang3.jpeg";
import resto from "../../assets/resto.png";
export default class Responsive extends Component {
  render() {
    const settings = {
      dots: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      infinite: true,
      autoplay: true,
      arrows: false,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 3,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1.5,
            slidesToScroll: 1.5,
            initialSlide: 1.5,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    const dataCarousel = [
      {
        id: 1,
        image: orang1,
        title:
          "A customer is a person or business that buys goods or services from another business. Customers are crucial because they generate revenue. Without them, businesses would go out of business.",
        name: "gunawan",
        icon: <i class="fa-solid fa-star"></i>,
      },
      {
        id: 2,
        image: orang2,
        title:
          "A customer is a person or business that buys goods or services from another business. Customers are crucial because they generate revenue. Without them, businesses would go out of business.",
        name: "Paijem",
        icon: <i class="fa-solid fa-star"></i>,
      },
      {
        id: 3,
        image: orang3,
        title:
          "A customer is a person or business that buys goods or services from another business. Customers are crucial because they generate revenue. Without them, businesses would go out of business.",
        name: "Suloyo",
        icon: <i class="fa-solid fa-star"></i>,
      },
    ];

    return (
      <div>
        <Slider {...settings}>
          {dataCarousel.map((data, key) => (
            <div className="wrap-slider pt-10 flex pl-4 " key={key}>
              <div class=" max-w-sm border bg-white border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700">
                <img
                  className="rounded-full w-56 h-56 p-10 flex justify-center m-auto"
                  src={data.image}
                  alt=""
                />
                <h5 class="m-auto text-center mb-2 text-xs font-bold tracking-tight text-gray-900 dark:text-white ">
                  {data.name}
                </h5>
                <h5 class="m-auto flex justify-center gap-3 text-center mb-2 text-xs font-bold tracking-tight text-gray-900 dark:text-white ">
                  {data.icon}
                  {data.icon}
                  {data.icon}
                  {data.icon}
                  {data.icon}
                </h5>
                <div class="p-5">
                  <h5 class="m-auto text-center mb-2 text-xs  tracking-tight text-gray-900 dark:text-white">
                    {data.title}
                  </h5>
                </div>
                <div class=""></div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
