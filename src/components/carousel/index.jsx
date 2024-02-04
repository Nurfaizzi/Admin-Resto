import React, { Component } from "react";
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import makanan from "../../assets/makanan.png"
import slideimage from "../../assets/baner.png"
import resto from '../../assets/resto.png'
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
                  slidesToShow: 1,
                  slidesToScroll: 1,
       
                },
              },
              {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 1,
             
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
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 1,
   
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
                id : 1,
                image : slideimage
            },
            {
                id : 2,
                image : makanan
            },
            {
                id : 3,
                image :resto
            },
        ]

      return (
        <div>

          <Slider {...settings}>
          {dataCarousel.map((data,key) => (
            <div className="wrap-slider bg-white" key={key}>
              <div className="wrap-card-carousel">
                <div className="card-carousel" key={data.id}>
                  <div>
                    <img src={data.image} className="bg-white object-fill flex" />
                  </div>
      
                </div>
              </div>
            </div>
          ))}
          </Slider>
        </div>
      );
    }
  }