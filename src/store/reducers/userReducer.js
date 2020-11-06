import { SET_USER } from "../Action";



const initState = {
    userName:'路人甲'
}

const userReducer = (state = initState,action) => {
    switch(action.type){
        case SET_USER:
            return{
                ...state,
                userName:action.preload

            }
        default:
            return state

    }

}

export default userReducer