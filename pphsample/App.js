import React, {Component} from 'react'
import {ImageBackground, View} from 'react-native'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import reducer from './src/reducers'
import LoginForm from './src/screens/LoginForm'
import orderList from './src/screens/orderList'
import MainScreen from './src/screens/MainScreen'
import stocksList from './src/screens/stocksList'
import productsList from './src/screens/productsList'
import {createSwitchNavigator, createStackNavigator, createTabNavigator} from 'react-navigation'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'




// const persistConfig = {
//     key: 'root',
//     storage,
// }

// const persistedReducer = persistReducer(persistConfig, reducer)

const MainStack = createStackNavigator(
    {
        front:MainScreen,
        orders:orderList,
        stock:stocksList,
        products:productsList,
    },
    {
        initialRouteName: 'front',
        // headerMode:'none',
        cardStyle:{
            backgroundColor:'transparent'
        },
        // Profile:{
        //     screen:MainScreen,
        //     navigationOptions:({navigation}) => ({
        //         backgroundColor:'red'
        //     }),
        // },
    },

)
// const MainTab = createTabNavigator(
//     {
//     Notification: {
//         screen: MainScreen,
//         navigationOptions: {
//             tabBarLabel:"Notification",
//             tabBarIcon: ({tintColor}) => (
//                 <View>
//                     <Icons type="material" name="notifications" color={tintColor} />
//                 </View>
//             )
//         },
//     },
// })
const AppNavigator = createSwitchNavigator(
    {
    login:LoginForm,
    main:MainStack,
    // main:MainTab,
    },
    {
        initialRouteName: 'login',
    },
)


export default class App extends React.Component {
  render (){
      const store = createStore(reducer, applyMiddleware(thunk))
      // const store = createStore(persistedReducer, applyMiddleware(thunk))
      // const persistor = persistStore(store)

    return (
        <ImageBackground
            style={{width: '100%', height: '100%'}}
            source={require('./assets/images/site3.jpg')}
        >
        <Provider store={ store }>
            {/*<PersistGate loading={null} persistor={persistor}>*/}
                <AppNavigator/>
            {/*</PersistGate>*/}
        </Provider>
        </ImageBackground>
    )
    }
}

