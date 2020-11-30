import React, {Component} from 'react';
import {NavigationContainer, DrawerActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginStack from './navigator/index';
import axios from 'axios';

import {setLogout} from './redux/action';
import {connect} from 'react-redux';

import {
  Phone,
  Telephone,
  TelephoneCardBill,
  TelephoneCardInvoice,
} from './screens/_index';
import Welcome from './screens/Welcome';
import Register from './screens/Register';
import Login from './screens/Login';
import HomeMainFeature from './screens/HomeMainFeature';
import Balance from './screens/Balance';
// import Telephone from './screens/Telephone'
// import TelephoneCardBill from './components/TelephoneCardBill'
// import TelephoneCardInvoice from './components/TelephoneCardInvoice'
import Payment from './screens/Payment';

import HomeDrawer from './navigator/drawerNavigation/index';
import {LogBox} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  PanResponder,
  Alert,
} from 'react-native';

LogBox.ignoreAllLogs();
const Stack = createStackNavigator();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      msg: '',
    };
  }

  onPressLogout = () => {
    const usernamenya = this.props.usernya;
    const pwdnya = this.props.passwordnya;
    // console.log("herrrrrreeeeee "+ usernamenya, pwdnya)

    axios
      .post(`http://10.0.2.2:8080/banking/logout`, {
        username: usernamenya,
        password: pwdnya,
      })
      .then((response) => {
        this.setState({
          ...this.state,
          isLogin: true,
          msg: response.data.message,
        });
        console.log('msg: ' + response.data.message);

        this.props.isLogout();
      })
      .catch((err) => {
        console.log('Oops, request failed!', err);
      });
  };

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {this.props.isLogin ? (
            <Stack.Screen
              name="HomeDrawer"
              children={(props) => {
                return <HomeDrawer {...props} />;
              }}
              options={({navigation}) => ({
                // headerShown : false
                headerTitle: 'eye-bank online',
                headerTitleAlign: 'center',
                headerTitleStyle: {
                  color: 'white',
                },
                headerStyle: {
                  backgroundColor: '#05548D',
                },
                headerLeft: () => (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.dispatch(DrawerActions.openDrawer())
                    }>
                    <MaterialCommunityIcons
                      name="menu"
                      color="white"
                      size={30}
                    />
                  </TouchableOpacity>
                ),
                headerRight: () => (
                  <TouchableOpacity onPress={this.onPressLogout}>
                    <MaterialCommunityIcons
                      name="logout"
                      color="white"
                      size={30}
                    />
                  </TouchableOpacity>
                ),
              })}
            />
          ) : (
            <Stack.Screen
              name="LoginStack"
              children={(props) => {
                return <LoginStack {...props} />;
              }}
              options={{
                headerShown: false,
              }}
            />
          )}
          <Stack.Screen
            name="Payment"
            children={(props) => {
              return <Payment {...props} />;
            }}
            options={{
              title: 'Payment',
              headerStyle: {
                backgroundColor: '#05548D',
              },
              headerTintColor: '#fff',
              // headerTitleStyle: {
              //   fontWeight: 'bold',
              // },
            }}
          />

          <Stack.Screen
            name="Telephone"
            children={(props) => {
              return <Telephone {...props} />;
            }}
            options={{
              title: 'Telephone',
              headerStyle: {backgroundColor: '#05548D'},
              headerTintColor: '#fff',
            }}
          />

          <Stack.Screen
            name="Phone"
            children={(props) => {
              return <Phone {...props} />;
            }}
            options={{
              title: 'Phone Postpaid',
              headerStyle: {backgroundColor: '#05548D'},
              headerTintColor: '#fff',
            }}
          />

          <Stack.Screen
            name="Account"
            children={(props) => {
              return <Balance {...props} />;
            }}
            options={{
              title: 'Account',
              headerStyle: {backgroundColor: '#05548D'},
              headerTintColor: '#fff',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>

      // <Welcome/>
      // <HomeMainFeature />
      // <Balance/>
      // <Telephone/>
      // <TelephoneCardBill />
      // <TelephoneCardInvoice/>
      // <Payment/>
    );
  }
}

const mapStateToProps = (state) => ({
  isLogin: state.main.isLogin,
  usernya: state.login.username,
  passwordnya: state.login.password,
});

const mapDispatchToProps = (dispatch) => ({
  isLogout: () => dispatch(setLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

// export default App;
