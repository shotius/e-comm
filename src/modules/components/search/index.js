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

    // fill go through all products 
    // and search if it includes search keyword
    // in the whole prodduct object 
    const search = (products) => {
        // keys from all products to iterate through each object in an array
        const keys = products[0] && Object.keys(products[0])
        // filter product checking all values by keys.some function
        return products.filter((product) => (
            keys.some(
                (key) => product[key].toString().toLowerCase().indexOf(keyword.toLowerCase()) > -1
            )
        ))
    }

    return (
        <>
            <ProductsList products={search(allProducts)} />
        </>
    )
}
export default SearchResult