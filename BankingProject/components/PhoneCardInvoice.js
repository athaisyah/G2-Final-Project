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
} from 'native-base';

export default class PhoneCardInvoice extends Component {
  render() {
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem header bordered style={{fontWeight: 'bold', backgroundColor:'#05548d', justifyContent: 'center'}}>
              <Text style={{fontWeight: 'bold', color:'white'}}>Thanks for your Payment!</Text>
            </CardItem>

            <CardItem bordered style={{backgroundColor: '#e6edf3'}}>
              <Body>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.left}>Provider</Text>
                  <Text style={styles.right}>{this.props.provider}</Text>
                </View>
              </Body>
            </CardItem>

            <CardItem bordered>
              <Body>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.left}>Phone Number</Text>
                  <Text style={styles.right}>0{this.props.phone}</Text>
                </View>
              </Body>
            </CardItem>

            <CardItem bordered style={{backgroundColor: '#e6edf3'}}>
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

            <CardItem bordered style={{backgroundColor: '#e6edf3'}}>
              <Body>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.left}>Admin Fee</Text>
                  <Text style={styles.right}>Rp 5.000,00</Text>
                </View>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    left: {
        fontWeight: "bold",
    },

    right: {
        flex: 1,
        textAlign: 'right'
    },

    button: {
        position: 'absolute',
        width: '100%',
        height: 50,
        bottom: 0,
        backgroundColor: '#05548d',
        justifyContent:'center',
      },

    buttonText: {fontFamily: 'NSRegular',alignSelf:'center' ,fontSize: 16, color: 'white'},
    
})
