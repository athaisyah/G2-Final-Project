// import React from 'react';
import React, { Component } from 'react'
import {View, StyleSheet, Text, Image, ScrollView, Alert} from 'react-native';
import axios from "axios";
// import swal from "sweetalert";
import { connect } from "react-redux";
import { setLogin, setInput } from '../redux/action/index'
import Inputs from '../components/Inputs';
import Submit from '../components/Submit';
import Account from '../components/Account';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false,
            username: "",
            password: "",
            error: false,
            message: "",
        };
    }

    kasihData = () => {
        const { username, password } = this.state;
        this.props.input({ username, password });
    };

    onPressLogin = () => {
        const {username, password} = this.state;
        console.log(`username: ${username}, password: ${password}`);

        if (username === '') {
            Alert.alert('Username cannot be empty!');
        } else if (password === '') {
            Alert.alert('Password cannot be empty!');
        }

        axios.post(`http://10.0.2.2:8080/banking/login`, {
          username: this.state.username,
          password: this.state.password,
        })
        .then((response) => {
          this.setState({
            ...this.state,
            error: false,
            isLogin: true,
            message: response.data.message,
          });
  
          if (this.state.message.User === this.state.username + " success login") {
            // swal("Looks Good!", "Login Success", "success");
            console.log("Login successful!");
            this.kasihData();
            return this.props.changeStatusLogin();
          } else {
            // swal(
            //   "Oops!",
            //   this.state.message + "\n Please check your Username and Password!",
            //   "error"
            // );
            Alert.alert('Oops, login failed!');
            console.log("Oops, login failed!");
          }
        })
        .catch((err) => {
          console.log("Oops, request failed! " + err);
          Alert.alert('Oops, request failed! ' + err);
        //   swal("Oops!", "Error", "error");
        });

        // this.props.navigation.navigate("Home")
    }

    render() {
        return (
        <ScrollView style={{backgroundColor: 'white'}}>
            <View style={styles.container}>
                <Image 
                    source={images.login} 
                    resizeMode="center" 
                    style={styles.image} />
                <Text style={styles.textTitle}>Welcome back</Text>
                <Text style={styles.textBody}>Log in to your existant account</Text>
                <View style={{marginTop: 20}} />
                <Inputs name="Username" icon="user" value={this.state.username} onChangeText={(username) => this.setState({username})} />
                <Inputs name="Password" icon="lock" pass={true} value={this.state.password} onChangeText={(password) => this.setState({password})} />
                <View style={{width: '90%'}}>
                    <Text style={[styles.textBody], {alignSelf: 'flex-end'}}>Forgot Password?</Text>
                </View>
                <Submit title="LOG IN" color="#0148a4" onPress={this.onPressLogin} />
            </View>
        </ScrollView> 
        );
    }
}

const mapStateToProps = (state) => ({
    statusLogin: state.main.isLogin,
    userInput: state.login.username,
    passwordInput: state.login.password,
  });
  
const mapDispatchToProps = (dispatch) => ({
    changeStatusLogin: () => dispatch(setLogin()),
    input: (data) => dispatch(setInput(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

const images = {
    login : require('../assets/icon/login.png'),
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 400,
        height: 250,
        marginVertical: 10
    },
    textTitle: {
        fontFamily: 'Foundation',
        fontSize: 40,
        marginVertical: 10,
    },
    textBody: {
        fontFamily: 'Foundation',
        fontSize: 16
    }
});

/*
const Login = props => {
    return (
        <ScrollView style={{backgroundColor: 'white'}}>
            <View style={styles.container}>
                <Image 
                    // source={require('../assets/Login.png')} 
                    resizeMode="center" 
                    style={styles.image} />
                <Text style={styles.textTitle}>Welcome back</Text>
                <Text style={styles.textBody}>Log in to your existant account</Text>
                <View style={{marginTop: 20}} />
                <Inputs name="Username" icon="user" />
                <Inputs name="Password" icon="lock" pass={true} />
                <View style={{width: '90%'}}>
                    <Text style={[styles.textBody], {alignSelf: 'flex-end'}}>Forgot Password?</Text>
                </View>
                <Submit title="LOG IN" color="#0148a4" onPress={this.handleLogin} />
            </View>
        </ScrollView>      
    );
};


export default Login;
*/