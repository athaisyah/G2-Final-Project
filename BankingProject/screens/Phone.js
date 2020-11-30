import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {Icon} from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Axios from "axios";
import {connect} from "react-redux";
import {TelkomItem, PhoneCardBill, PhoneCardInvoice} from '../components/_index';
// import TelkomItem from '../components/TelkomItem';
// import PhoneCardBill from '../components/PhoneCardBill'
// import PhoneCardInvoice from '../components/PhoneCardInvoice'

class Phone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBill: false,
      showInvoice: false,
      handphoneNumber: '',
      description: "",

      hpNumber: "",
      nameCustomer: "",
      paymentPeriod: "",
      billAmount: "",
      status: "",

      provider: 'Telkomsel',
    };
  }

  onPressPhone = (e) => {
    e.preventDefault();
    const usernamenya = this.props.usernya;
    const pwdnya = this.props.passwordnya;
    console.log("herrrrrreeeeee "+ usernamenya, pwdnya)

    Axios.post(`http://10.0.2.2:8080/banking/handphone`, {
      handphoneNumber: this.state.handphoneNumber,
      username: usernamenya,
      password: pwdnya,
    })
    .then((response) => {
      console.log("ini dibagian response")

      if(response.data.message === "Handphone Number " + this.state.handphoneNumber + " not found") {
          Alert.alert("Handphone Number " + this.state.handphoneNumber + " not found")
      } else {
        // console.log("ini dibagian else 1")
        this.setState({
          ...this.state,
          nameCustomer: response.data.message.Name,
          hpNumber: response.data.message.Handphone,
          paymentPeriod: response.data.message.Period,
          billAmount: this.FormatCurrency(response.data.message.Amount),
          status: response.data.message.Status,
          provider: response.data.message.Provider,
          showBill: !this.state.showBill,
        })
        // console.log("ini dibagian else 2")
        // console.log(response.data.message)
      }
    })
    .catch((error) => {
      console.log("Oops, request failed!" + error);
      Alert.alert("Oops, request failed!" + error)
    })

  };

  FormatCurrency = (uang) => {
    var amount = parseFloat(uang);
    return amount.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
  }

  onPressPay = (e) => {
    e.preventDefault();
    const usernamenya = this.props.usernya;
    const pwdnya = this.props.passwordnya;

      Axios.post(`http://10.0.2.2:8080/banking/handphone/payment`, {
        handphoneNumber: this.state.handphoneNumber,
        username: usernamenya,
        password: pwdnya,
      })
      .then((response) => {
        console.log(response.data)
        this.setState({
          ...this.state,
          showInvoice: !this.state.showInvoice,
          status: "Paid",
        })
      })
  };

  renderPhone = () => {
    return (
      <View  style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: 'white'
      }}>
        {/* ICON TELKOM */}
        <View>
          <TelkomItem images={images.bill} title="POSTPAID" />
        </View>

        {/* TEXT INPUT */}
        <View style={{ marginTop: 10, flex:1 }}>
          <View style={[styles.inputView]}>
            <MaterialIcons
              style={{paddingHorizontal: 4}}
              name="sim-card"
              type="foundation"
              color="#05548d"
              size={25}
            />
            <Picker
              selectedValue={this.state.provider}
              style={{height: 50, width: 500, color:'#05548d'}}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({provider: itemValue})
              }>
              <Picker.Item label="Telkomsel" value="Telkomsel" />
              <Picker.Item label="Indosat" value="Indosat" />
              <Picker.Item label="XL" value="XL" />
            </Picker>
          </View>
          <View style={[styles.inputView]}>
            <FontAwesome
              style={{paddingHorizontal: 10}}
              name="mobile-phone"
              type="foundation"
              color="#05548d"
              size={25}
            />
            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              placeholderTextColor="#05548d"
              keyboardType="number-pad"
              value={this.state.handphoneNumber}
              onChangeText={(handphoneNumber) => this.setState({handphoneNumber})}
            />
          </View>
          <View style={styles.inputView}>
            <Icon
              style={{paddingHorizontal: 4}}
              name="description"
              type="MaterialIcons"
              color="#05548d"
              size={22}
            />
            <TextInput
              style={styles.input}
              placeholder="Description"
              placeholderTextColor="#05548d"
              value={this.state.description}
              onChangeText={(description) => this.setState({description})}
            />
          </View>
        </View>
        {/* BUTTON BOTTOM */}
        <View>
          <TouchableOpacity style={styles.button} onPress={this.onPressPhone}>
            <Text style={styles.buttonText}>CHECK BILL</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  render() {
    if(!this.state.showBill) {
      return this.renderPhone()

    } else {
      if(!this.state.showInvoice) {
        return <PhoneCardBill phone={this.state.hpNumber} provider={this.state.provider} amount={this.state.billAmount} period={this.state.paymentPeriod} status={this.state.status} onPress={this.onPressPay} />
      } else {
        return <PhoneCardInvoice phone={this.state.hpNumber} provider={this.state.provider} amount={this.state.billAmount} period={this.state.paymentPeriod} status={this.state.status} /> 
      }
    }    
  }
}

const images = {
  bill: require('../assets/icon/bill.png'),
}

const mapStateToProps = (state) => ({
  usernya: state.login.username,
  passwordnya: state.login.password
})

export default connect(mapStateToProps)(Phone);

const styles = StyleSheet.create({
  inputView: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginTop: 10,
    marginHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    fontFamily: 'NSLight',
    paddingHorizontal: 4,
    color: '#05548d',
    marginLeft: 5
    // paddingLeft:8
  },
  button: {
    position: 'absolute',
    width: '100%',
    height: 50,
    bottom: 0,
    backgroundColor: '#05548d',
    justifyContent:'center',
  },
  buttonText: {fontFamily: 'NSRegular', alignSelf:'center', fontSize: 16, color: 'white'},
});
