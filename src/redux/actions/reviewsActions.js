import axios from 'axios'
import {
    FETCH_REVIEW_START,
    FETCH_REVIEW_SUCCESS,
    FETCH_REVIEW_FAIL
} from '../constants'

export const fetchReviews = (id) =>  {
    return dispatch => {
        dispatch(fetchReviewsStart())
        axios
            .get(`${process.env.REACT_APP_BASE_URL}/reviews?prodId=${id}`)
            .then(({data}) => {
                dispatch(fetchReviewsSuccess(data))
            })
            .catch(error => dispatch(fetchReviewsFail(error)))
    }
}

const fetchReviewsStart = () => ({
    type: FETCH_REVIEW_START
})

const fetchReviewsSuccess = (reviews) => ({
    type: FETCH_REVIEW_SUCCESS,
    reviews
})

const fetchReviewsFail = (error) => ({
    type: FETCH_REVIEW_FAIL,
    error
})