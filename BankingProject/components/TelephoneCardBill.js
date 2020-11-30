import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  View,
  Button,
  Icon,
  StyleProvider,
} from 'native-base';

export default class TelephoneCardBill extends Component {
  render() {
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem header bordered>
              <Text>TELEPHONE BILLING</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.left}>Telephone Number</Text>
                  <Text style={styles.right}>{this.props.telepon}</Text>
                </View>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.left}>Customer Name</Text>
                  <Text style={styles.right}>{this.props.name}</Text>
                </View>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.left}>Payment Period</Text>
                  <Text style={styles.right}>{this.props.period}</Text>
                </View>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.left}>Bill Amount</Text>
                  <Text style={styles.right}>Rp {this.props.amount},00</Text>
                </View>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.left}>Admin Fee</Text>
                  <Text style={styles.right}>Rp 5.000,00</Text>
                </View>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.left}>Status</Text>
                  <Text style={styles.right}>{this.props.status}</Text>
                </View>
              </Body>
            </CardItem>
          </Card>
        </Content>
        {this.props.status === 'Paid' ? (
          <Button block full disabled>
            <Text>PAY NOW</Text>
          </Button>
        ) : (
          <Button block full onPress={this.props.onPress}>
            <Text>PAY NOW</Text>
          </Button>
        )}
      </Container>
    );
  }
}

const images = {
  loh: require('../assets/icon/bayar.png'),
};

const footerTabTheme = {
  'NativeBase.Button': {
    '.active': {
      backgroundColor: '#2469a5',
    },
  },
};

const styles = StyleSheet.create({
  left: {
    fontWeight: 'bold',
  },

  right: {
    flex: 1,
    textAlign: 'right',
  },

  button: {
    position: 'absolute',
    width: '100%',
    height: 50,
    bottom: 0,
    backgroundColor: '#05548d',
    justifyContent: 'center',
  },

  buttonText: {
    fontFamily: 'NSRegular',
    alignSelf: 'center',
    fontSize: 16,
    color: 'white',
  },
});
