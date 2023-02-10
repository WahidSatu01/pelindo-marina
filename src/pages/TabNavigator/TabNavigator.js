import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import HomeScreen from "../HomeScreen";
import EventScreen from "../EventScreen";
import AccountScreen from "../AccountScreen";
import ContactScreen from "../ContactSCreen";

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      activeColor="#1565c0"
      inactiveColor="#e3f2fd"
      barStyle={{ backgroundColor: "#2196f3" }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Event"
        component={EventScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="calendar" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="face-agent" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
