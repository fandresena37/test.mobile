import { View } from "@/components/Themed";
import { StyleSheet, Text } from "react-native"; 
export default function ViewItems({name,src,desc,price,stock,categories,vendeur}:{name:string,src:string,desc:string,price:number,stock:number,categories:string,vendeur:string}) {
    return (
        <>
            <View>
                <View style={ViewItemsStyle.container}>
                    <View>
                        {/* <img src={src} alt={name} style={{width: '100%', height: '100%'}} /> */}
                    </View>
                    <View>
                        <Text >{name}</Text>
                        <Text >{desc}</Text>
                        <Text >Prix: {price} Ar</Text>
                        <Text >Stock: {stock}</Text>
                        <Text >Catégorie: {categories}</Text>
                        <Text >Vendeur: {vendeur}</Text>
                    </View>
                </View>
            </View>
        </>
    )
}
const ViewItemsStyle = StyleSheet.create({
    container:{
        width:"100%",
        height:"100%",
        backgroundColor:"white",
        borderRadius:0,
        padding:20,
        position:"fixed",
        top:0,
        left:0,
        zIndex:1000,
    }
})