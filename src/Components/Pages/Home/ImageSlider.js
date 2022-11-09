import React from "react";

const ImageSlider = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/JFRbYtS/sea-3243357-1920.jpg"
          className="w-full h-[600px] object-cover"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide6" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/mChPkHz/slider3.jpg"
          className="w-full h-[600px] object-cover"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/kX7pbdS/bangladesh-3554170-1920.jpg"
          className="w-full h-[600px] object-cover"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/bd3qr94/bangladesh-1838529-1920.jpg"
          className="w-full h-[600px] object-cover"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide5" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide5" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/gwkwCH9/bangladesh-476308-1920.jpg"
          className="w-full h-[600px] object-cover"
        />

        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide6" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide6" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/9vCkKc0/bangladesh-3535023-1920.jpg"
          className="w-full object-cover h-[600px]"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide5" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
