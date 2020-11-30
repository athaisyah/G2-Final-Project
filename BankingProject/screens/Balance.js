import React, {Component} from 'react';
import {View, ImageBackground, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {Icon} from 'react-native-elements';
import axios from 'axios';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import FlatListItem from '../components/FlatlistItem';

class Balance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uangnya: '',
      rekeningnya: '',
      dataTransaction: [],
      dataShow: '',
    };
  }

  componentDidMount() {
    const usernamenya = this.props.usernya;
    const pwdnya = this.props.passwordnya;
    // console.log(usernamenya + ", " + pwdnya)

    const nm = this.props.namenya;
    const acc = this.props.no_accountnya;
    const phn = this.props.no_phonenya;

    axios
      .post(`http://10.0.2.2:8080/banking/cbalance`, {
        username: usernamenya,
        password: pwdnya,
      })
      .then((response) => {
        this.setState({
          ...this.state,
          uangnya: this.FormatCurrency(response.data.message.Balance),
          rekeningnya: response.data.message.NoAccount,
        });
        this.FormatCurrency(response.data.message.Balance);
        console.log(response.data.message);

        console.log('SEND TO ' + nm + acc + phn);

        axios
          .post(`http://10.0.2.2:8080/banking/getTransaction`, {
            name: nm,
            no_account: acc,
            no_phone: phn,
          })
          .then((response) => {
            console.log(response.data);
            this.setState({
              ...this.state,
              dataTransaction: response.data,
              dataShow: 'show',
            });
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((err) => {
        console.log('Oops, ' + err);
      });
  }

  FormatCurrency = (uang) => {
    var amount = parseFloat(uang);
    return amount.toLocaleString('id-ID', {style: 'currency', currency: 'IDR'});
  };

  renderItem = ({item}) => {
    return (
      <View>
        <View style={{backgroundColor: '#f2f2f2'}}>
          <Text style={{marginHorizontal: 17, marginVertical: 3}}>
            {item.date}
          </Text>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            marginHorizontal: 17,
            marginVertical: 5,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.left}>
              {item.id_userTransaction} {item.sender_name}
            </Text>
            <Text style={styles.right}>{item.amount_money},-</Text>
          </View>
          <Text>{item.recipient_account}</Text>
          <Text>{item.description}</Text>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        {/* <View style={styles.header}>
                    <Icon name='menu' color='white' size={30}/>
                    <Text style={styles.headerTitle}>eye-bank online</Text>
                    <Icon name='logout' color='white' size={30}/>
                </View> */}
        <View
          style={
            this.state.dataShow === ''
              ? styles.imageWrapper
              : styles.imageWrapper2
          }>
          {/* <View style={styles.imageWrapper}> */}
          <ImageBackground style={styles.theImage} source={images.wayang}>
            <View style={{padding: 1, margin: 20, alignContent: 'center'}}>
              <Text
                style={{
                  color: '#d8d8d8',
                  fontSize: 14,
                  fontWeight: 'bold',
                  marginVertical: 2,
                }}>
                BALANCE
              </Text>
              <Text style={{color: 'white', fontSize: 20, marginBottom: 8}}>
                IDR {this.state.uangnya}
              </Text>
              <Text
                style={{
                  color: '#d8d8d8',
                  fontSize: 14,
                  fontWeight: 'bold',
                  marginVertical: 2,
                }}>
                HOLD AMOUNT
              </Text>
              <Text style={{color: 'white', fontSize: 20, marginBottom: 8}}>
                IDR 0.00
              </Text>
              <Text
                style={{
                  color: '#d8d8d8',
                  fontSize: 14,
                  fontWeight: 'bold',
                  marginVertical: 2,
                }}>
                ACCOUNT NUMBER
              </Text>
              <Text style={{color: 'white', fontSize: 20, marginBottom: 8}}>
                {this.state.rekeningnya}
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.header}>
          <Text style={styles.headerTitle}></Text>
        </View>
        {this.state.dataShow === '' ? (
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontStyle: 'italic', fontWeight: 'bold'}}>
              NO DATA AVAILABLE
            </Text>
          </View>
        ) : (
          <View style={{backgroundColor: 'white'}}>
            <FlatList
              data={this.state.dataTransaction}
              keyExtractor={(item, index) => index.toString()}
              renderItem={this.renderItem}
            />
          </View>
        )}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  usernya: state.login.username,
  passwordnya: state.login.password,
  namenya: state.data.name,
  no_accountnya: state.data.no_account,
  no_phonenya: state.data.no_phone,
});

export default connect(mapStateToProps)(Balance);

const images = {
  wayang: require('../assets/icon/blues.png'),
};

const styles = StyleSheet.create({
  header: {
    height: 25,
    backgroundColor: '#05548D',
    // marginTop: Constants.statusBarHeight,
    paddingHorizontal: 0,
    borderBottomColor: '#05548D',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // justifyContent: 'space-between'
  },
  headerTitle: {
    fontSize: 18,
    color: 'white',
    justifyContent: 'center',
  },
  imageWrapper: {
    // display: 'flex',
    backgroundColor: '#256DB3',
    height: 210,

    // height: `${100 / 1.94}%`,
    width: `${100 / 1}%`,
    overflow: 'hidden',
  },
  imageWrapper2: {
    // display: 'flex',
    backgroundColor: '#256DB3',
    // height: `${100 / 2.7}%`,
    height: 210,
    width: `${100 / 1}%`,
    overflow: 'hidden',
  },
  theImage: {
    // opacity: 0.25,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  left: {
    fontWeight: 'bold',
  },

  right: {
    flex: 1,
    textAlign: 'right',
    color: 'red',
  },
});
