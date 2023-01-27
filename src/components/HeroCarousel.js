import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ImageGroup from '../images/group-jump.jpg'
import ImagePet from '../images/pet-image.jpg';
import ImageKids from '../images/kids.jpg';
import './HeroCarousel.css'

function HeroCarousel() {
    return(
        <div className='home-carousel'>
            <Carousel>
                <Carousel.Item interval={4000}>
                    <img
                    className="d-block w-100"
                    src={ImageGroup}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>Everyones are welcome!</h3>
                    <p>It's that easy! Come with your family, friends and lovers!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <img
                    className="d-block w-100"
                    src={ImagePet}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3>Photos to Image? No problem!</h3>
                    <p>Our in-house illustrator will draw for you! Simply submit your image on booking request.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <img
                    className="d-block w-100"
                    src={ImageKids}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3>Redeem Creative Kids Vouchers</h3>
                    <p>
                        We do accept Creative Kids Vouchers for all classes. Message us for more information!
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default HeroCarousel;