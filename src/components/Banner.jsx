import React from 'react'
import Button from '../components/Button';
import logo from '../images/DRINK_STRAW-removebg.png'


export default function Banner() {
    return (
        <>
            <section className="container-fluid bg-str pt-5 ">
                <div>
                    <div className="row ">
                        <div className="col-md-6 ">
                            <h2 className="bigest fw-bold mt-5 ">بزرگ‌ترین کارخانه <br />تولید نی نوشیدنی در مشهد</h2>
                            <h1 className="bigest redius-text p-3 fw-bold mt-5 "> تنها تولید کننده نی <span className='text-banner fs-1'>دو ی پک <br /></span> در سراسر کشور !</h1>
                            <div className="mt-5 align-items-center text-center">
                                <h5 className=" bigest">هر کجای دنیا که هستی،همین الان سفارشت‌رو ثبت کن</h5>
                                <Button textButton={"مشاهده محصولات و ثبت سفارش"} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src={logo} className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <div style={{ height: "150px", overflow: "hidden" }}><svg viewBox="0 0 500 150" preserveAspectRatio="none"
                style={{ height: "100%", width: "100%" }}>
                <path d="M-0.00,49.85 C88.82,190.44 271.37,-49.85 500.00,49.85 L500.00,-0.00 L-0.00,-0.00 Z"
                    style={{ stroke: "none", fill: "#f4f4f4f5" }}></path>
            </svg>
            </div>
        </>
    )
}
