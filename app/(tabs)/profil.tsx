import { View } from "@/components/Themed";
import { StyleSheet, Text } from "react-native";
import { Image } from "react-native";
export default function Profil() {
    return (
        <View style={profilStyle.container}>
            <View style={{width:"90%",height:"auto",borderRadius:8}}>
                <View style={{display:"flex",justifyContent:"center",alignItems:"center",width:120,height:120,backgroundColor:"white",borderRadius:60,marginBottom:20}}>
                    <Image source={require("../../assets/images/Sample_User_Icon.png")} style={profilStyle.imageStyle}/>
                </View>
                {/* <View> */}
                    <Text style={{color:"gray",fontSize:20}}>Nom d'utilisateur:fax</Text>
                    <Text>Email:fandresenarazafindratina@gmail.com</Text>
                {/* </View> */}
            </View>
        </View>
    )
}

const profilStyle = StyleSheet.create({
    container:{
        marginTop: 50,
        backgroundColor:"rgb(243, 243, 243)",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
    },
    imageStyle:{
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20,
    }
})