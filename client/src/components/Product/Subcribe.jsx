function Subcribe() {
    return (
        <section className="subscribe">
            <div className="container">
                <div className="subscribe-container text-center">
                    <h3 className="subscribe-title text-uppercase mb-3">GET UPDATE FROM ANYWHERE</h3>
                    <p className="mb-3">Bearing Void gathering light light his eavening unto dont afraid</p>
                    <form className="mt-5 pt-1">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-sm-6 col-lg-3">
                                <input type="email" placeholder="Your Email Address"
                                    className="input-subscribe rounded-pill form-control mb-3 h-100 py-2 px-3"/>
                            </div>
                            <div className="col-auto">
                                <button className="btn rounded-pill mb-3">Subscribe Now</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Subcribe;