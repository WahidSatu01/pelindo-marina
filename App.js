import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./src/pages/TabNavigator/TabNavigator";
import LoginScreen from "./src/pages/LoginScreen";
import HomeScreen from "./src/pages/HomeScreen";
import EventScreen from "./src/pages/EventScreen";
import AccountScreen from "./src/pages/AccountScreen";
import ContactScreen from "./src/pages/ContactSCreen";
import LoginAPI from "./src/pages/LoginAPI";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="EventScreen" component={EventScreen} />
        <Stack.Screen name="AccountScreen" component={AccountScreen} />
        <Stack.Screen name="ContactScreen" component={ContactScreen} />
        {/* <Stack.Screen name="LoginAPI" component={LoginAPI} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
