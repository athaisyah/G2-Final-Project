import React, { Component } from 'react'
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


class Success extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    onPressSuccess = () => {
        this.props.navigation.navigate("Welcome")
    }

    render() {
        return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image
                    source={images.confirmed}
                    resizeMode="contain"
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                />
            </View>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ alignItems: 'center', marginHorizontal: 24 }}>
                    <Text style={{fontFamily: "Roboto-Bold", fontSize: 22, lineHeight: 30, textAlign: 'center' }}>Your Eye-Bank Internet Banking is Verified!</Text>
                    <Text style={{ color: '#8b9097', marginTop: 24, textAlign: 'center', fontFamily: "Roboto-Regular", fontSize: 16, lineHeight: 22}}>You can start by login and ready to use all features in this App. Especially, Telephone Bill and Postpaid Phone Bill Payment.</Text>
                </View>

                <TouchableOpacity
                    style={[styles.shadow, { marginTop: 24 * 2, width: '70%', height: 50, alignItems: 'center', justifyContent: 'center' }]}
                    onPress={this.onPressSuccess} disabled
                >
                    <LinearGradient
                        style={{ height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center', borderRadius: 15 }}
                        colors={['#2469A5', '#00d4ff']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                    >
                        <Text style={{ color: "#fff", fontFamily: "Roboto-Bold", fontSize: 16, lineHeight: 22 }}>Go to Login</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
        );
    }
}


const images = {
    confirmed : require('../assets/icon/confirmed.png')
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
});

export default Success;