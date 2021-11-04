import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './ProductSlider.scss'

function ProductSlider() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        arrows: false
    }

    return (
        <Slider {...settings}>
            <div className="slider-item">
                <div className="me-2">
                    <img src="https://preview.colorlib.com/theme/aroma/img/home/xhero-slide1.png.pagespeed.ic.KZViXlyXiG.webp" alt="" />
                </div>
                <a href="/" className="slider-info">
                    <h4>Wireless Headphone</h4>
                    <p>Accessories Item</p>
                </a>
            </div>
            <div className="slider-item">
                <div className="me-2">
                    <img src="https://preview.colorlib.com/theme/aroma/img/home/xhero-slide2.png.pagespeed.ic.je2nitqAw1.webp" alt="" />
                </div>
                <a href="/" className="slider-info">
                    <h4>Wireless Headphone</h4>
                    <p>Accessories Item</p>
                </a>
            </div>
            <div className="slider-item">
                <div className="me-2">
                    <img src="https://preview.colorlib.com/theme/aroma/img/home/xhero-slide3.png.pagespeed.ic.jjMnTdDbyV.webp" alt="" />
                </div>
                <a href="/" className="slider-info">
                    <h4>Wireless Headphone</h4>
                    <p>Accessories Item</p>
                </a>
            </div>
            <div className="slider-item">
                <div className="me-2">
                    <img src="https://preview.colorlib.com/theme/aroma/img/home/xhero-slide1.png.pagespeed.ic.KZViXlyXiG.webp" alt="" />
                </div>
                <a href="/" className="slider-info">
                    <h4>Wireless Headphone</h4>
                    <p>Accessories Item</p>
                </a>
            </div>
            <div className="slider-item">
                <div className="me-2">
                    <img src="https://preview.colorlib.com/theme/aroma/img/home/xhero-slide2.png.pagespeed.ic.je2nitqAw1.webp" alt="" />
                </div>
                <a href="/" className="slider-info">
                    <h4>Wireless Headphone</h4>
                    <p>Accessories Item</p>
                </a>
            </div>
            <div className="slider-item">
                <div className="me-2">
                    <img src="https://preview.colorlib.com/theme/aroma/img/home/xhero-slide3.png.pagespeed.ic.jjMnTdDbyV.webp" alt="" />
                </div>
                <a href="/" className="slider-info">
                    <h4>Wireless Headphone</h4>
                    <p>Accessories Item</p>
                </a>
            </div>
        </Slider>
    )
}

export default ProductSlider
