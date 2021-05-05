import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import {
  LeftCircleOutlined,
  RightCircleOutlined
} from "@ant-design/icons"
import {Image} from "antd";
import "./index.css"

const onSlider = 3;

export default function ExtraImages({sliderData=[]}) {
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

  const nextSlide = () => {
    if (maxSlide <= 3)
      return
    if (curSlide === maxSlide - onSlider)
      setCurSlide(0)
    else
      setCurSlide(oldCurSlide => oldCurSlide + 1);
  }

  const prevSlide = () => {
    if (maxSlide <= 3)
      return
    if (curSlide === 0) {
      setCurSlide(maxSlide - onSlider);
    } else {
      setCurSlide(oldCurSlide => oldCurSlide - 1);
    }
  }

  return <div className="slider" ref={sliderRef}>
    <Image.PreviewGroup>
    {sliderData.map((slide, i) => {
      return (
        <div className="slide" style={{transform: `translate(${100 * i}%)`, width: `${100 / onSlider}%`}} key={slide.id}>
          {/*<img src={slide.img} alt=""/>*/}
          <Image height={80} src={slide.img} />
        </div>
      )
    })}
      </Image.PreviewGroup>
    {sliderData.length ? <>
    <button className="slider__btn slider__btn--left" onClick={prevSlide}>
      <LeftCircleOutlined/>
    </button>
    <button className="slider__btn slider__btn--right" onClick={nextSlide}>
      <RightCircleOutlined/>
    </button>
    </> : null}
  </div>

}