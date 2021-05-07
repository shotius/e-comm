import React, {useEffect, useState} from "react"
import {Pagination} from "antd";
import {useHistory, useLocation, useParams} from "react-router-dom";
import "./index.css"

function PagePagination(props) {
  const [current, setCurrent] = useState(1);
  const history = useHistory();
  const location = useLocation();
  const {category} = useParams();


  const onChange = (value) => {
    setCurrent(value);
  }

  useEffect(() => {
    // user is on category page e.g /products/laptops and want to navigate to the next page
    if (location.pathname.includes('/page/')){
      history.push(`/products/${category}/page/${current}${location.search}`)
    } else { // user is on main page
      history.push(`/products/${current}`);
    }
  }, [current])

  return <div className="pagination">
    <Pagination
      defaultCurrent={1}
      current={current}
      onChange={onChange}
      total={props.total}
    />
  </div>
}

function areEqual(prevProps, nextProps) {
  return prevProps === nextProps;
}

export default React.memo(PagePagination, areEqual);