import React, {useState} from "react";
import {Button, Collapse, Slider} from "antd";
import "./index.css"
import {FilterOutlined} from "@ant-design/icons";
import {useDispatch} from "react-redux";
import {fetchProducts} from "../../../redux/actions/productsAction";
import {useHistory, useLocation, useParams} from "react-router-dom";

const {Panel} = Collapse;

const initialFilters = {
  price: [0, 5000]
}

const ProductsFilter = () => {
  const [price, setPrice] = useState([...initialFilters.price]);
  const dispatch = useDispatch();
  const history = useHistory();
  const currentLocation = useLocation().pathname;
  const {category} = useParams();


  const onPriceChange = (value) => {
    setPrice(value);
  }

  const handleApplyClick = () => {
    // url should be dynamic, now we have only price filter and it is not necessary
    history.push(`${currentLocation}?price_gt=${price[0]}&price_lt=${price[1]}`)
    // dispatch(fetchProducts(category, {price}))
  }

  const clearFields = () => {
    console.log('clearFields')
    // setPrice(initialFilters.price);
  }

  return <Collapse>
    <Panel
      className="filter-panel"
      header="Filters"
      key="1"
      extra={<FilterOutlined/>}>
      <div className="filter-price">
        <h3>Price</h3>
        <Slider
          range
          step={100}
          max={10000}
          defaultValue={price}
          onAfterChange={onPriceChange}
        />
      </div>
      <div className="filter-buttons">
        <Button type={"default"} onClick={clearFields}>
          Clear
        </Button>
        <Button type={"primary"} onClick={handleApplyClick}>
          Apply
        </Button>
      </div>
    </Panel>
  </Collapse>
}

export default ProductsFilter;