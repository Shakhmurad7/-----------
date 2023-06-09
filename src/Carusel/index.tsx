import React from "react";
import { Children } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,

  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,

  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,

  }
};
interface Props{
    children:React.ReactElement
}
const Carusel =({children}:Props)=>{
    return(
            <Carousel
            swipeable
            draggable
            showDots
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            >
            {children}
            </Carousel>
            
    )
}
export default Carusel
