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
    <View style = {styles.container}>
      <View>
        <View>
          <Text style = {styles.heading}>7:40 Am</Text>
        </View>
        <View>
          <Text style={styles.subheading}>Thursday, 18 March</Text>
        </View>
        <View>
          <WeatherData title="Humidity" value="50" unit="Percentage" />
          <WeatherData title="Sunrise" value="7:30" unit="Am"></WeatherData>
          <WeatherData title="Sunset" value="6:30" unit="Pm"></WeatherData>
        </View>
      </View>

      <View style={styles.rightalign}>
        <Text style={styles.timezone}>Gold Coast, Australia</Text>
        <Text style={styles.latlong}>420.69Lo 620.8Le</Text>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

heading:{
fontSize: 45,
color: "cyan",
fontWeight: 'bold',
margin: 10,


},

subheading:{

fontSize: 20,
color: "darkcyan",
fontWeight: "300"

},

rightalign:{

textAlign: "right",
margin: 20,

},

timezone:{

color: "cyan",
fontSize: 15,

},


latlong:{

fontSize: 15,
color: "darkblue",


}


});


export default Datetime;
