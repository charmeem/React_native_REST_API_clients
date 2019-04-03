import {ORDER_SUCCESS, STOCK_SUCCESS, PRODUCT_SUCCESS,
ORDER_FAILED, STOCK_FAILED, PRODUCT_FAILED} from "../actions/Types";

const INITIAL_STATE = {
    ordered_by:'',
    stock_detail:'',
    product_detail:'',
    loginErr:'',
}
const shop = (state = INITIAL_STATE, action) =>  {
    // console.log(action.payload)
    switch (action.type) {
        case ORDER_SUCCESS:
            return {...state,
            ordered_by:action.payload.reverse()
            }

        case STOCK_SUCCESS:
            return {...state,
                stock_detail:action.payload.reverse()
            }

        case PRODUCT_SUCCESS:
            return {...state,
                product_detail:action.payload.reverse()
            }

        case ORDER_FAILED:
            return { ...state, loginErr:action.payload}

        case STOCK_FAILED:
            return { ...state, loginErr:action.payload}

        case PRODUCT_FAILED:
            return { ...state, loginErr:action.payload}

        default:
            return state
    }
}

export default shop