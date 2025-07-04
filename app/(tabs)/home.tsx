import { Text } from "@/components/Themed";
import { ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
// import { Layers } from "lucide-react";
import { Svg, Path } from "react-native-svg";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useColorScheme } from "@/components/useColorScheme";
import { useEffect } from "react";
import ProductItems from "../productComponent/productItems";
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function Home() {
  // useEffect(() => {
  //   router.replace("/authentification/connexion");
  // }, []);
  
    const colorScheme = useColorScheme();
    return(
    <>
    <View style={homeStyle.container}>
      <View style={homeStyle.headerStyle}>
        <View>
          <Text style={homeStyle.headerTitleStyle}>Produits</Text>
          <Text style={homeStyle.headerDescStyle}>54 produits au total</Text>
        </View>
        <Svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <Path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" />
          <Path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" />
          <Path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" />
        </Svg>
      </View>
      <View style={homeStyle.ViewFilterStyle}>
        <TextInput
          style={homeStyle.InputSearchStyle}
          placeholder="recherche ..."
        />
        <TouchableOpacity style={homeStyle.ButtonFilterStyle}>
          <Svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <Path d="M3 6h18" />
            <Path d="M7 12h10" />
            <Path d="M10 18h4" />
          </Svg>
        </TouchableOpacity>
      </View>
      <View style={homeStyle.ViewPagination}>
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><Path d="M6 8L2 12L6 16"/><Path d="M2 12H22"/></Svg>
        <Text>Page 1 à 30</Text>
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><Path d="M18 8L22 12L18 16"/><Path d="M2 12H22"/></Svg>
      </View>
      <ScrollView style={homeStyle.ViewProduct}>
        <ProductItems/>
        <ProductItems/>
        <ProductItems/>
        <ProductItems/>
      </ScrollView>
    </View>
    </>
  );
}

const homeStyle = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "rgb(243, 243, 243)",
    height: "100%",
  },
  headerStyle: {
    marginTop: 50,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTitleStyle: {
    fontSize: 20,
  },
  headerDescStyle: {
    fontSize: 12,
    color: "gray",
  },
  InputSearchStyle: {
    height: 40,
    width: "85%",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "rgba(238, 238, 238, 0.7)",
    fontSize: 12,
    paddingLeft: 10,
    paddingRight: 10,
    fontWeight: "medium",
    backgroundColor: " rgb(247, 247, 247)",
  },
  ButtonFilterStyle: {
    height: 40,
    width: 40,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "rgba(238, 238, 238, 0.7)",
    backgroundColor: " rgb(247, 247, 247)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  ViewFilterStyle: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    justifyContent: "space-between",
    marginTop: 30,
  },
  ViewProduct:{
    width:"100%",
    marginTop:30,
    display:"flex",
    gap:20,
  },
  ViewPagination:{
    display:"flex",
    flexDirection:"row",
    width:"100%",
    justifyContent:"space-between",
    alignItems:"center",
    marginTop:20,
  }
});
