import { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'

const BannerSlide = () =>{

    const imageSlide = [
        {
            src: "/images/cyberBG-05.jpg", 
            alt: "First Slide"
        },
        {
            src: "/images/cyberBG-04.jpg", 
            alt: "Second Slide"
        },
        {
            src: "/images/cyberBG-03.jpg", 
            alt: "Third Slide"
        },
    ]

    const bannerSlideItem = (src, alt) => {
        return(
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={src}
                    alt={alt}
                />
            </Carousel.Item>
        )
    }

    return(
        <div className="banner-slide-container">
            <Carousel indicators={false} controls={false}>
                {bannerSlideItem(imageSlide[0].src, imageSlide[0].alt)}
                {bannerSlideItem(imageSlide[1].src, imageSlide[1].alt)}
                {bannerSlideItem(imageSlide[2].src, imageSlide[2].alt)}
            </Carousel>
            <div className='banner-button-group'>
                <div><h2>DEVELOPMENT</h2></div>
                <div><p>We are web developer</p></div>
                <div className='btn button-dark'>READ MORE</div>
                <div className='btn button-light'>LEARN MORE</div>
            </div>
        </div>
    )
}

export default BannerSlide