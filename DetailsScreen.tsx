import React from 'react';
import { StatusBar, StyleSheet, useColorScheme, View, Text, Button } from 'react-native';

import styles from "./styles";

export default function DetailsScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>這是細節頁面 📄</Text>
      <Button
        title="返回上一頁"
        onPress={() => navigation.goBack()} 
      />  
    </View>
  );
}
