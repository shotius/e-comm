import React, {useEffect} from 'react'
import { Col } from "antd"
import SelectedItems from './SelectedItems'
import CheckOutCard from './CheckOutCard'
import { useDispatch, useSelector } from "react-redux";
import { fetchBasketProducts } from "../../../redux/actions/basketActions";


const Basket = () => {
    const basketProducts = useSelector((state) => state.basketReducer.products);
    const userId = useSelector((state) => state.authReducer.user.sub)
    const dispatch = useDispatch();

    // to get products on the Basket page we need to fetch it from db
    useEffect(() => {
        dispatch(fetchBasketProducts(userId));
    }, [dispatch]);
    
    return (
        <>
            <Col xs={24} md={24} lg={16}>
                <SelectedItems basketProducts={basketProducts} />
            </Col>
            <Col xs={24} md={24} lg={6}>
                <CheckOutCard basketProducts={basketProducts}/>
            </Col>
        </>
    )
}
export default Basket