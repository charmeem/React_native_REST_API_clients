import {createStore, applyMiddleware} from 'redux'
import  thunk from 'redux-thunk'
import {addContact} from './actions'
 import reducer from './reducer'


const store = createStore(reducer,applyMiddleware(thunk))

/*
store.dispatch(updateUser({foo: 'foo'}))
store.dispatch(updateUser({bar: 'bar'}))
store.dispatch(updateUser({foo: 'baz'}))
*/

// store.dispatch(addContact({name: 'Mubashir Mufti', phone: '1234567890'}))
// store.dispatch(addContact({name: 'Munazza Mufti', phone: '1234567890'}))
// store.dispatch(addContact({name: 'Bachas Mufti', phone: '5050505050'}))

// console.log(store.getState())

export default store
