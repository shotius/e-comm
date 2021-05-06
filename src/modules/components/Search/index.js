import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import {fetchProducts} from '../../../redux/actions/productsAction'
import ProductsList from './ProductsList'
import {useQuery} from "../../../hooks/useQuery";

const SearchResult = () => {
  const dispatch = useDispatch()
  const {keyword} = useParams()
  const allProducts = useSelector(state => state.productsReducer.products)
  const query = useQuery();

  useEffect(() => {
    console.log('saerch component');
    let filters = {}
    for (const i of query.keys())
      filters[i] = query.get(i);
    dispatch(fetchProducts("", filters))
  }, [query.toString()])


  // Search if product name includes keyword
  const search = (products) => {
    return products.filter((product) => (
      product['title'].toString().toLowerCase().indexOf(keyword.toLowerCase()) > -1
    ))
  }

  return (
    <>
      <ProductsList products={search(allProducts)}/>
    </>
  )
}
export default SearchResult