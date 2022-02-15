import * as React from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { Icon } from "react-native-elements";
import { colors } from "../global/styles";

export default function BusinessConsoleScreen() {
  return (
    <View style={styles.container}>
      <Text>Welcome to Business Console</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
