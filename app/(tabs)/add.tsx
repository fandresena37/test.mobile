import { View } from "@/components/Themed";
import {
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import AddImagePath from "../productComponent/addImagePath";
export default function Add() {
  return (
    <>
      {/* <AddImagePath /> */}
      <KeyboardAvoidingView
        style={addStyle.container}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <View style={{ width: "95%", padding: 20, borderRadius: 8 }}>
          <View>
            <Text style={addStyle.titleStyle}>Ajout</Text>
            <Text style={addStyle.descStyle}>Ajouter de nouveau produit</Text>
          </View>
          <View style={addStyle.containerForm}>
            <TextInput
              style={addStyle.InputStyle}
              placeholder="nom du produit"
            />
            <TextInput
              style={addStyle.InputStyle}
              placeholder="prix en Ar"
              keyboardType="numeric"
            />
            <TextInput
              style={addStyle.InputStyle}
              placeholder="nombre en stock"
              keyboardType="numeric"
            />
            <TextInput style={addStyle.InputStyle} placeholder="catégories" />
            <TextInput
              style={addStyle.InputStyle}
              placeholder="nom du vendeur"
            />
            <TextInput
              style={addStyle.TextAreaStyle}
              placeholder="Description du produit ..."
              placeholderTextColor="gray"
              multiline={true}
              numberOfLines={5}
              textAlignVertical="top"
            />
            <TouchableOpacity style={addStyle.ButtonStyle}>
              <Text style={addStyle.TextButtonStyle}>Ajouter</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
}
const addStyle = StyleSheet.create({
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
  TextAreaStyle: {
    width: "100%",
    height: 80,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "rgba(238, 238, 238, 0.7)",
    fontSize: 12,
    paddingLeft: 10,
    paddingRight: 10,
    fontWeight: "medium",
  },
  containerForm: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
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
});
