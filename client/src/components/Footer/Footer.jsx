import React from 'react';
import { NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Footer.scss';
function Footer() {
    return (
        <div className="footer dark-blue">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 p-3">
                        <h3>About us</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium maiores dolorem pariatur soluta natus odio. Deleniti id tenetur temporibus repudiandae, consequuntur ullam nobis modi fuga at, mollitia dolore accusantium amet.</p>
                    </div>
                    <div className="offset-lg-1 col-lg-2 col-md-6 p-3">
                        <h3>Link</h3>
                        <a href="/">Home</a>
                        <a href="/shop">Shop</a>
                        <a href="/product">Product</a>
                        <a href="/brand">Brand</a>
                        <a href="/contact">Contact</a>
                    </div>
                    <div className="col-lg-2 col-md-6 p-3">
                        <h3>Gallery</h3>
                        <ul className="image d-flex flex-wrap">
                            <li className="bg-light m-1"></li>
                            <li className="bg-light m-1"></li>
                            <li className="bg-light m-1"></li>
                            <li className="bg-light m-1"></li>
                            <li className="bg-light m-1"></li>
                            <li className="bg-light m-1"></li>
                        </ul>
                    </div>
                    <div className="offset-lg-1 col-lg-3 col-md-6 p-3">
                        <h3>Contact Us</h3>
                        <div className="row mb-2">
                            <h5>Phone Number</h5>
                            <p>+123456789</p>
                            <p>+123456789</p>
                        </div>
                        <div className="row mb-2">
                            <h5>Github</h5>
                            <p>github.com</p>
                        </div>
                        <div className="row"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;