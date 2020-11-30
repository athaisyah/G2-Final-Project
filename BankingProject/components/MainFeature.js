import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

const MainFeature = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.onPress}>
        <View style={styles.image}>
          <Image source={props.img} />
        </View>
      </TouchableOpacity>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};

export default MainFeature;

const styles = StyleSheet.create({
  container: {
    width: `${100 / 4}%`,
    alignItems: 'center',
    marginBottom: 18,
  },

  image: {
    width: 58,
    height: 58,
    // borderWidth: 1,
    borderColor: '#EFEFEF',
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 11,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 6,
  },
});
