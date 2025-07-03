import { View } from "@/components/Themed";
import { StyleSheet, TouchableOpacity, Text, TextInput } from "react-native";

export default function Connexion({ navigation }) {
  return (
    <>
      <View style={connexionStyle.container}>
        <View style={connexionStyle.containerStyle}></View>
        <View style={connexionStyle.containerForm}>
          <Text style={connexionStyle.TextConnexion}>Connexion</Text>
          <Text style={connexionStyle.TextConnexionDesc}>
            se connecter avec votre compte
          </Text>
          <View>
            <Text style={connexionStyle.TextLabelStyle}>Email</Text>
          </View>
          <TextInput
            style={connexionStyle.InputStyle}
            placeholder="test@gmail.com"
            placeholderTextColor="gray"
          />
          <View>
            <Text style={connexionStyle.TextLabelStyle}>Nom d'utilisateur</Text>
          </View>
          <TextInput
            style={connexionStyle.InputStyle}
            placeholder="nom d'utilisateur"
            placeholderTextColor="gray"
          />
          <View>
            <Text style={connexionStyle.TextLabelStyle}>Mot de passe</Text>
          </View>
          <TextInput
            style={connexionStyle.InputStyle}
            placeholder="mot de passe"
            placeholderTextColor="gray"
          />
          <TouchableOpacity
            style={connexionStyle.ButtonStyle}
            onPress={() => navigation.navigate("home")}
          >
            <Text style={connexionStyle.TextButtonStyle}>se connecter</Text>
          </TouchableOpacity>
          <View>
            <Text style={connexionStyle.TextDescLinkStyle}>
              je n'ai pas de compte{" "}
            </Text>
            <TouchableOpacity
              style={{ display: "flex", alignItems: "center" }}
              onPress={() => navigation.navigate("inscription")}
            >
              <Text style={connexionStyle.TextLinkStyle}>s'inscrire</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}

const connexionStyle = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    position: "relative",
    backgroundColor: "rgba(241, 241, 241, 0.973)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  containerStyle: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "50%",
    backgroundColor: "rgb(0, 17, 255)",
  },
  containerForm: {
    width: "90%",
    height: "auto",
    borderRadius: 10,
    backgroundColor: "white",
    padding: 20,
    paddingTop: 30,
    display: "flex",
    gap: 10,
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
  ButtonStyle: {
    width: "100%",
    height: 35,
    borderRadius: 8,
    backgroundColor: "rgb(0, 17, 255)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  TextLabelStyle: {
    fontSize: 11,
    fontWeight: "medium",
    color: "rgb(51, 51, 51)",
  },
  TextButtonStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 13,
  },
  TextDescLinkStyle: {
    color: "gray",
    textAlign: "center",
    fontWeight: "medium",
    fontSize: 12,
    paddingTop: 6,
  },
  TextLinkStyle: {
    color: "rgb(0, 17, 255)",
    fontWeight: "medium",
    fontSize: 12,
  },
  TextConnexion: {
    textAlign: "center",
    fontSize: 20,
    color: "rgb(0, 17, 255)",
    fontWeight: "bold",
  },
  TextConnexionDesc: {
    textAlign: "center",
    fontSize: 12,
    color: "gray",
    fontWeight: "500",
  },
});
