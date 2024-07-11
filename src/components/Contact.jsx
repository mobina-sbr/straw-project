import React from 'react'

export default function Contact() {
    return (
        <section id="contact" className="container-fluid mt-5 rounded pb-4 contact-bg">
            <div className="container">
                <div className="row align-items-center">
                    <h3 className="color fw-bold pt-5 pe-5">تماس با ما</h3>
                </div>
                <div className="row align-items-center mt-3">
                    <div className="col-lg-6 offset-1 ">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2699.292728156883!2d59.42544154243672!3d36.4329446071866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f6cf509b8f87f5d%3A0x22a0da518be8f13f!2sRazavi%20Khorasan%20Province%2C%20Mashhad%2C%20Toos%20Industrial%20Zone%20Rd%2C%20Iran!5e0!3m2!1sen!2s!4v1716453941085!5m2!1sen!2s"
                            width="650" height="350" style={{ border: "1px solid #9a9a9af5", height: "350px" }} allowfullscreen=""
                            loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="img-fluid rounded"></iframe>
                        {/* <iframe
                            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d803.6220507726887!2d59.525890269550125!3d36.32471607876613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzbCsDE5JzI5LjAiTiA1OcKwMzEnMzUuNSJF!5e0!3m2!1sen!2s!4v1692163998830!5m2!1sen!2s"
                            width="650" height="350" style={{ border: "1px solid #9a9a9af5", height: "350px" }} allowfullscreen=""
                            loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="img-fluid rounded">
                        </iframe> */}
                    </div>
                    <div className="col-lg-5 align-items-center">
                        <h4 className="color pb-3 mt-2">اطلاعات تماس</h4>
                        <p className="font-size"> <i className="bi bi-envelope color"></i> ایمیل: mobinasaberi@gmail.com </p>
                        <p className="font-size"> <i className="bi bi-telephone color"></i> شماره تماس: ۰۹۱۵۵۱۵۲۱۶۸ </p>
                        {/* <p className="font-size"> <i className="bi bi-telephone color"></i> واحد پشتیبانی: ۰۹۱۵۵۱۵۲۱۶۸ </p> */}
                        <p className="font-size"> <i className="bi bi-clock color"></i> ساعات کاری: از ۰۸ صبح الی ۲۰ </p>
                        <p className="font-size"> <i className="bi bi-geo-alt color"></i> آدرس:مشهد-شهرک صنعتی توس  </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
