import React from 'react'
import ItemsNav from '../components/ItemsNav';
import lastname from '../images/DRINK_STRAW-removebg11.png'
// import strawsb from '../images/1715002896.172taw-bio_ir.jpg_prev_ui.png'

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg shadow navbar-light" id="nav">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon">
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <ItemsNav path={"https://strawsaberi.podmart.ir/"} itemNav={"محصولات"} />
              <ItemsNav path={"#aboutus"} itemNav={"درباره‌ما"} />
              <ItemsNav path={"#contact"} itemNav={"تماس‌ باما"} />
            </ul>
          </div>
        </div>
        {/* <div className="mt-2 ps-4">
          <a href="#">
            <img src={lastname} alt="" className="img-fluid" width="200px" height="50px"/>
          </a>
        </div> */}
      </nav>
  )
}
