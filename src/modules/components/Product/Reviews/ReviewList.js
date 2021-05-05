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
            <Card title="Reviews"> 
                { // if review are not empty display them 
                    reviews.length > 0
                    ? (
                        reviews.map((review) => (
                            <Review 
                                review={review} 
                                dispatch={dispatch}
                                user={user} 
                                key={review.id}/>
                        ))
                    )
                    : <div>No Reviews to show...</div>
                }
            </Card>
            <ReviewForm 
                dispatch={dispatch}
                prodId={product.id}
                userId={user.sub}
            />
        </>
    )
}
export default ProductReviews