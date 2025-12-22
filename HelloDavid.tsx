export default function HelloDavid() {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: safeAreaInsets.top }]}>
      <Text style={styles.title}>Hello David 👋</Text>

      <Button
        title="按我一下"
        onPress={() => alert("你按到按鈕了!")}
      />
    </View>
  );
}
