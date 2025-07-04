import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Home from "./Accueil/home";
import Connexion from "../authentification/connexion";
import { useEffect } from "react";
import { router } from "expo-router";
// import Accueil from "./components/Accueil";
// import "../global.css";
// import Connexion from "../authentification/connexion";
// import Inscription from "../authentification/inscription";
// import Home from "../Accueil/home";
// import Navigation from "./components/Navigation";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default function TabOneScreen() {
  // return (
    // <Stack.Navigator
    //   initialRouteName="connexion"
    //   screenOptions={{ headerShown: false }}
    // >
    //   <Stack.Screen name="connexion" component={Connexion} />
    //   <Stack.Screen name="inscription" component={Inscription} />
    //   <Stack.Screen name="home" component={Home} />
    // </Stack.Navigator>
    // <Home/>
    useEffect(() => {
      router.replace("/authentification/connexion");
    }, []);
  
    return null;
  // );
}
