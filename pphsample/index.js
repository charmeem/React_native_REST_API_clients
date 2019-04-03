import { EMAIL_CHANGED, PASS_CHANGED, LOGIN_SENT,
        LOGIN_SUCCESS, LOGIN_FAILED,ORDER_SUCCESS
        , STOCK_SUCCESS, PRODUCT_SUCCESS,  ORDER_FAILED,
        STOCK_FAILED, PRODUCT_FAILED} from './Types'
import {login, orders, stocks, products} from '../../api'



export const emailChanged =text => {
    // console.log(text)
    return {
        type: EMAIL_CHANGED,
        payload: text
    }
}

export const passChanged = text => {
    // console.log(text)
    return {
        type:PASS_CHANGED,
        payload:text
    }
}

// Async Action creator for OAUTH authentication
export const loginPressed = ({email, password}) => async dispatch => {

    dispatch({type: LOGIN_SENT})

    const json = await login(email, password)
    // console.log(json)
    if(json.token_type) {

        dispatch({type: LOGIN_SUCCESS, payload:json})
    }

        dispatch({type: LOGIN_FAILED, payload: json})
}


// Async Action creator for fetching orders
export const checkOrders = (auth) => async dispatch => {

    const json = await orders(auth)
    if(json.length) {
        dispatch ( {type: ORDER_SUCCESS, payload: json} )
    }
        dispatch ( {type: ORDER_FAILED, payload: json} )
    }



export const checkStocks = (auth) => async dispatch => {

    const json = await stocks(auth)
    if(json.length) {
        dispatch ( { type:STOCK_SUCCESS, payload:json })
    } else {
        dispatch({type: STOCK_FAILED, payload: json})
    }
}

export const checkProducts = (auth) => async dispatch => {
    const json = await products(auth)

    if(json.length) {
        dispatch ( { type:PRODUCT_SUCCESS, payload:json })
    }
        dispatch ( { type:PRODUCT_FAILED, payload:json})
}


// export const loginSuccess = (email,response) => {
//     // console.log(response)
//   return {
//       type:LOGIN_SUCCESS,
//       payload:{response }
//   }
// }


// export const orderSuccess = response => {
//     // console.log(response)
//     return {
//         type:ORDER_SUCCESS,
//         payload:{response}
//     }
// }

// export const stockSuccess = response => {
//     // console.log(response)
//    return {
//         type:STOCK_SUCCESS,
//         payload:{response}
//     }
// }

// export const productSuccess = response => {
//     // console.log(response)
//     return {
//         type:PRODUCT_SUCCESS,
//         payload:{response}
//     }
// }