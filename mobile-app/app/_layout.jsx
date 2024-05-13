import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack>
      {/* Header */}
      <Stack.Screen name="index" options={{ title: "Home" }} />
      {/* Footer */}
    </Stack>
  );
};

export default RootLayout;
