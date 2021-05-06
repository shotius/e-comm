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
    DELETE_REVIEW_FAIL,
    TOGGLE_EDIT_SUCCESS,
    TOGGLE_EDIT_FAIL
} from '../constants'

const initState = {
    reviews: [],
    fetchReviewsLoading: false,
    addReviewLoading: false,
    updateReviewLoading: false,
    deleteReviewLoading: false,
    fetchReviewsError: null,
    addReviewError: null,
    updateReviewError: null,
    deleteReviewError: null,
    toggleEditModeError: null
}

export default function reviewsReducer(state=initState, action) {
    switch(action.type) {
        case FETCH_REVIEW_START:
            return {
                ...state,
                fetchReviewsLoading: true,
                fetchReviewsError: null
            }
        case FETCH_REVIEW_SUCCESS:
            return {
                ...state,
                fetchReviewsLoading: false,
                fetchReviewsError:null,
                reviews: action.reviews
            }
        case FETCH_REVIEW_FAIL:
            return {
                ...state,
                fetchReviewsError: action.error,
                fetchReviewsLoading: false
            }
        case ADD_REVIEW_START:
            return {
                ...state,
                addReviewLoading: true,
                addReviewError: null
            }
        case ADD_REVIEW_SUCCESS:
            return {
                ...state,
                reviews: state.reviews.concat(action.review),
                addReviewLoading: false,
                addReviewError: null
            }
        case ADD_REVIEW_FAIL:
            return {
                ...state,
                addReviewError: action.error,
                addReviewLoading: false
            }
        case UPDATE_REVIEW_START: 
            return {
                ...state,
                updateReviewError: null,
                updateReviewloading: true
            }
        case UPDATE_REVIEW_SUCCESS:
            // console.log("update red", action.newReview)
            return {
                ...state, 
                reviews: state.reviews.map(review => {
                    if (review.id === action.newReview.id) {
                        return action.newReview
                    } 
                    return review
                }),
                updateReviewLoading: false,
                updateReviewError: null
            }
        case UPDATE_REVIEW_FAIL:
            return {
                ...state,
                updateReviewLoading: false,
                updateReviewError: action.error
            }
        case DELETE_REVIEW_START:
            return {
                ...state,
                deleteReviewLoading: true,
                deleteReviewError: null
            }
        case DELETE_REVIEW_SUCCESS:
            return {
                ...state,
                reviews: state.reviews.filter(review => review.id !== action.reviewId),
                deleteReviewLoading: false,
                deleteReviewError: null
            }
        case DELETE_REVIEW_FAIL:
            return {
                ...state,
                deleteReviewLoading: false,
                deleteReviewError: action.error
            }
        case TOGGLE_EDIT_SUCCESS:
            return {
                ...state,
                reviews: state.reviews.map(review => {
                    if (review.id === action.newReview.id) {
                        return action.newReview
                    } 
                    return review
                }),
                toggleEditModeError: null
            }
        case TOGGLE_EDIT_FAIL:
            return {
                ...state,
                toggleEditModeError: action.error
            }
        default:
            return state

    }
}