import { View } from "@/components/Themed";
import { Image, TextInput, TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
export default function AddImagePath() {
  return (
    <>
      <View style={addImageStyle.container}>
        <View style={{ width: "95%", padding: 20, borderRadius: 8 }}>
          <View>
            <Text style={addImageStyle.titleStyle}>Ajout</Text>
            <Text style={addImageStyle.descStyle}>
              Ajouter l'image du produit
            </Text>
          </View>
          <View style={addImageStyle.containerForm}>
            <TextInput
              style={addImageStyle.InputStyle}
              placeholder="path image"
            />
            <Image
              source={require("../../assets/images/1.jpeg")}
              style={addImageStyle.imageStyle}
            />
            <TouchableOpacity style={addImageStyle.ButtonStyle}>
              <Text style={addImageStyle.TextButtonStyle}>Ajouter l'image</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}

const addImageStyle = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(243, 243, 243)",
    marginVertical: 20,
  },
  InputStyle: {
    width: "100%",
    height: 35,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "rgba(238, 238, 238, 0.7)",
    fontSize: 12,
    paddingLeft: 10,
    paddingRight: 10,
    fontWeight: "medium",
  },
  titleStyle: {
    textAlign: "center",
    color: "rgb(0, 132, 255)",
    fontSize: 20,
    fontWeight: "bold",
  },
  descStyle: {
    textAlign: "center",
    color: "gray",
    fontSize: 12,
    marginBottom: 20,
  },
  ButtonStyle: {
    width: "100%",
    height: 35,
    borderRadius: 8,
    backgroundColor: "rgb(0, 132, 255)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  TextButtonStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 13,
  },
  containerForm: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  imageStyle: { width: "100%", height: 300, borderRadius: 10 },
});
