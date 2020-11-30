import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'

class Welcome extends Component { 
    // Navigate to Login Form
    onPressLoginForm = () => {
        this.props.navigation.navigate("Login")
    }

    // Navigate to Register Form
    onPressRegisterForm = () => {
        this.props.navigation.navigate("Register")
    }
    
    render() {        
        return (
            <View style={styles.screen}>
                <View style={styles.header}>                        
                    <Image source={images.logo} style={styles.headerIcon}/>
                    <Text style={styles.headerText}>eye-bank</Text>
                </View>

                <View style={styles.container}>
                    <View style={styles.containerHeader}>
                        <Image source={images.welcome} style={styles.containerImage} />
                    </View>
                    
                    <View>
                        <Text style={styles.containerTitleText}>
                            Welcome to Eye-Bank!
                        </Text>
                        <Text style={styles.containerText}>
                            Are you ready to enjoy a whole new life without limits? Let's go!
                        </Text>
                    </View>
                    
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={this.onPressLoginForm}>
                            <Text style={styles.buttonText}>Log in</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button} onPress={this.onPressRegisterForm}>
                            <Text style={styles.buttonText}>Register</Text>
                        </TouchableOpacity> 
                    </View>

                    <View>
                        <Text style={styles.containerText}>
                            By logging in or registering, you agree to out Terms of service and Privacy Policy.
                        </Text>
                    </View>               
                </View>
            </View>
        )
    }
}

const images = {
    logo: require("../assets/icon/logo.png"),
    welcome: require("../assets/icon/welcome.png"),
}

const styles = StyleSheet.create({
    screen: {flex:1, justifyContent: "space-between", padding: 15, backgroundColor:"white"},
    header: {flexDirection: "row"},
    headerText: {fontSize: 30, fontWeight: "bold"},
    headerIcon: {width:50, height:30, margin:10},

    container: {},
    containerHeader: {alignItems: "center", marginBottom: 20},
    containerImage: {width:"100%", height: 300},
    containerTitleText: {textAlign: "justify", fontSize: 20, fontWeight: "bold"},
    containerText: {textAlign: "justify", marginBottom: 20},
    buttonContainer: {flexDirection: "row", justifyContent: "space-between", marginTop: 20, marginBottom: 35},
    button: {width: 180, height: 35, backgroundColor: "#2469A5", borderRadius: 25, alignItems: "center", justifyContent: "center"},
    buttonText: {color: "white", fontWeight: "bold", fontSize: 15}
})
 
export default Welcome