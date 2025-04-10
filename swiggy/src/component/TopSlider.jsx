import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardRestaurant from './CardRestaurant';


function TopSlider(props) {
    let resurantData  = props?.data;
    let slide =  Number(props?.slideShow)
    // console.log(props.slideShow,"my data")

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow:slide ||4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow:4,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 1500,
            settings: {
              slidesToShow:slide-1,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 785,
            settings: {
              slidesToShow:3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow:3,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 550,
            settings: {
              slidesToShow:2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <div className="slider-container">
        <Slider {...settings}>

       
          {resurantData && resurantData.length > 0 && resurantData?.map((items, index) => {
            return (
                <div  >
                {React.cloneElement(props.child, { ...items })}
                </div>
            
            );
          })}
  
        </Slider>
      </div>
    );
  }
  
//   export default TopSlider


  import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";  
 function Carousels(props) {
    let data = props.data;
    //  console.log(props,"crousel")
    return (
      <>
        <section className="container mx-auto  sm:px-4 py-3 ">
          <div className="py-4 ">
            <h2 className="font-bold text-xl px-0 sm:px-2">{props.heading}</h2>
          </div>
          <div className="px-0 sm:px-3 relative">
             {/* <CarouselSlider CarouselDatas={CarouselDatas} />  */}
             <TopSlider data = {data} child ={props.children} slideShow={props.slidesToShow} />
             {/* <TopSlider data ={props} /> */}
          <div className="hidden sm:block">
                {/* Left button */}
            <span className="absolute top-[-45px] right-28  rounded-full p-2 bg-gray-200  ">
              <FaArrowLeft />
            </span>
            {/* right  button */}
            <span className="absolute top-[-45px] right-12 rounded-full p-2 bg-gray-200 ">
              <FaArrowRight />
            </span>
          </div>
          </div>
        </section>
      </>
    );
  }
  
  export default Carousels;