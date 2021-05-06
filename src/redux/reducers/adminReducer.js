import {
    DELETE_USER_SUCCESS,
    GET_USERS_SUCCESS
} from '../constants'

const initState = {
    users: [],
}

export default function adminReducer(state=initState, action) {
    switch(action.type){
        case DELETE_USER_SUCCESS:
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.id)
            }
        case GET_USERS_SUCCESS:
            return {
                ...state,
                users: action.users
            }
        default: 
            return state
    }
}