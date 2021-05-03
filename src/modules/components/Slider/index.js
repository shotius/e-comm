import React, {useRef} from "react";
import {Carousel} from "antd";
import {carouselData} from "../../../const/carouselData";
import {Link} from "react-router-dom";
import {LeftCircleFilled, RightCircleFilled} from "@ant-design/icons";
import "./index.css"

const Slider = () => {
  const carouselRef = useRef(null);

  return <div className="products-carousel">
    <button className="carousel-left" onClick={() => carouselRef.current.prev()}><LeftCircleFilled className="carousel-icon" /></button>
    <button className="carousel-right" onClick={() => carouselRef.current.next()}><RightCircleFilled className="carousel-icon" /></button>
    <Carousel autoplay ref={carouselRef} draggable={true}>
      {carouselData.map((slider, i) => <div key={i}>
          <Link to={slider.link}><h3 style={{
            height: '350px',
            color: '#fff',
            lineHeight: '200px',
            textAlign: 'center',
            marginBottom: "0",
            background: `url("${slider.background}") no-repeat center center/cover`
          }}/></Link>
        </div>
      )}
    </Carousel>
  </div>
}

    export default Slider;