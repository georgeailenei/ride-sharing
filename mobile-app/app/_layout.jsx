import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Slot } from "expo-router";

const RootLayout = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Slot />
      {/* Footer */}
    </View>
  );
};

export default RootLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
