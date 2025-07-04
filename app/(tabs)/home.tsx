import { Text } from "@/components/Themed";
import { ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
// import { Layers } from "lucide-react";
import { Svg, Path } from "react-native-svg";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useColorScheme } from "@/components/useColorScheme";
import { useEffect, useState } from "react";
import ProductItems from "../productComponent/productItems";
import { Picker } from "@react-native-picker/picker";
import data from "../../data/data.json";
import ViewItems from "../productComponent/viewItems";

import DropDownPicker from "react-native-dropdown-picker";
import { dataType } from "@/type/data";
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}
const testData={id:"EBSD",src:"12.jpeg",desc:"Ericson Black&White Snare Drum",price:25000,stock:20,categories:"guitar",vendeur:"fax",nom:"test"}
export default function Home() {
  const [selectedValue,setSelectedValue] = useState<string>("");
  const [viewState,setViewState] = useState<{state:boolean,data:dataType}|undefined>({state:false,data:{id:"",name:"",src:"",desc:"",price:0,stock:0,categories:"",vendeur:""}});
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Java", value: "java" },
    { label: "JavaScript", value: "js" },
  ]);
    return(
    <>
    {viewState?.state == true && <ViewItems setViewState={setViewState} name={viewState.data.name} src={viewState.data.src} desc={viewState.data.desc} price={viewState.data.price} stock={viewState.data.stock} vendeur={viewState.data.vendeur} categories={viewState.data.categories} />}
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
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          style={homeStyle.ButtonFilterStyle}
          dropDownContainerStyle={{width:"50%",borderRadius:8,backgroundColor:"white",borderColor:"rgba(238, 238, 238, 0.7)"}}
          textStyle={{fontSize:12,fontWeight:"medium",color:"gray"}}
          labelStyle={{fontSize:12,fontWeight:"medium",color:"gray"}}
          placeholder="filtrer"
        />
        {/* <Picker
        selectedValue={selectedValue}
        style={homeStyle.ButtonFilterStyle}
        onValueChange={(itemValue) => {
          console.log(itemValue)
          setSelectedValue(itemValue)
        }}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="Python" value="python" />
      </Picker> */}
        {/* <TouchableOpacity style={homeStyle.ButtonFilterStyle}>
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
        </TouchableOpacity> */}
      </View>
      
      <ScrollView style={homeStyle.ViewProduct}>
          {data.map((items)=>(
            <ProductItems name={items.nom} src={items.src} price={items.price} desc={items.desc} categories={items.categories} vendeur={items.vendeur} stock={items.stock} id={items.id} key={items.id} setViewState={setViewState}/>
          ))}

          <View style={homeStyle.ViewPagination}>
            <TouchableOpacity style={{backgroundColor:"white", padding:5, borderRadius:8}}>
              <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><Path d="M6 8L2 12L6 16"/><Path d="M2 12H22"/></Svg>
              </TouchableOpacity>
              <Text style={{color:"gray",fontSize:12,fontWeight:"700"}}>Page 1 à 30</Text>
              <TouchableOpacity  style={{backgroundColor:"white", padding:5, borderRadius:8}}>
              <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><Path d="M18 8L22 12L18 16"/><Path d="M2 12H22"/></Svg>
            </TouchableOpacity>
          </View>
        {/* <ProductItems/>
        <ProductItems/>
        <ProductItems/>
        <ProductItems/> */}
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
    position:"relative"
  },
  headerStyle: {
    marginTop: 50,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position:"relative"
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
    width: "50%",
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
    minHeight: 40,
    width: "50%",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "rgba(238, 238, 238, 0.7)",
    backgroundColor: " rgb(247, 247, 247)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10,
  },
  ViewFilterStyle: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    justifyContent: "space-between",
    marginTop: 10,
  },
  ViewProduct:{
    width:"100%",
    marginTop:20,
    display:"flex",
    gap:20,
    position:"relative",
  },
  ViewPagination:{
    display:"flex",
    flexDirection:"row",
    width:"100%",
    justifyContent:"space-between",
    alignItems:"center",
    marginVertical:10,
  }
});
