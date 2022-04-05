import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  SafeAreaView,
} from "react-native";

const WeatherData = (props) => {
  return (
    <View>
      <Text>{props.title}</Text>
      <Text>{props.value}</Text>
      <Text>{props.unit}</Text>
    </View>
  );
};

const Datetime = () => {
  return (
    <View>
      <View>
        <View>
          <Text>7:40 Am</Text>
        </View>
        <View>
          <Text>Thursday, 18 March</Text>
        </View>
        <View>
          <WeatherData title="Humidity" value="50" unit="Percentage" />
          <WeatherData title="Sunrise" value="7:30" unit="Am"></WeatherData>
          <WeatherData title="Sunset" value="6:30" unit="Pm"></WeatherData>
        </View>
      </View>

      <View>
        <Text>Gold Coast, Australia</Text>
        <Text>420.69Lo 620.8Le</Text>
      </View>
    </View>
  );
};

export default Datetime;
