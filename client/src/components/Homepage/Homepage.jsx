import React, { useState } from 'react'
import Header from '../Header/Header'
import './Homepage.scss'
import ProductSlider from '../ProductSlider/ProductSlider'

function Homepage() {
    return (
        <>
            <Header />
            <main>
                <section className="banner">
                    <div className="container">
                        <div className="row pt-5 align-items-center">
                            <div className="col-5">
                                <div className="banner-img">
                                    <img src="https://preview.colorlib.com/theme/aroma/img/home/xhero-banner.png.pagespeed.ic.Da3KtaVoQv.webp" alt="" />
                                </div>
                            </div>
                            <div className="col-sm-7 col-lg-6 offset-lg-1">
                                    <h4>Shop is fun</h4>
                                    <h1 className="">BROWSE OUR PREMIUM PRODUCT</h1>
                                    <p>Us which over of signs divide dominion deep fill bring they're meat beho upon own earth without morning over third. Their male dry. They are great appear whose land fly grass.</p>
                                    <a href="/" className="btn btn-primary">Browse Now</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="container-fluid px-0">
                        <ProductSlider />
                    </div>
                </section>
            </main>
        </>
    )
}

export default Homepage
