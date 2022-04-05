import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  SafeAreaView,
} from "react-native";

import Datetime from "./components/datetime";

import { Dimensions } from "react-native";

const image = require("./assets/backgroundimg/white.webp");

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <SafeAreaView>
          <Text>Open up App.js tdo start  your app!</Text>
          <StatusBar style="auto" />
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
