import React from 'react'
import Slider from 'react-slick'
import slide_one from '../../images/slide_one.jpg'
import slide_two from '../../images/slide_two.jpg'
import slide_three from '../../images/slide_three.jpg'


export default function Carousel() {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 300,
        pauseOnHover: false
    }

    return (
        <div className="carousel_wrapper"
            style={{
                overflow: 'hidden',
                height: `${window.innerHeight}px`
            }}>
            <Slider {...settings}>
                <div>
                    <div className="carousel_image"
                        style={{
                            background: `url(${slide_one})`,
                            height: `${window.innerHeight}px`
                        }}>
                    </div>
                </div>
                <div>
                    <div className="carousel_image"
                        style={{
                            background: `url(${slide_two})`,
                            height: `${window.innerHeight}px`,
                            backgroundSize: 'cover'
                        }}>
                    </div>
                </div>
                <div>
                    <div className="carousel_image"
                        style={{
                            background: `url(${slide_three})`,
                            height: `${window.innerHeight}px`
                        }}>
                    </div>
                </div>


            </Slider>
        </div>
    )
}
