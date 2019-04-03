import React, {Component} from 'react'
import {connect} from 'react-redux'
import{Text, StyleSheet, SectionList} from 'react-native'
import {Card, CardSection, Button} from "../components/common/index";
import {Header} from '../components/common/header'
import {checkOrders} from "../actions/index";
import Row from "../../Row"

class MainScreen extends Component {

    /** Feature: Automatic API fetching, adding action creator
     * checkOrders in existing redux connect function **/
    componentDidMount(){
        this.autoFetch()
        setInterval(()=>{
            console.log('hallo')
            this.autoFetch()}, 30000)
    }

    /** Action creator is called **/
    autoFetch = async () => {
        this.props.checkOrders(this.props.auth)
    }

    static navigationOptions = ({navigation}) => ({
        headerTitle:<Header />,
        // headerTransparent:true,
        headerStyle:{
        backgroundColor:'transparent',
        marginTop:7,
        marginBottom:70,

        },

    })


    render(){


        const renderItem = ({item}) =>
            <Row

                // Id={'ID:'}
                id={item.ordered_by['order.id']}
                From={'Order from:'}
                from= {item.ordered_by['order.editor']}
                On={'Modified on:'}
                on={item.ordered_by['order.mtime']}
                Dstatus={'Delivery status:'}
                dstatus={item.ordered_by['order.statusdelivery']}
                Pstatus={'Payment status:'}
                pstatus={item.ordered_by['order.statuspayment']}

            />

        return(

            <Card >

                {/*<Header headerText={'Store Manager'} />*/}

                    <Text style={styles.text}>
                        {this.props.auth.email}
                    </Text>

                <CardSection >
                    <Button onPress={()=>this.props.navigation.navigate('orders')}>
                        Check oOrders
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={()=>this.props.navigation.navigate('stock')}>
                        Check Stocks
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={()=>this.props.navigation.navigate('products')}>
                        Check Products
                    </Button>
                </CardSection>

                <CardSection>

                    <SectionList
                        keyExtractor={item => item.ordered_by['order.id']}
                        sections = {[{
                            data: this.props.shop.ordered_by
                        }]}
                        renderItem ={renderItem}

                    />
                </CardSection>
            </Card>
        )
    }

}
const styles = StyleSheet.create({
    text:{
        fontSize:10,
        color:'grey',
        padding:5,

    },
    card:{
        backgroundColor: 'red'
    }
})

const mapStateToProps = state => ({
    auth:state.auth,
    // shop:this.tomato(state.shop.ordered_by),
    shop:state.shop
})
export default connect(mapStateToProps, {checkOrders})(MainScreen)