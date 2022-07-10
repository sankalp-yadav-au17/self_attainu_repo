import { GET_USERS_FROM_API } from "./action";

const initialState = {
    users : []
}

export const allReducer = (state = initialState, action) => {

    if (action.type === GET_USERS_FROM_API){

        return {
            ...state,
            users: action.payload
        }
    }

    return state
}