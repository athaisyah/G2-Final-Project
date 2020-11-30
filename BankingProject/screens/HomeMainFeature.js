import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  PanResponder,
  Alert,
} from 'react-native';
import {Card, ListItem, Button} from 'react-native-elements';
import axios from 'axios';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {MainFeature, CardContent} from '../components/_index';
import {connect} from 'react-redux';
import {setLogout, dataAPI} from '../redux/action/index';

class HomeMainFeature extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uangnya: '',
      namanya: '',
      rekeningnya: '',
      show: false,
      name: '',
      no_account: '',
      no_phone: '',
    };
  }

  _panResponder = {};
  timer = 0;
  UNSAFE_componentWillMount() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => {
        this.resetTimer();
        return true;
      },
      onMoveShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => {
        this.resetTimer();
        return false;
      },
      onMoveShouldSetPanResponderCapture: () => false,
      onPanResponderTerminationRequest: () => true,
      onShouldBlockNativeResponder: () => false,
    });
    this.timer = setTimeout(() => {
      this.setState({show: true});
      Alert.alert(
        'Session Expired',
        'Your session has expired. Please log in again to continue using Eye-Bank Online.',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        {cancelable: false},
      );

      console.log('didalam set timeout.');

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
    }, 1200000);
    console.log('diluar set timeout.');
  }

  resetTimer() {
    clearTimeout(this.timer);
    if (this.state.show) this.setState({show: false});
    this.timer = setTimeout(() => {
      this.setState({show: true});
      Alert.alert('Session Expired');
    }, 1200000);
  }

  saveData = () => {
    const {name, no_account, no_phone} = this.state;
    this.props.input({name, no_account, no_phone});
  };

  componentDidMount() {
    const usernamenya = this.props.usernya;
    const pwdnya = this.props.passwordnya;
    // console.log(usernamenya + ", " + pwdnya)

    axios
      .post(`http://10.0.2.2:8080/banking/cbalance`, {
        username: usernamenya,
        password: pwdnya,
      })
      .then((response) => {
        this.setState({
          ...this.state,
          uangnya: this.FormatCurrency(response.data.message.Balance),
          namanya: response.data.message.Name,
          rekeningnya: response.data.message.NoAccount,
        });
        this.FormatCurrency(response.data.message.Balance);
        console.log(response.data.message);

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
              no_phone: response.data.message.Phone,
            });
            this.saveData();
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((err) => {
        console.log('Oops, ' + err);
      });

    // const usernamenya = this.props.usernya;
    // const pwdnya = this.props.passwordnya;
    console.log(usernamenya, pwdnya);
  }

  FormatCurrency = (uang) => {
    var amount = parseFloat(uang);
    return amount.toLocaleString('id-ID', {style: 'currency', currency: 'IDR'});
  };

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        {/* <View style={styles.header}>
              <MaterialCommunityIcons name='menu' color='white' size={30}/>
              <Text style={styles.headerTitle}>eye-bank online</Text>
              <MaterialCommunityIcons name='logout' color='white' size={30}/>
        </View> */}
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginTop: 18,
          }}>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              width: '100%',
              flexWrap: 'wrap',
            }}>
            <MainFeature title="Transfer" img={images.transfer} />
            <MainFeature
              title="Payment"
              img={images.bayar}
              onPress={() => this.props.navigation.navigate('Payment')}
            />
            <MainFeature title="Purchase" img={images.beli} />
            <MainFeature title="E-Money" img={images.emoney} />
            <MainFeature title="Top Up LinkAja" img={images.linkAja} />
            <MainFeature title="Pending Transaction" img={images.alarmClock} />
            <MainFeature title="My Favorit" img={images.favoritku} />
            <MainFeature />
          </View>
        </View>
        <View>
          <Card>
            <Card.Title style={{justifyContent: 'flex-start'}}>
              CURRENT & SAVINGS ACCOUNTS
            </Card.Title>
            <Card.Divider />
            <CardContent
              title={this.state.namanya}
              account_no={this.state.rekeningnya}
              onPress={() => this.props.navigation.navigate('Account')}
              image={images.debitCard}
            />
          </Card>
          <Card>
            <Card.Title style={{justifyContent: 'flex-start'}}>
              NEW ACCOUNTS OPENING
            </Card.Title>
            <Card.Divider />
            <CardContent
              image={images.debitCard2}
              title="Open New Accounts"
              account_no="Open new Saving Plan and Time Deposit account."
            />
          </Card>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  statusLogin: state.main.isLogin,
  usernya: state.login.username,
  passwordnya: state.login.password,
});

const mapDispatchToProps = (dispatch) => ({
  isLogout: () => dispatch(setLogout()),
  input: (data) => dispatch(dataAPI(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeMainFeature);

const images = {
  transfer: require('../assets/icon/transfer.png'),
  bayar: require('../assets/icon/bayar.png'),
  beli: require('../assets/icon/beli.png'),
  emoney: require('../assets/icon/emoney.png'),
  favoritku: require('../assets/icon/favoritku.png'),
  linkAja: require('../assets/icon/linkAjaa.png'),
  alarmClock: require('../assets/icon/alarm-clock.png'),
  debitCard: require('../assets/icon/card.png'),
  debitCard2: require('../assets/icon/card2.png'),
  // add: require('../assets/icon/debit-card.png')
};

const styles = StyleSheet.create({
  header: {
    height: 50,
    backgroundColor: '#05548D',
    // marginTop: Constants.statusBarHeight,
    paddingHorizontal: 10,
    borderBottomColor: '#05548D',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 18,
    color: 'white',
  },
});
