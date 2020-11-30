import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class FlatlistItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{backgroundColor: '#f2f2f2'}}>
          <Text style={{marginHorizontal: 10, marginVertical: 3}}>
            {this.props.date}
          </Text>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            marginHorizontal: 10,
            marginVertical: 5,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.left}>
              {this.props.id} {this.props.sender}
            </Text>
            <Text style={styles.right}>- 65.000,00{this.props.amount}</Text>
          </View>
          <Text>{this.props.receiver}</Text>
        </View>
      </View>
    );
  }
}

export default FlatlistItem;

const styles = StyleSheet.create({
  left: {
    fontWeight: 'bold',
  },

  right: {
    flex: 1,
    textAlign: 'right',
    color: 'red',
  },
});
