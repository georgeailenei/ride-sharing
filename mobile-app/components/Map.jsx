import React from "react";
import MapView from "react-native-maps";
import { StyleSheet, View } from "react-native";
import { clujNapocaRegion } from "./regionsMockupData";

const TheMap = () => {
  return (
    <View>
      <MapView
        style={styles.map}
        initialRegion={clujNapocaRegion}
        showsUserLocation={true}
        showsMyLocationButton={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});

export default TheMap;
