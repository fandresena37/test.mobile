import { View } from "@/components/Themed";
import { router } from "expo-router";
import { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Platform,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
export default function Connexion() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState<{
    state: boolean;
    message: string;
  }>({
    state: false,
    message: "",
  });
  const [errorUsername, setErrorUsername] = useState<{
    state: boolean;
    message: string;
  }>({ state: false, message: "" });
  const [errorPassword, setErrorPassword] = useState<{
    state: boolean;
    message: string;
  }>({ state: false, message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const handleChangeEmail = (text: string) => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (text.trim() === "") {
      setErrorEmail({ state: false, message: "veulliez remplir le champ" });
    } else if (!regexEmail.test(text)) {
      setErrorEmail({ state: false, message: "Email invalide." });
    } else {
      setErrorEmail({ state: true, message: "Valide" });
      // Tu peux ici envoyer les données
    }
  };
  const handleChangeUsername = (text: string) => {
    if (text.trim() === "") {
      setErrorUsername({ state: false, message: "veulliez remplir le champ" });
    } else if (text.length < 3) {
      setErrorUsername({ state: false, message: "3 caractères minimum." });
    } else {
      setErrorUsername({ state: true, message: "Valide" });
      // Tu peux ici envoyer les données
    }
  };
  const handleChangePassword = (text: string) => {
    if (text.trim() === "") {
      setErrorPassword({ state: false, message: "veulliez remplir le champ" });
    } else if (text.length < 3) {
      setErrorPassword({ state: false, message: "8 caractères minimum." });
    } else {
      setErrorUsername({ state: true, message: "Valide" });
      // Tu peux ici envoyer les données
    }
  };

  return (
    <>
      <KeyboardAvoidingView
        style={connexionStyle.container}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        {/* <View style={connexionStyle.container}> */}
        <View style={connexionStyle.containerForm}>
          <Text style={connexionStyle.TextConnexion}>Connexion</Text>
          <Text style={connexionStyle.TextConnexionDesc}>
            se connecter avec votre compte
          </Text>
          <View style={connexionStyle.ViewLabelStyle}>
            <Text style={connexionStyle.TextLabelStyle}>Email</Text>
            <Text
              style={
                !errorEmail.state
                  ? connexionStyle.InputLabelErrorStyle
                  : connexionStyle.InputLabelValideStyle
              }
            >
              {errorEmail.message}
            </Text>
          </View>
          <TextInput
            style={connexionStyle.InputStyle}
            placeholder="test@gmail.com"
            placeholderTextColor="gray"
            onChange={(e) => handleChangeEmail(e.nativeEvent.text)}
          />
          <View style={connexionStyle.ViewLabelStyle}>
            <Text style={connexionStyle.TextLabelStyle}>Nom d'utilisateur</Text>
            <Text
              style={
                !errorUsername.state
                  ? connexionStyle.InputLabelErrorStyle
                  : connexionStyle.InputLabelValideStyle
              }
            >
              {errorUsername.message}
            </Text>
          </View>
          <TextInput
            style={connexionStyle.InputStyle}
            placeholder="nom d'utilisateur"
            placeholderTextColor="gray"
            onChange={(e) => handleChangeUsername(e.nativeEvent.text)}
          />
          <View style={connexionStyle.ViewLabelStyle}>
            <Text style={connexionStyle.TextLabelStyle}>Mot de passe</Text>
            <Text
              style={
                !errorPassword.state
                  ? connexionStyle.InputLabelErrorStyle
                  : connexionStyle.InputLabelValideStyle
              }
            >
              {errorPassword.message}
            </Text>
          </View>
          <TextInput
            style={connexionStyle.InputStyle}
            placeholder="mot de passe"
            placeholderTextColor="gray"
            onChange={(e) => handleChangePassword(e.nativeEvent.text)}
            secureTextEntry={true}
          />
          <TouchableOpacity
            style={connexionStyle.ButtonStyle}
            onPress={() => {
              console.log("ato");
              router.replace("/(tabs)/home");
            }}
          >
            <Text style={connexionStyle.TextButtonStyle}>se connecter</Text>
          </TouchableOpacity>
          <View>
            <Text style={connexionStyle.TextDescLinkStyle}>
              je n'ai pas de compte{" "}
            </Text>
            <TouchableOpacity
              style={{ display: "flex", alignItems: "center" }}
              onPress={() => router.push("/authentification/inscription")}
            >
              <Text style={connexionStyle.TextLinkStyle}>s'inscrire</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* </View> */}
      </KeyboardAvoidingView>
    </>
  );
}

const connexionStyle = StyleSheet.create({
  // scrollContainer: {
  //   flexGrow: 1,
  //   backgroundColor: "rgb(0, 17, 255)",
  //   justifyContent: "center",
  // },
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgb(0, 132, 255)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
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
  InputErrorStyle: {
    width: "100%",
    height: 35,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "red",
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
  TextConnexion: {
    textAlign: "center",
    fontSize: 20,
    color: "rgb(0, 132, 255)",
    fontWeight: "bold",
  },
  TextConnexionDesc: {
    textAlign: "center",
    fontSize: 12,
    color: "gray",
    fontWeight: "500",
  },
  InputLabelErrorStyle: {
    fontSize: 11,
    color: "red",
    fontWeight: "bold",
  },
  InputLabelValideStyle: {
    fontSize: 11,
    color: "green",
    fontWeight: "bold",
  },
  ViewLabelStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
