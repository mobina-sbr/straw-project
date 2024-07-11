import React from 'react'

import logo from '../images/DRINK_STRAW-removebg.png'
export default function Footer() {
  return (
    <footer className=" footer container-fluid  align-items-center">
        <div className="row align-items-center px-5">
            <div className="col-lg-4 mt-3 border-bottom">
                <h4>شبکه‌های اجتماعی</h4>
                <div className="mt-2">
                    <a href="#"><i style={{color: "#229ED9"}} className="bi bi-telegram fs-4"></i></a>
                    <a href="#"><i style={{color: "#25D366"}} className="bi bi-whatsapp mx-3 fs-4"></i></a>
                    <a href="#"><i style={{color: "#4c68d7"}} className="bi bi-instagram fs-4"></i></a>
                    <a href="#"><i style={{color: "#212a2c"}} className="bi bi-envelope fs-4 me-3"></i></a>
                </div>
            </div>
            <div className="col-lg-4 mt-3 border-bottom">
                <ul>
                    <li><a href="https://strawsaberi.podmart.ir/" className="a-footer">محصولات</a></li>
                    <li><a href="#" className="a-footer">مقالات</a></li>
                </ul>
            </div>
            <div className="col-lg-4">
                <img src={logo} alt="" className="img-fluid" width="300px" height="300px"/>
            </div>
        </div>
        <div className="row bg-dark">
            <div className="col-12">
                <p className="text-secondary text-center mt-2">کلیه حقوق این وبسایت متعلق به شرکت تولید نی نوشیدنی صابری است</p>
            </div>
        </div>
    </footer>
  )
}
