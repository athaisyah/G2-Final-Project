import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const PaymentItem = (props) => {
  return (
    <TouchableOpacity style={styles.imageItem} disabled>
      <MaterialIcons name="payments" size={35} color="#429FDB" style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>Make New Payment</Text>
      </View>
    </TouchableOpacity>
  );
};

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
  },
  infoContainer: {
    marginLeft: 10,
    width: 250,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  title: {
    marginTop: 3,
    color: 'black',
    fontSize: 18,
    marginBottom: 5,
  },
});

export default PaymentItem;
