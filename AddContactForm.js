import React from 'react'
import { KeyboardAvoidingView, TextInput, Button, StyleSheet, View} from 'react-native'
import propTypes from 'prop-types'
import {Constants} from 'expo'

const styles = StyleSheet.create ({
    container: {
        flex:1,
        backgroundColor:'#fff',
        paddingTop:Constants.statusBarHeight,
        justifyContent:'center',
    },
    input: {
        padding:5,
        marginHorizontal:20,
        paddingHorizontal:10,
        paddingVertical:5,
        marginTop:20,
        marginBottom:20,
        borderColor: 'black',
        minWidth:100,
        borderWidth:1,
    }

})

export default class AddContactForm extends React.Component{
    static propTypes = {
        addContact: propTypes.func,
    }

    state = {
        name: '',
        phone: '',
        isValidForm:false
    }

    componentDidUpdate(prevProps, prevState){
        if(this.state.name !== prevState.name || this.state.phone !== prevState.phone) {
            this.validForm()
        }
    }

// handleNameChange = name => {
//   this.setState({name })
// }

// handlePhoneChange = phone => {
//   if(+phone >=0 && phone.length <=10) {
//   this.setState({phone})
//   }
// }

// handleUpdate = key => {
//   return val => {
//     this.setState({[key]:val})
//   }
// }

    handleUpdate = key => val => {
        this.setState({[key]:val})
    }


    validForm = () =>{
        if(+this.state.phone >=0 && this.state.phone.length ==10 && this.state.name.length >=3)
        {
            return this.setState({isValidForm:true})
        } else {
            return this.setState({isValidForm:false})
        }
    }

    handleSubmit = () => {
        this.props.onSubmit(this.state)
    }
    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style = {styles.container} >

                <TextInput style={styles.input}
                           onChangeText={this.handleUpdate('name')}
                           value={this.state.name}
                           placeholder='Name'/>

                <TextInput style={styles.input}                 keyboardType='numeric'
                           onChangeText= {this.handleUpdate('phone') }
                           value = {this.state.phone}
                           placeholder='Phone' />


                <Button title="Add Contact"
                        onPress={this.handleSubmit} disabled={!this.state.isValidForm} />
            </KeyboardAvoidingView>
        )}
}