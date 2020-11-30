import React, { useEffect } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text, Image, View, StyleSheet, Dimensions } from "react-native";

export default function CardContent ({ title, image, account_no, onPress }) {
  return (
    <>
      <TouchableOpacity onPress={onPress} style={styles.card}>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.cardImage}>
            <Image
              style={{ width: "100%", height: "100%", borderRadius: 5 }}
              source={image}
            />
          </View>
          <View style={{ flex: 0.6, marginHorizontal: 12, overflow: "hidden" }}>
            <Text style={styles.cardTitle}>{title === '' ? `${"AISAH TAUFIK"}` : title}</Text>
            <Text style={styles.cardAccountNo}>{account_no === '' ? '1234567890' : account_no}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
}

const { width, height } = Dimensions.get("screen");

const images  = {
    debitCard: require('../assets/icon/card.png'),

}

const styles = StyleSheet.create({
    card: {
        // marginVertical: 2,
        paddingVertical: 2,
        // paddingHorizontal: 2,
        width: width / 1.2,
        // marginHorizontal: 1,
        height: height / 8,
    },
    
    cardTitle: {
        fontWeight: "bold",
        fontSize: 16,
        marginLeft: 10,
    },
    
    cardAccountNo: {
        fontSize: 14,
        color: "#777",
        marginLeft: 10,
        marginVertical: 5
    },
    
    cardImage: {
        flex: 0.5,
    },
})