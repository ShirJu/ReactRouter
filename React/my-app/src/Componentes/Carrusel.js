import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Carrusel() {

    return (

        <Carousel>
            <div className="main-swiper swiper-wrapper swiper-slide Banner1" >
                <img src=" https://i.dummyjson.com/data/products/1/thumbnail.jpg" className="product-image" />

                <div className="banner-content">

                    <div className="container">

                        <div className="row">
                            <div className="col-md-6">
                                <div className="image-holder">

                                </div>
                                <h2 className="banner-title">Home</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main-swiper swiper-wrapper  Banner2" >
                <img src=" https://i.dummyjson.com/data/products/4/thumbnail.jpg" className="product-image" />
                <div className="banner-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h2 className="banner-title">Casual Collection</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.</p>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Carousel>

    )
}


