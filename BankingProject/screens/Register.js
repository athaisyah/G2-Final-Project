import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  Alert,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Axios from 'axios';
import Input from '../components/Inputs';
import Submit from '../components/Submit';
import Success from './Success';

class Register extends Component {
//   constructor(props) {
//           super(props);
//           this.renderShowSuccess = this.renderShowSuccess.bind(this); //add this line

//      }
    state = {
        name: '',
        no_account: 0,
        no_phone: 0,
        username: '',
        email: '',
        password: '',
        responseShow: '',
        showOTP: false,
        showSuccess: false,
        otp: '',
        code: 0,
    };

  alertFunction = () => {
    this.setState({
      showOTP: !this.state.showOTP,
    });
  };

  onPressRegister = (e) => {
    e.preventDefault();
    // this.setState({
    //   showOTP: !this.state.showOTP,
    // });
    const ts = this.state;
    if(ts.username === '' || ts.password === '' || ts.email === '') {
      Alert.alert("Username, Email and Password must be filled out!")
    } else {

    Axios.post(`http://10.0.2.2:8080/banking/register`, {
      name: ts.name,
      no_account: ts.no_account,
      no_phone: ts.no_phone,
      username: ts.username,
      email: ts.email,
      password: ts.password,
    })
      .then((response) => {
        console.log(response.data);

        if (response.data.message === 'Registration eBanking success. ') {
          console.log('Your account is successfully created!');
          Alert.alert(response.data.message)
          this.setState({
            responseShow: response.data.message,
            // showOTP: !this.state.showOTP,
          });
          this.alertFunction();
        } else {
          console.log('Something Wrong!', response.data.message, 'warning');
          Alert.alert(response.data.message)
        }
      })
      .catch((error) => {
        console.log('Oops, request failed!');
        console.error(e);
      });

    }

  };

  onPressOTP = (e) => {
    e.preventDefault();
    // this.setState({
    //     showSuccess: !this.state.showSuccess,
    // });
    if (this.state.otp === '123456') {
      Axios.post(`http://10.0.2.2:8080/banking/verified/` + this.state.otp)
        .then((response) => {
          console.log(response);
          console.log(response.data.message);
          Alert.alert(response.data.message)
        })
        .then(() => {
          this.setState({
            showSuccess: !this.state.showSuccess,
          });
        });
    } else {
      console.log('Please enter the correct code');
    }
  };

  renderRegisterForm = () => {
    return (
      <View style={styles.container}>
        {/* <Image  resizeMode="center" style={styles.image} /> */}
        <Text style={styles.textTitle}>Let's Get Started</Text>
        <Text style={styles.textBody}>
          Create an account to get all features
        </Text>
        <Input
          type="number-pad"
          name="Account Number"
          icon="credit-card-alt"
          value={this.state.no_account}
          onChangeText={(no_account) => this.setState({no_account})}
        />
        <Input
          name="Name"
          icon="id-card"
          value={this.state.name}
          onChangeText={(name) => this.setState({name})}
        />
        <Input
          type="number-pad"
          name="Phone"
          icon="phone"
          value={this.state.no_phone}
          onChangeText={(no_phone) => this.setState({no_phone})}
        />
        <Input
          name="Username"
          icon="user"
          value={this.state.username}
          onChangeText={(username) => this.setState({username})}
        />
        <Input
          type="email-address"
          name="Email"
          icon="envelope"
          value={this.state.email}
          onChangeText={(email) => this.setState({email})}
        />
        <Input
          name="Password"
          icon="lock"
          pass={true}
          value={this.state.password}
          onChangeText={(password) => this.setState({password})}
        />
        <Submit color="#0251ce" title="CREATE" onPress={this.onPressRegister} />
      </View>
    );
  };

  renderShowOTP = () => {
    return (
      <View style={{padding: 20, backgroundColor: 'white', flex: 1}}>
        {/* TITLE */}
        <View style={{marginTop: 25}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 20}}>
            You're almost there!
          </Text>
          <Text style={{textAlign: 'justify'}}>
            You only have to enter an OTP code we send via sms to your
            registered phone number {this.state.phone}.
          </Text>
        </View>

        {/* FORM */}
        <View style={styles.form}>
          <View style={{marginTop: 25}}>
            <Text>
              OTP <Text style={{color: 'red'}}>*</Text>
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
              }}>
              <View style={{flex: 1}}>
                <TextInput
                  style={styles.input}
                  secureTextEntry={true}
                  placeholder="●●●●●●"
                  keyboardType={'number-pad'}
                  onChangeText={(otp) => this.setState({otp})}></TextInput>
              </View>
            </View>
          </View>

          {/* ONPRESS */}
          <View
            style={{
              marginTop: 25,
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
            }}>
            <TouchableOpacity onPress={this.onPressOTP}>
              <Image style={styles.button} source={images.forward} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  renderShowSuccess = (props) => {
    return <Success />;
  };

  render() {
    if (!this.state.showOTP) {
      return this.renderRegisterForm();
    } else {
      if (!this.state.showSuccess) {
        return this.renderShowOTP();
      } else {
        return this.renderShowSuccess();
      }
    }
  }
}

const images = {
  forward: require('../assets/icon/forward.png'),
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: 25,
    height: 25,
    marginVertical: 3,
  },
  textTitle: {
    fontSize: 25,
    fontFamily: 'Foundation',
    marginVertical: 3,
  },
  textBody: {
    fontSize: 16,
    fontFamily: 'Foundation',
  },
  input: {
    borderBottomColor: '#8a8f9e',
    borderBottomWidth: StyleSheet.hairlineWidth,
    // height: 40,
    fontSize: 18,
    color: '#161f3d',
  },
  button: {
    height: 38,
    width: 38,
  },
  form: {
    marginTop: 25,
  },
});

export default Register;
