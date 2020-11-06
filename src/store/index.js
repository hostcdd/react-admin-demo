import {createStore,combineReducers,applyMiddleware} from 'redux'; 
// import thunk from 'redux-thunk';
import userReducer from './reducers/userReducer'

let reducers = combineReducers({        //合并reducer
    userReducer,
   
})

const store = createStore(
    reducers,
    // applyMiddleware(thunk)      //异步使用action
)

export default store