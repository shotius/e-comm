import axios from 'axios'
import {
    FETCH_REVIEW_START,
    FETCH_REVIEW_SUCCESS,
    FETCH_REVIEW_FAIL,
    ADD_REVIEW_START,
    ADD_REVIEW_SUCCESS,
    ADD_REVIEW_FAIL,
    
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

export const addReview = (review) => {
    return dispatch => {
        dispatch(addReviewStart())
        axios
            .post(`${process.env.REACT_APP_BASE_URL}/reviews`, review)
            .then(({data}) => {
                dispatch(addReviewSuccess(data))
            })
            .catch(error => dispatch(addReviewFail(error)))
    }
}

// fetch
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

// add

const addReviewStart = () => ({
    type: ADD_REVIEW_START
})

const addReviewSuccess = (review) => ({
    type: ADD_REVIEW_SUCCESS,
    review
})

const addReviewFail = (error) => ({
    type: ADD_REVIEW_FAIL,
    error
})