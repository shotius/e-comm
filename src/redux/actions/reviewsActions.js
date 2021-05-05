import axios from 'axios'
import {
    FETCH_REVIEW_START,
    FETCH_REVIEW_SUCCESS,
    FETCH_REVIEW_FAIL,
    ADD_REVIEW_START,
    ADD_REVIEW_SUCCESS,
    ADD_REVIEW_FAIL,
    UPDATE_REVIEW_START,
    UPDATE_REVIEW_SUCCESS,
    UPDATE_REVIEW_FAIL,
    DELETE_REVIEW_START,
    DELETE_REVIEW_SUCCESS,
    DELETE_REVIEW_FAIL
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

export const updateReview = (review) => {
    return dispatch => {
        dispatch(updateReviewStart())
        axios
            .put(`${process.env.REACT_APP_BASE_URL}/reviews/${review.id}`, review)
            .then(() => dispatch(updateReviewSuccess()))
            .catch(error => dispatch(updateReviewFail(error)))
    }
}

export const deleteReview = (id) => {
    return dispatch => {
        dispatch(deleteReviewStart())
        axios
            .delete(`${process.env.REACT_APP_BASE_URL}/reviews/${id}`)
            .then(() => dispatch(deleteReviewSuccess()))
            .catch(error => dispatch(deleteReviewError(error)))
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

// update
const updateReviewStart = () => ({
    type: UPDATE_REVIEW_START
})

const updateReviewSuccess = () => ({
    type: UPDATE_REVIEW_SUCCESS
})

const updateReviewFail = (error) => ({
    type: UPDATE_REVIEW_FAIL,
    error
}) 

// delete
const deleteReviewStart = () => ({
    type: DELETE_REVIEW_START
})

const deleteReviewSuccess = () => ({
    type: DELETE_REVIEW_SUCCESS
})

const deleteReviewError = (error) => ({
    type: DELETE_REVIEW_FAIL,
    error
})