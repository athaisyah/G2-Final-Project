import React, { Component } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../../screens/HomeMainFeature'
import PaymentScreen from '../../screens/Payment'
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import FlatListItem from "../../components/FlatlistItem"
import axios from "axios";
import { connect } from "react-redux";
import { dataAPI } from "../../redux/action/index";


const Drawer = createDrawerNavigator();


class HomeDrawer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: "",
            no_account: '',
            email: "",
            no_phone: "",
            username: "",
            password: "",
        };
    }

    saveData = () => {
        const {name, no_account, no_phone} = this.state;
        this.props.input({name, no_account, no_phone})
    }

    componentDidMount() {
        const usernamenya = this.props.usernya;
        const pwdnya = this.props.passwordnya;
        console.log(usernamenya, pwdnya);

        axios
        .post(`http://10.0.2.2:8080/banking/cprofile`, {
            username: usernamenya,
            password: pwdnya,
        })
        .then((response) => {
            console.log(response.data.message);
            this.setState({
            ...this.state,
            name: response.data.message.Name,
            no_account: response.data.message.NoAccount,
            no_phone : response.data.message.Phone,
            });
            this.saveData();      
        })
        .catch((error) => {
            console.log(error);
        });
  }


    render() {
        return (
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Payment" component={PaymentScreen} />
                {/* <Drawer.Screen name="Flatlist Item" component={FlatListItem} /> */}
            </Drawer.Navigator>
        )
    }
}

const mapStateToProps = (state) => ({
  usernya: state.login.username,
  passwordnya: state.login.password,
});

const mapDispatchToProps = (dispatch) => ({
  input: (data) => dispatch(dataAPI(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeDrawer);


