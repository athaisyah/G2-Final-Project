import React, { Component } from 'react'
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

class TelkomItem extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <TouchableOpacity style={styles.imageItem}>
      <Image style={styles.image} source={this.props.images} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{this.props.title}</Text>
      </View>
    </TouchableOpacity>
    )
  }
}

const images = {
    telkomImg: require('../assets/icon/telkom.jpg'),
}

const styles = StyleSheet.create({
  imageItem: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 5,
    // backgroundColor: '#ccc',
    // borderColor: '#05548d',
    borderWidth: 1,
  },
  infoContainer: {
    marginLeft: 10,
    width: 250,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  title: {
    color: 'black',
    fontSize: 18,
    marginTop: 3,
    marginBottom: 5,
  },
});

export default TelkomItem;
