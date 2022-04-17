import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  SafeAreaView,
} from "react-native";

import { useState, useEffect } from "react/cjs/react.production.min";

import Datetime from "./components/Datetime.js";

import WeatherScroll from "./components/WeatherScroll.js";

import { Dimensions } from "react-native";

const image = require("./assets/backgroundimg/cloudy.jpeg");

export default function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (success) => {
        let { latitude, longitude } = success.coords;
        fetchDataFromApi(latitude, longitude);
      },
      (err) => {
        if (err) {
          fetchDataFromApi("Sorry, enable location");
        }
      }
    );
  });

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <SafeAreaView>
          <Datetime />
          <WeatherScroll />
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}
const win = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    flex: 1,
    alignSelf: "stretch",
    width: win.width,
    height: win.height,
  },
});
