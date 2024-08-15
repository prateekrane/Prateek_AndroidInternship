import react from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screen/home";
import Settings from "../screen/notification";
import Camera from "../screen/Camera";
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// const StackScreen = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Camera_Stack"
//         component={Camera}
//         options={{
//           headerShown: false,
//         }}
//       />
//     </Stack.Navigator>
//   );
// };
const Root = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen
        name="Camera"
        component={Camera}
        options={{ drawerItemStyle: { display: "none" } }}
      />
    </Drawer.Navigator>
  );
};

export default Root;
