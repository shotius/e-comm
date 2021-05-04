import {
    FETCH_REVIEW_START,
    FETCH_REVIEW_SUCCESS,
    FETCH_REVIEW_FAIL,
    ADD_REVIEW_START,
    ADD_REVIEW_SUCCESS,
    ADD_REVIEW_FAIL,
} from '../constants'

const initState = {
    reviews: [],
    fetchReviewsLoading: false,
    fetchReviewsError: null
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
        case ADD_REVIEW_SUCCESS:
            // console.log(action.review, 'action review')
            return {
                ...state,
                reviews: state.reviews.concat(action.review)
            }
        default:
            return state

    }
}