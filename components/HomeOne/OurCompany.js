import React from 'react';
import Link from 'next/link';

const OurCompany = () => {
    return (
        <div className="home-company-area bg-color">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="company-content">
                            <div className="company-tittle">
                                <span>Our Company</span>
                                <h2>Innovative It Helping Service All Over the World</h2>

                                <p>It is a long established fact that a reader will be distracted by the rea dable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more or less normal distribution of letters, as opposed to using Content here,content here normal distribution looking at its.</p>
                            
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form variations passages.</p>
                            </div>

                            <Link href="/about-us">
                                <a className="box-btn">
                                    Know More
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="company-img">
                            <img src="/images/company-img.jpg" alt="company" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurCompany;