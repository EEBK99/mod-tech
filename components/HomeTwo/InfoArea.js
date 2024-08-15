import React from 'react';
import Link from 'next/link';

const InfoArea = () => {
    return (
        <div className="info-area pt-100 pb-70 pb-70 bg-color">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-info">
                            <div className="info-img">
                                <img src="/images/info-1.jpg" alt="info" />
                            </div>
                            <div className="content">
                                <h3><i className="flaticon-info"></i> About Us</h3>
                                <div className="arrow">
                                    <Link href="/about-us">
                                        <a>
                                            <i className="flaticon-next-1"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-info">
                            <div className="info-img">
                                <img src="/images/info-2.jpg" alt="info" />
                            </div>
                            <div className="content">
                                <h3><i className="flaticon-support"></i> Our Vision</h3>
                                <div className="arrow">
                                    <Link href="/about-us">
                                        <a>
                                            <i className="flaticon-next-1"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-info si-30">
                            <div className="info-img">
                                <img src="/images/info-3.jpg" alt="info" />
                            </div>
                            <div className="content">
                                <h3><i className="flaticon-goal"></i>Our Goal</h3>
                                <div className="arrow">
                                    <Link href="/about-us">
                                        <a>
                                            <i className="flaticon-next-1"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoArea;