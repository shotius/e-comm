import React, {useEffect, useState} from "react"
import {Pagination} from "antd";
import {useHistory} from "react-router-dom";
import "./index.css"
function PagePagination(props) {
  const [current, setCurrent] = useState(1);
  const history = useHistory();

  const onChange = (value) => {
    setCurrent(value);
  }

  useEffect(() => {
    history.push(`/products/${current}`);
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