import React, {useCallback, useRef, useState} from "react";
import {Carousel} from "antd";
import {carouselData} from "../../../const/carouselData";
import {Link} from "react-router-dom";
import {LeftCircleFilled, RightCircleFilled} from "@ant-design/icons";
import "./index.css"

const Slider = () => {
  const [dragging, setDragging] = useState(false);
  const carouselRef = useRef(null);

  const handleBeforeChange = useCallback(() => {
    setDragging(true)
  }, [])

  const handleAfterChange = useCallback(() => {
    setDragging(false);
  }, [])

  const handleOnItemClick = useCallback((e) => {
    // if user is dragging slider, <Link> component won't  be fired automatically
    if(dragging) {
      e.preventDefault();
    }
  }, [dragging])

  return <div className="products-carousel">
    <button className="carousel-left" onClick={() => carouselRef.current.prev()}><LeftCircleFilled className="carousel-icon" /></button>
    <button className="carousel-right" onClick={() => carouselRef.current.next()}><RightCircleFilled className="carousel-icon" /></button>
    <Carousel
      autoplay
      ref={carouselRef}
      draggable={true}
      beforeChange={handleBeforeChange}
      afterChange={handleAfterChange}
    >
      {carouselData.map((slider, i) => <div key={i}>
          <Link
            to={slider.link}
            onClickCapture={handleOnItemClick}
          ><h3 style={{
            height: '350px',
            color: '#fff',
            lineHeight: '200px',
            textAlign: 'center',
            marginBottom: "0",
            background: `url("${slider.background}") no-repeat center center/cover`
          }}>{null}</h3></Link>
        </div>
      )}
    </Carousel>
  </div>
}

    export default Slider;