import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import PaymentItem from '../components/PaymentItem';

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <PaymentItem />

        <View style={styles.categoryContainer}>
          <TouchableOpacity style={styles.categoryBtn}>
            <View style={styles.categoryIcon}>
              <Ionicons name="wifi" size={35} color="white" />
            </View>
            <Text style={styles.categoryBtnTxt}>Internet</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.categoryBtn}
            onPress={() => this.props.navigation.navigate('Telephone')}>
            <View style={styles.categoryIcon}>
              <Entypo name="old-phone" size={35} color="white" />
            </View>
            <Text style={styles.categoryBtnTxt}>Telecomunication</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.categoryBtn}
            onPress={() => this.props.navigation.navigate('Phone')}>
            <View style={styles.categoryIcon}>
              <FontAwesome5 name="phone-alt" size={35} color="white" />
            </View>
            <Text style={styles.categoryBtnTxt}>Phone Postpaid</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.categoryContainer, {marginTop: 10}]}>
          <TouchableOpacity style={styles.categoryBtn} disabled>
            <View style={styles.categoryIcon}>
              <FontAwesome5 name="lightbulb" size={35} color="white" />
            </View>
            <Text style={styles.categoryBtnTxt}>PLN</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryBtn} disabled>
            <View style={styles.categoryIcon}>
              <Ionicons name="water" size={35} color="white" />
            </View>
            <Text style={styles.categoryBtnTxt}>PAM</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryBtn} disabled>
            <View style={styles.categoryIcon}>
              <Ionicons name="umbrella" size={35} color="white" />
            </View>
            <Text style={styles.categoryBtnTxt}>Insurance</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.categoryContainer, {marginTop: 10}]}>
          <TouchableOpacity style={styles.categoryBtn} disabled>
            <View style={styles.categoryIcon}>
              <FontAwesome5 name="user-graduate" size={35} color="white" />
            </View>
            <Text style={styles.categoryBtnTxt}>Education</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryBtn} disabled>
            <View style={styles.categoryIcon}>
              <Entypo name="wallet" size={35} color="white" />
            </View>
            <Text style={styles.categoryBtnTxt}>Multipayment</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryBtn} disabled>
            <View style={styles.categoryIcon}>
              <FontAwesome name="television" size={35} color="white" />
            </View>
            <Text style={styles.categoryBtnTxt}>Cable TV</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.categoryContainer, {marginTop: 10}]}>
          <TouchableOpacity style={styles.categoryBtn} disabled>
            <View style={styles.categoryIcon}>
              <Fontisto name="ticket" size={35} color="white" />
            </View>
            <Text style={styles.categoryBtnTxt}>Ticket</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryBtn} disabled>
            <View style={styles.categoryIcon}>
              <FontAwesome name="credit-card-alt" size={35} color="white" />
            </View>
            <Text style={styles.categoryBtnTxt}>Credit Card</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.categoryBtn}
            disabled></TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Payment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  sliderContainer: {
    height: 200,
    width: '90%',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },
  categoryContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 10,
  },
  categoryBtn: {
    flex: 1,
    width: '30%',
    marginHorizontal: 0,
    alignSelf: 'center',
  },
  categoryIcon: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 70,
    height: 70,
    backgroundColor: '#429FDB' /* 'white' */,
    borderRadius: 50,
  },
  categoryBtnTxt: {
    alignSelf: 'center',
    marginTop: 5,
    color: '#429FDB',
  },
  cardsWrapper: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  card: {
    height: 100,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontWeight: 'bold',
  },
  cardDetails: {
    fontSize: 12,
    color: '#444',
  },
});
