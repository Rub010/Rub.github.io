import React from "react";
import "./slider.css"
import img1 from "./img1.jpg"
import img2 from "./img2.jpg"
import img3 from "./img3.jpeg"
import img4 from "./img4.jpeg"
import img5 from "./img5.jpeg"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Slider() {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <div>
            <Carousel responsive={responsive}>
            <div><img src={img1} className="img"/></div>
            <div><img src={img2} className="img"/></div>
            <div><img src={img3} className="img"/></div>
            <div><img src={img4} className="img"/></div>
            <div><img src={img5} className="img"/></div>
            </Carousel>
        </div>
    )
}