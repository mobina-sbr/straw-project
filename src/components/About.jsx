import React from 'react'
import drinkingStraw from '../images/vector-drinking-straws-realistic-illustration (1).png'

export default function About() {
    return (
        <>
            <div style={{ height: "150px", overflow: "hidden" }}><svg viewBox="0 0 500 150" preserveAspectRatio="none"
                style={{ height: "100%", width: "100%" }}>
                <path d="M-25.73,58.56 C150.00,149.60 339.95,13.28 500.00,49.85 L509.25,176.67 L-136.34,203.23 Z"
                    style={{ stroke: "none", fill: "#f4f4f4f5" }}></path>
            </svg>
            </div>
            <section id="aboutus" className="bg container-fluid">
                <div className="container bg-white rounded shadow">
                    <div className="row align-items-center">
                        <h3 className="color fw-bold pt-5 pe-5">درباره ما
                        <i className="bi bi-file-person me-2"></i>
                        </h3>
                        
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <p className="text-dark fs-5 ">
                                شرکت تولیدی نی نوشیدنی صابری در سال 1380 با مدیریت محمدحسین صابری تاسیس شد.
                                استراتژی ما برای داشتن اعتماد و رضایت مشتریان، استفاده از مواد اولیه باکیفیت بوده است. همچنین این مجموعه، به جهت نگه داشتن اعتماد مشتریان سعی در ثابت نگه داشتن قیمت محصولات داشته و هیچ زمان کیفیت محصولات و رضایت مشتریان را قربانی نواسانات بازار و سود بیشتر نکرده است.
                            </p>
                        </div>
                        <div className="col-lg-5">
                            <img src={drinkingStraw} className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <div style={{ height: "150px", overflow: "hidden" }}><svg viewBox="0 0 500 150" preserveAspectRatio="none"
                style={{ height: "100%", width: "100%" }}>
                <path d="M-0.00,49.85 C150.00,149.60 271.37,-49.85 500.00,49.85 L522.80,-31.98 L-33.63,-64.47 Z"
                    style={{ stroke: "none", fill: "#f4f4f4f5" }}></path>
            </svg>
            </div>
        </>
    )
}
