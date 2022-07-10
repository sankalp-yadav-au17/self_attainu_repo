import axios from "axios"

export const GET_USERS_FROM_API = "GET_USERS_FROM_API"

export const getUsers = () => {
        

    return async (dispatch, getState) => {
        
        const response = await axios.get("https://fakestoreapi.com/products?limit=5")
    
        const allUsers = response.data
        
        dispatch({
            type: GET_USERS_FROM_API,
            payload: allUsers
        })
    }
}