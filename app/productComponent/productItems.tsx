import { View } from "@/components/Themed";
import { Image, Text, TouchableOpacity } from "react-native";
import {Svg,Path,Line,Circle} from 'react-native-svg'
import { StyleSheet} from "react-native";
export default function ProductItems(){
    return (
        <>
            <View style={ProductStyle.container}>
                <Image source={require('../../assets/images/chaussure.jpeg')} style={ProductStyle.imageStyle} resizeMode="cover"/>
                <Text style={{color:"green",fontSize:20,fontWeight:"bold"}}>30 000 Ar</Text>
                <Text style={{fontSize:12,color:"gray"}}>chaussure très classe</Text>
                <View style={ProductStyle.ButtonContainerStyle}>
                    <TouchableOpacity style={ProductStyle.ButtonEditStyle}>
                        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><Path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><Path d="m15 5 4 4"/></Svg>
                    </TouchableOpacity>
                    <TouchableOpacity style={ProductStyle.ButtonViewStyle}>
                        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><Path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><Circle cx="12" cy="12" r="3"/></Svg>
                    </TouchableOpacity>
                    <TouchableOpacity style={ProductStyle.ButtonRemoveStyle}>
                        <Svg  width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><Path d="M3 6h18"/><Path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><Path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><Line x1="10" x2="10" y1="11" y2="17"/><Line x1="14" x2="14" y1="11" y2="17"/></Svg>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

const ProductStyle = StyleSheet.create({
    container:{
        width:"100%",
        height:280,
        borderRadius:10,
        padding:20,
        marginBottom:20,
    },
    imageStyle:{
        width:"100%",
    },
    ButtonContainerStyle:{
        display:"flex",
        flexDirection:"row",
        width:"100%",
        justifyContent:"space-between",
        marginTop:10,

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
    ButtonViewStyle:{
        backgroundColor:"green",
        width:40,
        height:40,
        borderRadius:10,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        color:"white"
    }
})