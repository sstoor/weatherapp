import React, { useState, useEffect } from "react";
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
    <View style={styles.weatherItem}>
      <Text style={styles.weatherItemTitle}>{props.title} : </Text>
      <Text style={styles.weatherItemValue}>
        {props.value} {props.unit}
      </Text>
    </View>
  );
};

const Datetime = () => {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  const [hours, setHours] = useState("");
  useEffect(() => {
    setInterval(() => {
      const time = new Date();
      const hour = time.getHours();
      const minute = time.getMinutes();
      const seconds = time.getSeconds();

      const day = time.getDate();
      const month = time.getMonth();
      const year = time.getFullYear();

      setTime(
        (hour > 12 ? hour - 12 : hour) +
          ":" +
          (minute < 10 ? "0" + minute : minute) +
          " " +
          (hour < 12 ? "Am" : "Pm")
      );

      setDate(day + " " + (month == 4 ? "April" : "March"));
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text style={styles.heading}>{time}</Text>
        </View>
        <View>
          <Text style={styles.subheading}>Thursday, {date}</Text>
        </View>
        <View style={styles.weatherItemcontainer}>
          <WeatherData title="Humidity" value="50" unit="%" />
          <WeatherData title="Sunrise" value="7:30" unit="Am"></WeatherData>
          <WeatherData title="Sunset" value="6:30" unit="Pm"></WeatherData>
          <WeatherData title="Windspeed" value="15" unit="km/h"></WeatherData>
        </View>
      </View>

      <View style={styles.rightalign}>
        <Text style={styles.timezone}>Gold Coast, Australia</Text>
        <Text style={styles.latlong}>420LO 6208LI</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },

  heading: {
    fontSize: 45,
    color: "cyan",
    fontWeight: "bold",
    margin: 10,
  },

  subheading: {
    fontSize: 20,
    color: "darkcyan",
    fontWeight: "300",
  },

  rightalign: {
    textAlign: "right",
    margin: 20,
  },

  timezone: {
    color: "cyan",
    fontSize: 15,
  },

  latlong: {
    fontSize: 15,
    color: "darkblue",
  },

  weatherItemcontainer: {
    backgroundColor: "#18181b99",
    borderRadius: 20,
    padding: 20,
    alignContent: "stretch",
  },

  weatherItem: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  weatherItemTitle: {
    color: "white",
    fontSize: 14,
    fontWeight: "700",
  },

  weatherItemValue: {
    color: "white",
  },
});

export default Datetime;
