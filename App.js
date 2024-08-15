import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Root from "./navigation/root";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Root />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({});
