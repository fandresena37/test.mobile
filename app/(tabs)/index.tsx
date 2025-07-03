import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import Accueil from "./components/Accueil";
// import "../global.css";
import Connexion from "../authentification/connexion";
import Inscription from "../authentification/inscription";
import Home from "../Accueil/home";
// import Navigation from "./components/Navigation";
const Stack = createNativeStackNavigator();
export default function TabOneScreen() {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="connexion" component={Connexion} />
      <Stack.Screen name="inscription" component={Inscription} />
      <Stack.Screen name="home" component={Home} />
    </Stack.Navigator>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: "bold",
//   },
//   separator: {
//     marginVertical: 30,
//     height: 1,
//     width: "80%",
//   },
// });
