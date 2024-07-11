import React from 'react'
import Button from '../components/Button';
import straw1 from '../images/Simple-drinking-straw-768x768.webp'
import straw2 from "../images/folding-soft-drink-straw-768x768.webp"
import straw3 from '../images/straw-6-768x768.webp'
import straw4 from '../images/straw-768x768.webp'


export default function Photo() {
  return (
    <section className="container py-5 shadow bg rounded mt-2">
        <div className="row align-items-center">
          <div className="col-lg-3 ">
            <img src={straw1} alt="" className="img-fluid rounded mt-1 hover-photo" />
          </div>
          <div className="col-lg-3 ">
            <img src={straw2} alt="" className="img-fluid rounded mt-1 hover-photo" />
          </div>
          <div className="col-lg-3 ">
            <img src={straw3} alt="" className="img-fluid rounded mt-1 hover-photo" />
          </div>
          <div className="col-lg-3 ">
            <img src={straw4} alt="" className="img-fluid rounded mt-1 hover-photo" />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 text-center">
            <Button textButton={"مشاهده لیست محصولات"} />
          </div>
        </div>
      </section>
  )
}
