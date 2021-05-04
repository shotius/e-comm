import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {deleteBasketItem, deleteProduct} from '../../../redux/actions/basketActions'
import {Button, Col, Row, Card} from 'antd'
import {MinusOutlined, PlusOutlined} from '@ant-design/icons'
import './index.css'

// this component renders single product cart in the basket
const Product = ({item}) => {
  const dispatch = useDispatch()

  const [quantity, setQuantity] = useState(1)
  const [descriptionShown, setDescriptionShown] = useState(false)

  const removeItemFrombasket = () => {
    dispatch(deleteBasketItem(item))
  }

  // if items quantity equals to one remove the item else substruct from items list
  const Minus = () => {
    quantity === 1 ? removeItemFrombasket() : setQuantity(quantity - 1)
  }

  // need to check if item is the stock
  const Plus = () => setQuantity(quantity + 1)

  return (
    <Card className="product-card" style={{boxShadow: "0 3px 15px rgba(0,0,0,.2)"}}>
      <Row className="cart-content" gutter={{xs: 8, sm: 16, md: 24, lg: 32}} style={{marginBottom: "10px"}}>
        <Col span={24}>
          <h2 style={{textTransform: "capitalize"}}>{item.title}</h2></Col>
        <Col xs={16} sm={8} md={6} lg={5} className="col1">
          <img src={item.image} className="image" alt="product pic"/>
        </Col>
        <Col xs={24} sm={14} md={12} lg={12}>
          <p><strong>Brand:</strong> {item.brand}</p>
          <h3>Description</h3>
          {/* <div onClick={() => setDescriptionShown(!descriptionShown)}>
                        { descriptionShown 
                            ? <div dangerouslySetInnerHTML={{__html: item.description}} />
                            : <div dangerouslySetInnerHTML={{__html: String(item.description).substr(0,10)}} />
                        }
                    </div> */}
          <div className={`${descriptionShown ? '' : 'description'}`}>
            <div dangerouslySetInnerHTML={{__html: item.description}}/>
          </div>
          <Button onClick={() => setDescriptionShown(!descriptionShown)}>
            {descriptionShown ? 'click for less' : 'click for more'}
          </Button>
        </Col>
        <Col xs={24} md={6} lg={7} className="col3">
          <div className="quant">
            <Button onClick={Minus}><MinusOutlined/></Button>
            <span className="quantity">{quantity}</span>
            <Button onClick={Plus}><PlusOutlined/></Button>
          </div>

          <h2 className="price">${item.price}</h2>
          <p>
            <b>shipping:</b> {item.shipping}
          </p>
        </Col>
      </Row>
    </Card>
  )
}
export default Product