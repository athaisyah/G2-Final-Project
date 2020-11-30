import React, { Component } from "react"
import { createStackNavigator } from "@react-navigation/stack"
import Welcome from '../../screens/Welcome'
import Login from '../../screens/Login'
import Register from '../../screens/Register'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

// import { Welcome, Login, Register } from "../../screens/index"

const Stack = createStackNavigator();

class LoginStack extends Component {
    render() { 
        return (
            <Stack.Navigator
                initialRouteName="Welcome"
                headerMode="screen"
            >
                <Stack.Screen
                    name="Welcome"
                    children={props => <Welcome {...props}/>}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Login"
                    children={props => <Login {...props}/>}
                    options={{
                        headerTitle:""
                    }}
                />
                <Stack.Screen
                    name="Register"
                    children={props => <Register {...props}/>}
                    options={{
                        headerTitle:""
                    }}
                />
            </Stack.Navigator>
        )
    }
}
 
export default LoginStack;