import React, { useState } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ProductDetail.scss';

import axios from 'axios';

function ProductDetail() {
    return (
        <div className="detail my-5">
            <div className="container product">
                <div className="row">
                    <div className="col-md-6">
                        <Carousel variant="dark">
                            <Carousel.Item interval={2000}>
                                <img
                                    className="d-block w-100"
                                    src="https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/440749/item/vngoods_00_440749.jpg?width=1600&impolicy=quality_75"
                                    alt=""
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img
                                    className="d-block w-100"
                                    src="https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/440749/sub/goods_440749_sub9.jpg?width=1600&impolicy=quality_75"
                                    alt=""
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img
                                    className="d-block w-100"
                                    src="https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/440749/sub/vngoods_440749_sub6.jpg?width=1600&impolicy=quality_75"
                                    alt=""
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="col-md-5 offset-lg-1 mt-5">
                        <h3><b>Áo thun cổ tròn</b></h3>
                        <h4 className="product-price">490.000 <b>đ</b></h4>
                        <p className="mb-1">Category: <span>Áo</span></p>
                        <p>Availability: <span>In Stock</span></p>
                        <p className="product-desc my-5">Áo thun tròn cổ rộng không tay</p>
                        <form className="row">
                            <div className="form-group row col-md-6">
                                <label className="col-md-5 col-form-label" htmlFor="">Quantity</label>
                                <div className="col-md-5">
                                    <input className="form-control" type="number" min="1" />
                                </div>
                            </div>
                            <div className="col-md-5">
                                <button className="btn" type="submit">Add to cart</button>
                            </div>
                        </form>
                        <div className="mt-4">
                            <a href="#" className="product-icon mx-3"><i className="far fa-gem"></i></a>
                            <a href="#" className="product-icon"><i className="far fa-heart"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail;