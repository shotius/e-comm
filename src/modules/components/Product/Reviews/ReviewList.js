import React, { useEffect } from 'react'
import Review from './Review'
import { fetchReviews } from '../../../../redux/actions/reviewsActions'
import { Card } from 'antd'
import ReviewForm from './ReviewForm'
import ReactQuill from 'react-quill'

const ProductReviews = ({ dispatch, useSelector, user, product}) => {
    const reviews = useSelector(state => state.reviewsReducer.reviews)

    useEffect(() => {
        dispatch(fetchReviews(product.id))
    }, [])

    return (
        <>
            <Card title="Review"> 
                {
                    reviews.map((review) => (
                        <Review review={review} user={user} key={review.id}/>
                    ))
                }
            </Card>
            <ReviewForm />
        </>
    )
}
export default ProductReviews