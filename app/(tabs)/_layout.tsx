import React from "react";
import { Svg, Path,Circle } from "react-native-svg";
import {  Tabs } from "expo-router";

export default function TabLayout() {

  return (
    <Tabs
    screenOptions={{
      tabBarActiveTintColor: "rgb(0, 132, 255)",
      tabBarInactiveTintColor: "gray",
      tabBarIconStyle:{
        color:"gray"
      },
      headerShown: false,
      tabBarStyle: {
        backgroundColor: "rgb(243, 243, 243)",
        height: 60,
        borderTopWidth: 1,
        borderTopColor: "#ddd",
        paddingBottom:10,
      },
      tabBarLabelStyle: {
        fontSize: 12,
        fontWeight: "700",
      },
    }}
  >
    <Tabs.Screen
    name="index"
    options={{
      href: null,
    }}
  />
    <Tabs.Screen
      name="home"
      options={{
        title: "Accueil",
        tabBarIcon: ({color}) => (
          <Svg width="24" height="24" viewBox="0 0 24 24" fill={color} stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" >
            <Path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/>
            <Path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          </Svg>
        ),
      }}
    />

    <Tabs.Screen
      name="add"
      options={{
        title: "Ajouter",
        tabBarIcon: ({color}) => (
          <Svg width="24" height="24" viewBox="0 0 24 24" fill={color} stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <Path d="M5 12h14"/><Path d="M12 5v14"/>
          </Svg>
        ),
      }}
    />

    <Tabs.Screen
      name="profil"
      options={{
        title: "Profil",
        tabBarIcon: ({color}) => (
          <Svg width="24" height="24" viewBox="0 0 24 24" fill={color} stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <Path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
            <Circle cx="12" cy="7" r="4"/>
          </Svg>
        ),
      }}
    />
  </Tabs>
  );
}
