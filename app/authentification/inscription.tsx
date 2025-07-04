import { View } from "@/components/Themed";
import {router} from "expo-router";
import { StyleSheet, TouchableOpacity, Text, TextInput } from "react-native";

export default function Inscription() {
  return (
    <>
      <View style={inscriptionStyle.container}>
        {/* <View style={inscriptionStyle.containerStyle}></View> */}
        <View style={inscriptionStyle.containerForm}>
          <View>
            <Text style={inscriptionStyle.TextInscription}>Inscription</Text>
            <Text style={inscriptionStyle.TextInscriptionDesc}>
              Crée de nouveau compte
            </Text>
          </View>
          <View>
            <Text style={inscriptionStyle.TextLabelStyle}>Email</Text>
          </View>
          <TextInput
            style={inscriptionStyle.InputStyle}
            placeholder="test@gmail.com"
            placeholderTextColor="gray"
          />
          <View>
            <Text style={inscriptionStyle.TextLabelStyle}>
              Nom d'utilisateur
            </Text>
          </View>
          <TextInput
            style={inscriptionStyle.InputStyle}
            placeholder="nom d'utilisateur"
            placeholderTextColor="gray"
          />
          <View>
            <Text style={inscriptionStyle.TextLabelStyle}>Mot de passe</Text>
          </View>
          <TextInput
            style={inscriptionStyle.InputStyle}
            placeholder="mot de passe"
            placeholderTextColor="gray"
          />
          <View>
            <Text style={inscriptionStyle.TextLabelStyle}>
              Confirmer le mot de passe
            </Text>
          </View>
          <TextInput
            style={inscriptionStyle.InputStyle}
            placeholder="confirmation"
            placeholderTextColor="gray"
          />
          <TouchableOpacity style={inscriptionStyle.ButtonStyle}>
            <Text style={inscriptionStyle.TextButtonStyle}>s'inscrire</Text>
          </TouchableOpacity>
          <View>
            <Text style={inscriptionStyle.TextDescLinkStyle}>
              je déja un compte{" "}
            </Text>
            <TouchableOpacity
              style={{ display: "flex", alignItems: "center" }}
              onPress={() => router.push("/authentification/connexion")}
            >
              <Text style={inscriptionStyle.TextLinkStyle}>se connecter</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}

const inscriptionStyle = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    position: "relative",
    backgroundColor: "rgb(0, 132, 255)",
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
    backgroundColor: "rgb(0, 132, 255)",
  },
  containerForm: {
    width: "90%",
    height: "auto",
    borderRadius: 10,
    backgroundColor: "white",
    padding: 20,
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
    backgroundColor: "rgb(0, 132, 255)",
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
    color: "rgb(0, 132, 255)",
    fontWeight: "medium",
    fontSize: 12,
  },
  TextInscription: {
    textAlign: "center",
    fontSize: 20,
    color: "rgb(0, 132, 255)",
    fontWeight: "bold",
  },
  TextInscriptionDesc: {
    textAlign: "center",
    fontSize: 12,
    color: "gray",
    fontWeight: "500",
  },
});
