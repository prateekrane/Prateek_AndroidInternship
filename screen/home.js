import * as React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native";

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        onPress={() => navigation.navigate("Camera")}
        title="Click Photo"
      />
    </View>
  );
}

export default Home;
