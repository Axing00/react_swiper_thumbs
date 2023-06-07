/*eslint-disable*/
// Import Swiper React components
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/free-mode";
import "swiper/scss/navigation";
import "swiper/scss/thumbs";

import "./App.scss";

import { FreeMode, Navigation, Thumbs } from "swiper";

function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const imageList = [
    {
      url: "https://swiperjs.com/demos/images/nature-1.jpg",
      alt: "Nature 1",
    },
    {
      url: "https://swiperjs.com/demos/images/nature-2.jpg",
      alt: "Nature 2",
    },
    {
      url: "https://swiperjs.com/demos/images/nature-3.jpg",
      alt: "Nature 3",
    },
    {
      url: "https://swiperjs.com/demos/images/nature-4.jpg",
      alt: "Nature 4",
    },
    {
      url: "https://swiperjs.com/demos/images/nature-5.jpg",
      alt: "Nature 5",
    },
    {
      url: "https://swiperjs.com/demos/images/nature-6.jpg",
      alt: "Nature 6",
    },
    {
      url: "https://swiperjs.com/demos/images/nature-7.jpg",
      alt: "Nature 7",
    },
  ];

  const renderSlides = () => {
    return imageList.map((image, index) => (
      <SwiperSlide key={index}>
        <img src={image.url} alt={image.alt} />
      </SwiperSlide>
    ));
  };

  return (
    <div className="SwiperCont">
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper_thumbs"
      >
        {renderSlides()}
      </Swiper>
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper_content"
      >
        {renderSlides()}
      </Swiper>
    </div>
  );
}

export default App;
