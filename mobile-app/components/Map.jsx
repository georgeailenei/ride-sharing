import React, { useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View } from "react-native";
import { adjudRegion, clujNapocaRegion } from "./regionsMockupData";
import * as Location from "expo-location";

const TheMap = () => {
  const [initialRegion, setInitialRegion] = useState(null);

  useEffect(() => {
    (async () => {
      let location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;
      setInitialRegion({
        latitude,
        longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    })();
  }, []);

  return (
    <View>
      <MapView style={styles.map} region={clujNapocaRegion} showsTraffic={true}>
        <Marker
          coordinate={initialRegion}
          title="Locatia Cluj but it could be your location and change the icon for android"
        />
      </MapView>
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
