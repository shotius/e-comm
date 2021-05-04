import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import {
  LeftCircleOutlined,
  RightCircleOutlined
} from "@ant-design/icons"
import "./index.css"

const sliderData = [
  {
    img: "https://wowslider.com/sliders/demo-18/data1/images/shanghai.jpg",
    id: 1
  },
  {
    img: "https://alfaplusgo.com/assets/images/slides/1601007464.jpg",
    id: 2
  },
  {
    img: "http://wowslider.com/sliders/demo-18/data1/images/shanghai.jpg",
    id: 4
  },
  {
    img: "http://wowslider.com/sliders/demo-18/data1/images/shanghai.jpg",
    id: 5
  },
  {
    img: "http://wowslider.com/sliders/demo-18/data1/images/shanghai.jpg",
    id: 6
  }
]

const onSlider = 3;

export default function ExtraImages() {
  const sliderRef = useRef(null);
  const [curSlide, setCurSlide] = useState(0);
  const [maxSlide, setMaxSlide] = useState(sliderData.length);
  const [slides, setSlides] = useState(null);

  useEffect(() => {
    if (!slides) {
      setSlides(sliderRef.current.querySelectorAll('.slide'));
    } else {
      slides.forEach(
        (s, i) => (s.style.transform = `translateX(${100 * (i - curSlide)}%)`)
      );
    }

  }, [curSlide])

  const goToSlide = ()  => {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - curSlide)}%)`)
    );
  };

  const nextSlide = () => {
    if (curSlide === maxSlide - onSlider)
      setCurSlide(0)
    else
      setCurSlide(oldCurSlide => oldCurSlide + 1);
  }

  const prevSlide = () => {
    if (curSlide === 0) {
      setCurSlide(maxSlide - onSlider);
    } else {
      setCurSlide(oldCurSlide => oldCurSlide - 1);
    }
  }

  return <div className="slider" ref={sliderRef}>
    {sliderData.map((slide, i) => {
      return (
        <div className="slide" style={{transform: `translate(${100 * i}%)`, width: `${100 / onSlider}%`}} key={slide.id}>
          <img src={slide.img} alt=""/>
        </div>
      )
    })}
    <button className="slider__btn slider__btn--left" onClick={prevSlide}>
      <LeftCircleOutlined/>
    </button>
    <button className="slider__btn slider__btn--right" onClick={nextSlide}>
      <RightCircleOutlined/>
    </button>
  </div>

}