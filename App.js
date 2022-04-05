import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  SafeAreaView,
} from "react-native";

const image = require("./assets/backgroundimg/sunny.webp");

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        style={{ flex: 1, resizeMode: "cover", width: 1080 }}>
        <SafeAreaView>
          <Text>Open up App.js to start working onbhjbjhvhj your app!</Text>
          <StatusBar style="auto" />
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
