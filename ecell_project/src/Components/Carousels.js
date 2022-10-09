import React from "react";
// import Carousel from 'react-bootstrap/Carousel';
// import "bootstrap/dist/css/bootstrap.css";
import "./Carousel.css"
import Carousel from 'react-bootstrap/Carousel';
// import Button from 'react-bootstrap/Button';
import image from "./image1.jpg";
const Carousels = () => {
  return (
    <section>
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={image} className="d-block h-100" alt={image}/>
    </div>
    <div className="carousel-item">
      <img src={image} className="d-block h-100" alt={image}/>
    </div>
    <div className="carousel-item">
      <img src={image} className="d-block h-100" alt={image}/>
    </div>
    <div className="carousel-item">
      <img src={image} className="d-block h-100" alt={image}/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </section>
  );
};

export default Carousels;
