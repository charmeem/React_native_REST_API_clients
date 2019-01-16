import React from 'react'
import {createSwitchNavigator} from 'react-navigation'
import {Button, View} from 'react-native'

class ScreenComponentOne extends React.Component {
    render(){
        return (
            <View style={{
                flex:1,
                alignItems:'center',
                justifyContent:'center',
                borderWidth:25,
                borderColor:'teal'
            }}>
                <Button title="Go to screen two" onPress={()=>{
                    this.props.navigation.navigate('RouteNameTwo');
                }}/>
            </View>
        );
    }
}

class ScreenComponentTwo extends React.Component {
    render(){
        return (
            <View style={{
                flex:1,
                alignItems:'center',
                justifyContent:'center',
                borderWidth:25,
                borderColor:'orange'
            }}>
                <Button title="Go to screen one" onPress={()=> {
                    this.props.navigation.navigate('RouteNameOne');
                }}
                    />

            </View>
        );
    }
}

const MyNavigator = createSwitchNavigator({
    'RouteNameOne' : ScreenComponentOne,
    'RouteNameTwo' : ScreenComponentTwo
});

export default class App extends React.Component {
    render () {
        return (
        <MyNavigator/>
        )
    }
}