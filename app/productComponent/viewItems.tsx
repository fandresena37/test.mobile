import { View } from "@/components/Themed";
import { dataType } from "@/type/data";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native"; 
import {Svg,Path,Line} from "react-native-svg";
const imagePathRequire:{ [key: string]: any } = {
    "12.jpeg": require("../../assets/images/12.jpeg"),
    "486.jpg": require("../../assets/images/486.jpeg"),
    "15.jpeg": require("../../assets/images/15.jpeg"),
    "19.jpeg": require("../../assets/images/19.jpeg"),
    "489.jpeg": require("../../assets/images/489.jpeg"),
    "481.jpeg": require("../../assets/images/481.jpeg"),
}
export default function ViewItems({name,src,desc,price,stock,categories,vendeur,setViewState}:{name:string,src:string,desc:string,price:number,stock:number,categories:string,vendeur:string,setViewState:React.Dispatch<React.SetStateAction<{state:boolean,data:dataType} | undefined>>}) {
    return (
        <>
            <View>
                <ScrollView style={ViewItemsStyle.container}>
                    <View style={{display:"flex",flexDirection:"column",width:"100%",height:"100%",justifyContent:"space-between"}}>
                        <View>
                            <TouchableOpacity style={{backgroundColor:"rgb(0, 132, 255)", padding:8, borderRadius:8,width:35,height:35,display:"flex",justifyContent:"center",alignItems:"center"}} onPress={()=>{
                                setViewState({state:false,data:{id:"",name:"",src:"",desc:"",price:0,stock:0,categories:"",vendeur:""}});
                            }}>
                                <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><Path d="M6 8L2 12L6 16"/><Path d="M2 12H22"/></Svg>
                            </TouchableOpacity>
                            <View style={{display:"flex",alignItems:"center",width:"100%",marginTop:20}}>
                                <Image source={imagePathRequire[src]} style={{width:"100%",height:300,borderRadius:10}} />
                            </View>
                            <View style={{display:"flex",flexDirection:"column",gap:10,marginTop:20}}>
                                <Text style={{fontSize:30,fontWeight:"700"}}>{name}</Text>
                                <Text style={{fontSize:12,color:"gray"}}>{desc}</Text>
                                <Text style={{color:"green",fontWeight:"bold",fontSize:20}}>Prix: {price} Ar</Text>
                                <Text style={{fontSize:12,color:"gray"}}>Stock: {stock}</Text>
                                <Text style={{fontSize:12,color:"gray"}}>Catégorie: {categories}</Text>
                                <Text style={{fontSize:12,color:"gray"}}>Vendeur: {vendeur}</Text>
                            </View>
                        </View>
                        <View style={ViewItemsStyle.ButtonContainerStyle}>
                            <TouchableOpacity style={ViewItemsStyle.ButtonEditStyle}>
                                <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><Path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><Path d="m15 5 4 4"/></Svg>
                            </TouchableOpacity>
                            <TouchableOpacity style={ViewItemsStyle.ButtonRemoveStyle} >
                                <Svg  width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><Path d="M3 6h18"/><Path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><Path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><Line x1="10" x2="10" y1="11" y2="17"/><Line x1="14" x2="14" y1="11" y2="17"/></Svg>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </>
    )
}
const ViewItemsStyle = StyleSheet.create({
    container:{
        position:"fixed",
        width:"100%",
        height:"100%",
        backgroundColor:"white",
        borderRadius:0,
        padding:20,
        top:0,
        left:0,
        zIndex:9999,
        elevation:10,
        marginTop:50,
    },
    ButtonEditStyle:{
        backgroundColor:"rgb(0, 132, 255)",
        width:40,
        height:40,
        borderRadius:10,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        color:"white"
    },
    ButtonRemoveStyle:{
        backgroundColor:"red",
        width:40,
        height:40,
        borderRadius:10,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        color:"white"
    },
    ButtonContainerStyle:{
        display:"flex",
        flexDirection:"row",
        width:"100%",
        justifyContent:"space-between",
        marginBottom:100,
    },
})