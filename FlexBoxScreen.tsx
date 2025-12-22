import React from "react";
import { StyleSheet, Text, View } from "react-native";

const FlexBoxScreen = () => {
  return (
    <View style={[styles.container, {
      // Try setting `flexDirection` to `"row"`.
      flexDirection: "column"
    }]}>
      <View style={{ flex: 1, backgroundColor: "red" }} />
      <View style={{ flex: 2, backgroundColor: "darkorange" }} />
      <View style={{ flex: 3, backgroundColor: "green" }} />
      <View style={{ flex: 4}} >
        <View style={[styles.container, {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: "row"
        }]}>
          <View style={{ flex: 1, backgroundColor: "red" }} />
          <View style={{ flex: 2, backgroundColor: "darkorange" }} />
          <View style={{ flex: 3, backgroundColor: "green" }} />
          <View style={{ flex: 4}} >
        
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default FlexBoxScreen;