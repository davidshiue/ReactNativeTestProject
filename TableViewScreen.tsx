import React from 'react';
import { FlatList, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// 假設使用 ChevronRight 圖標，若無安裝可用文字 ">" 代替
import { ChevronRight, Settings, Bell, Lock, CircleUser } from 'lucide-react-native';

const DATA = [
  { id: '1', title: '個人資料', icon: <CircleUser size={20} color="#007AFF" /> },
  { id: '2', title: '通知設定', icon: <Bell size={20} color="#FF9500" /> },
  { id: '3', title: '隱私權', icon: <Lock size={20} color="#34C759" /> },
  { id: '4', title: '一般設定', icon: <Settings size={20} color="#8E8E93" /> },
];

const TableViewScreen = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => console.log(item.title)}>
      {/* 左側圖標容器 */}
      <View style={styles.leftContainer}>
        <View style={styles.iconWrapper}>
          {item.icon}
        </View>
        <Text style={styles.title}>{item.title}</Text>
      </View>

      {/* 右側箭頭 */}
      <ChevronRight size={20} color="#C7C7CC" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7', // iOS 系統背景色
    paddingTop: 60,
  },
  item: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: 'row', // 水平排列
    alignItems: 'center', // 垂直置中
    justifyContent: 'space-between', // 左右兩端對齊
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    marginRight: 15,
    width: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 17,
    color: '#000',
  },
  separator: {
    height: 0.5,
    backgroundColor: '#C6C6C8',
    marginLeft: 60, // 讓線條從文字處開始，不穿透圖標（典型 iOS 風格）
  },
});

export default TableViewScreen;