import { View } from "@/components/Themed";
import { router } from "expo-router";
import { use, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as FileSystem from "expo-file-system";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import ModalError from "./modalError";
import { useAllUser } from "@/context/userContext";
export default function Connexion() {
  const { allUser } = useAllUser();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState<{
    state: boolean;
    message: string;
  }>({
    state: true,
    message: "",
  });
  const [errorUsername, setErrorUsername] = useState<{
    state: boolean;
    message: string;
  }>({ state: true, message: "" });
  const [errorPassword, setErrorPassword] = useState<{
    state: boolean;
    message: string;
  }>({ state: true, message: "" });
  const [isError, setIsError] = useState<{ state: boolean; message: string }>({
    state: false,
    message: "",
  });
  const handleChangeEmail = (text: string) => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (text.trim() === "") {
      setErrorEmail({ state: false, message: "veulliez remplir le champ" });
    } else if (!regexEmail.test(text)) {
      setErrorEmail({ state: false, message: "Email invalide." });
    } else {
      setErrorEmail({ state: true, message: "Valide" });
    }
  };
  const handleChangeUsername = (text: string) => {
    if (text.trim() === "") {
      setErrorUsername({ state: false, message: "veulliez remplir le champ" });
    } else if (text.length < 3) {
      setErrorUsername({ state: false, message: "3 caractères minimum." });
    } else {
      setErrorUsername({ state: true, message: "Valide" });
    }
  };
  const handleChangePassword = (text: string) => {
    if (text.trim() === "") {
      setErrorPassword({ state: false, message: "veulliez remplir le champ" });
    } else if (text.length < 8) {
      setErrorPassword({ state: false, message: "8 caractères minimum." });
    } else {
      setErrorPassword({ state: true, message: "Valide" });
    }
  };

  const handleConnexion = async () => {
    if (!errorEmail.state || !errorUsername.state || !errorPassword.state) {
      setIsError({
        state: true,
        message: "information saisi invalide",
      });
      return;
    } else if (
      email.trim() === "" ||
      username.trim() === "" ||
      password.trim() === ""
    ) {
      setIsError({ state: true, message: "veuillez remplir tous les champs" });
      return;
    }
    const user = allUser.find(
      (user) =>
        user.email === email &&
        user.username === username &&
        user.password === password
    );
    console.log(allUser);
    if (user) {
      try {
        await AsyncStorage.setItem("userData", JSON.stringify(user));
        router.replace("/(tabs)/home");
      } catch (error) {
        console.log("Erreur de sauvegarde", error);
      }
    } else {
      setIsError({
        state: true,
        message: "nom d'utilisateur ou mot de passe incorrect",
      });
    }
  };
  return (
    <>
      {isError.state && (
        <ModalError
          message={isError.message}
          setIsError={setIsError}
          title="Erreur d'authentification"
        />
      )}
      <KeyboardAvoidingView
        style={connexionStyle.container}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
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
            onChangeText={(e) => setEmail(e)}
            keyboardType="email-address"
            autoCapitalize="none"
            editable={true}
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
            onChangeText={(e) => setUsername(e)}
            autoCapitalize="none"
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
            onChangeText={(e) => setPassword(e)}
            autoCapitalize="none"
          />
          <TouchableOpacity
            style={connexionStyle.ButtonStyle}
            onPress={() => {
              handleConnexion();
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
      </KeyboardAvoidingView>
    </>
  );
}

const connexionStyle = StyleSheet.create({
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
