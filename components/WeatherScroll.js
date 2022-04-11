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
    <ScrollView horizontal={true} style={styles.scrollView}>
      <CurrentTemp1 />
      <CurrentTemp1 />
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
        <Text style={styles.day}>Sunday</Text>
        <Text style={styles.nighttime}>Night: 21&#176;C</Text>
        <Text style={styles.daytime}>Day: 27&#176;C</Text>
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
    padding: 25,

  },
  currentTempContainer: {
    flexDirection: "row",
    backgroundColor: "#00000040",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    borderColor: "#eee",
    borderWidth: 2,
    padding: 20,


  },

  day: {
    color: "white",
    fontWeight: "400",
    fontSize: 50,
  },

  daytime: {
    color: "white",
    fontSize: 20,
    fontWeight: "300",
  },

  nighttime: {
    color: "white",
    fontSize: 20,
    fontWeight: "300",
  },
});

export default WeatherScroll;
