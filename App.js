// import Example from './examples/0-switch';
// import Example from './examples/1-stack';
// export default Example;

import React, {componentDidMount} from 'react';
import { Button, SectionList, StyleSheet, Text,View } from 'react-native';
import {Provider} from 'react-redux'
import store from './redux/store'
import {Constants} from 'expo'
import {  createStackNavigator, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';
import AddContactScreen from "./screens/AddContactScreen";
import ContactListScreen from "./screens/ContactListScreen";
import ContactDetailsScreen from "./screens/ContactDetailsScreen"
import LoginScreen from "./screens/LoginScreen"
import SettingsScreen from "./screens/SettingsScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import {fetchUsers} from './my_api';

const ContactsTab = createStackNavigator({
    AddContact: AddContactScreen,
    ContactList: ContactListScreen,
    ContactDetails: ContactDetailsScreen,
}, {
    initialRouteName:"ContactList",
    navigationOptions: {
        headerTintColor: '#d82034',
    },
})

const MainNavigator = createBottomTabNavigator({
    contacts: ContactsTab,
    Settings: SettingsScreen,
}, {
    tabBarOptions:{
      activeTintColor: '#a41034'
    },
})

ContactsTab.navigationOptions = {
    tabBarIcon: ({ focused, tintColor }) => (
        <Ionicons
            name={`ios-add-circle${focused ? "" : "-outline"}`}
            size={25}
            color={tintColor}
        />
    )
};

const AppNavigator = createSwitchNavigator ({
    Main: MainNavigator,
    Login: LoginScreen,
}, {
    initialRouteName:"Login",

    },
);

export default class App extends React.Component {

    state = {
        contacts: null,
    }


    // componentDidMount(){
    //     this.getUsers()
    // }
    //
    // getUsers = async () => {
    //     const results = await fetchUsers()
    //     this.setState({contacts:results})
    //
    // }

  addContact = newContact => {
        this.setState(prevState => ({
            contacts:[...prevState.contacts, newContact]})

        )}

    render() {

       return (
           <Provider store={store}>
            <AppNavigator />
           </Provider>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Constants.statusBarHeight,
    },
});

