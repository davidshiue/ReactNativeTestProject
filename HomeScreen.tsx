import React from 'react';
import { StatusBar, StyleSheet, useColorScheme, View, Text, Button } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// 導入導航相關組件
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from "./styles";

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello David 👋</Text>
      <Button
        title="前往細節頁面"
        onPress={() => navigation.navigate('Details')} 
      />
      <Button
        title="前往Flex佈局"
        onPress={() => navigation.navigate('FlexBox')} 
      />
      <Button
        title="前往FlexDirection佈局"
        onPress={() => navigation.navigate('FlexDirection')} 
      />
    </View>
  );
}
