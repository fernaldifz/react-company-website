import React from 'react';
import background from "../images/bg.jpg"
import backgroundImage from "../images/about-bg.jpg"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const ImageSlider = () => {
    return (
        <Carousel infiniteLoop={true} showStatus={false}>
            <div>
                <img src={background} alt="Background" />
                <p className="legend">THIS IS A PLACE WHERE TECHNOLOGY & CREATIVITY FUSED INTO DIGITAL CHEMISTRY</p>
            </div>
            <div>
                <img src={backgroundImage} alt="About Background" />
                <p className="legend">WE DON'T HAVE THE BEST BUT WE HAVE THE GREATEST TEAM</p>
            </div>
        </Carousel>
    );
}

export default ImageSlider