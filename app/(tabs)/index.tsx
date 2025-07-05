import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useEffect } from "react";
import { router } from "expo-router";
import { useAllUser } from "@/context/userContext";
import { dataList, userList } from "@/data/data";
import { useAllData } from "@/context/dataContext";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default function TabOneScreen() {
  useEffect(() => {
    router.replace("/authentification/connexion");
  }, []);

  return null;
}
