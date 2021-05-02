import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchProducts } from '../../../redux/actions/productsAction'
import ProductsList from './ProductsList'

const SearchResult = () => {
    const dispatch = useDispatch()
    const { keyword } = useParams()
    const allProducts = useSelector(state => state.productsReducer.products)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

   // search if product name includes keyword
    const search = (products) => {
        return products.filter((product) => (
                product['title'].toString().toLowerCase().indexOf(keyword.toLowerCase()) > -1
        ))
    }

    return (
        <>
            <ProductsList products={search(allProducts)} />
        </>
    )
}
export default SearchResult