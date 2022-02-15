import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../global/styles";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import HomeScreen from "../screens/HomeScreen";
import MyOrdersScreen from "../screens/MyOrdersScreen";
import MyAccountScreen from "../screens/MyAccountScreen";
import ClientStack from "./ClientStack";


const ClientTabs = createBottomTabNavigator();

export default function RootClientTabs() {
  return (
    <ClientTabs.Navigator
      tabBarOptions={{
        activeTintColor: colors.buttons,
      }}
    >
      <ClientTabs.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "Rûpela Malê",
          headerShown:false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" type="material" color={color} size={size} />
          ),
        }}
      />

      <ClientTabs.Screen
        name="ClientStack"
        component={ClientStack}
        options={{
          tabBarLabel: "Gerr",
          headerShown:false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="search" type="material" color={color} size={size} />
          ),
        }}
      />

      <ClientTabs.Screen
        name="MyOrdersScreen"
        component={MyOrdersScreen}
        options={{
          tabBarLabel: "Emrên min",
          headerShown:false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="view-list" type="material" color={color} size={size} />
          ),
        }}
      />

      <ClientTabs.Screen
        name="MyAccountScreen"
        component={MyAccountScreen}
        options={{
          tabBarLabel: "Hesabê min",
          headerShown:false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="person" type="material" color={color} size={size} />
          ),
        }}
      />

    </ClientTabs.Navigator>
  );
}


