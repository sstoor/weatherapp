import React from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
} from "react-native";

const WeatherScroll = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <CurrentTemp1 />
    </ScrollView>
  );
};

const CurrentTemp1 = () => {
  const img = { uri: "http://openweathermap.org/img/wn/10d@2x.png" };
  return (
    <View style={styles.currentTempContainer}>
      <Image source={img} style={styles.image} />
      <View>
        <Text>Sunday</Text>
        <Text> Night: 21&#176;C</Text>
        <Text>Day: 27&#176;C</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
  },
  scrollView: {
    backgroundColor: "#18181bcc",
    padding: 30,
  },
  currentTempContainer:{

flexDirection: "row",
backgroundColor: "#00000040",
justifyContent: "center",
alignItems:"center",


  },
});

export default WeatherScroll;
