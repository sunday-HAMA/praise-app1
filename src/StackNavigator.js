import { HomeScreen } from "./HomeScreen";
import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { SettingScreen } from "./SettingScreen";
import { VotesScreen } from "./VotesScreen";
import { NotificationsScreen } from "./NotificationsScreen";

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={SettingScreen} />
        <Stack.Screen name="Votes" component={VotesScreen} />
        <Stack.Screen name="Box" component={NotificationsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
