import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Image,
  Alert
} from 'react-native';
import {Icon} from 'react-native-elements';
import Axios from "axios";
import {connect} from "react-redux";
import {TelkomItem, TelephoneCardBill, TelephoneCardInvoice} from '../components/_index';
// import TelkomItem from '../components/TelkomItem';
// import TelephoneCardBill from '../components/TelephoneCardBill'
// import TelephoneCardInvoice from '../components/TelephoneCardInvoice'

class Telephone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBill: false,
      showInvoice: false,
      telephoneNumber: '',
      description: "",

      tlpNumber: "",
      nameCustomer: "",
      paymentPeriod: "",
      billAmount: "",
      status: "",
    };
  }

  onPressTelephone = (e) => {
    e.preventDefault();
    const usernamenya = this.props.usernya;
    const pwdnya = this.props.passwordnya;
    console.log("herrrrrreeeeee "+ usernamenya, pwdnya)

    Axios.post(`http://10.0.2.2:8080/banking/telephone`, {
      telephoneNumber: this.state.telephoneNumber,
      username: usernamenya,
      password: pwdnya,
    })
    .then((response) => {
      console.log("ini dibagian response")

      if(response.data.message === "Telephone Number " + this.state.telephoneNumber + " not found") {
          Alert.alert("Telephone Number " + this.state.telephoneNumber + " not found")
      } else {
        // console.log("ini dibagian else 1")
        this.setState({
          ...this.state,
          tlpNumber: response.data.message.Telephone,
          nameCustomer: response.data.message.Name,
          paymentPeriod: response.data.message.Period,
          billAmount: this.FormatCurrency(response.data.message.Amount),
          status: response.data.message.Status,
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

      Axios.post(`http://10.0.2.2:8080/banking/telephone/payment`, {
        telephoneNumber: this.state.telephoneNumber,
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

  renderTelephone = () => {
    return (
      <View  style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: 'white'
      }}>
        {/* ICON TELKOM */}
        <View>
          <TelkomItem images={images.telkomImg} title={"TELKOM"} />
        </View>

        {/* TEXT INPUT */}
        <View style={{ marginTop: 10, flex:1 }}>
          <View style={[styles.inputView]}>
            <Icon
              style={{paddingHorizontal: 4}}
              name="telephone"
              type="foundation"
              color="#05548d"
              size={25}
            />
            <TextInput
              style={styles.input}
              placeholder="Telephone Number"
              placeholderTextColor="#05548d"
              keyboardType="number-pad"
              value={this.state.telephoneNumber}
              onChangeText={(telephoneNumber) => this.setState({telephoneNumber})}
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
          <TouchableOpacity style={styles.button} onPress={this.onPressTelephone}>
            <Text style={styles.buttonText}>CHECK BILL</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  render() {
    if(!this.state.showBill) {
      return this.renderTelephone()

    } else {
      if(!this.state.showInvoice) {
        return <TelephoneCardBill telepon={this.state.tlpNumber} name={this.state.nameCustomer} amount={this.state.billAmount} period={this.state.paymentPeriod} status={this.state.status} onPress={this.onPressPay} />
      } else {
        return <TelephoneCardInvoice telepon={this.state.tlpNumber} name={this.state.nameCustomer} amount={this.state.billAmount} period={this.state.paymentPeriod} status={this.state.status} /> 
      }
    }    
  }
}

const mapStateToProps = (state) => ({
  usernya: state.login.username,
  passwordnya: state.login.password
})

export default connect(mapStateToProps)(Telephone);

const images = {
  telkomImg: require('../assets/icon/telkom.jpg'),
}

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
