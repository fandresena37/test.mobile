import { View } from "@/components/Themed";
import { userType } from "@/type/data";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useState } from "react";
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
import ModalValide from "./modalValide";

export default function Inscription() {
  const { allUser, setAllUser } = useAllUser();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isValide, setIsValide] = useState(false);
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
  const [errorPasswordConfirm, setErrorPasswordConfirm] = useState<{
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
  const handleChangePasswordConfirm = (text: string) => {
    if (text.trim() === "") {
      setErrorPasswordConfirm({
        state: false,
        message: "veulliez remplir le champ",
      });
    } else if (text != password) {
      setErrorPasswordConfirm({
        state: false,
        message: "mot de passe non conforme",
      });
    } else {
      setErrorPasswordConfirm({ state: true, message: "Valide" });
    }
  };
  const handleInscription = async () => {
    if (
      !errorEmail.state ||
      !errorUsername.state ||
      !errorPassword.state ||
      !errorPasswordConfirm.state
    ) {
      setIsError({
        state: true,
        message: "information saisi invalide",
      });
      return;
    } else if (
      email.trim() === "" ||
      username.trim() === "" ||
      password.trim() === "" ||
      passwordConfirm.trim() === ""
    ) {
      setIsError({ state: true, message: "veuillez remplir tous les champs" });
      return;
    }
    const user = allUser.find((user) => user.username === username);
    if (user) {
      setIsError({ state: true, message: "nom d'utilisateur déjà utilisé" });
      return;
    } else {
      const newUser: userType = {
        id: allUser[allUser.length - 1].id + 1,
        email: email,
        username: username,
        password: password,
      };
      setAllUser([...allUser, newUser]);
      setIsValide(true);
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
      {isValide && (
        <ModalValide
          handle={() => {
            setIsValide(false);
            router.push("/authentification/connexion");
          }}
          title="Inscription Reussi"
        />
      )}
      <KeyboardAvoidingView
        style={inscriptionStyle.container}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <View style={inscriptionStyle.containerForm}>
          <View>
            <Text style={inscriptionStyle.TextInscription}>Inscription</Text>
            <Text style={inscriptionStyle.TextInscriptionDesc}>
              Crée de nouveau compte
            </Text>
          </View>
          <View style={inscriptionStyle.ViewLabelStyle}>
            <Text style={inscriptionStyle.TextLabelStyle}>Email</Text>
            <Text
              style={
                !errorEmail.state
                  ? inscriptionStyle.InputLabelErrorStyle
                  : inscriptionStyle.InputLabelValideStyle
              }
            >
              {errorEmail.message}
            </Text>
          </View>
          <TextInput
            style={inscriptionStyle.InputStyle}
            placeholder="test@gmail.com"
            placeholderTextColor="gray"
            onChange={(e) => handleChangeEmail(e.nativeEvent.text)}
            onChangeText={(e) => setEmail(e)}
            autoCapitalize="none"
          />
          <View style={inscriptionStyle.ViewLabelStyle}>
            <Text style={inscriptionStyle.TextLabelStyle}>
              Nom d'utilisateur
            </Text>
            <Text
              style={
                !errorUsername.state
                  ? inscriptionStyle.InputLabelErrorStyle
                  : inscriptionStyle.InputLabelValideStyle
              }
            >
              {errorUsername.message}
            </Text>
          </View>
          <TextInput
            style={inscriptionStyle.InputStyle}
            placeholder="nom d'utilisateur"
            placeholderTextColor="gray"
            onChange={(e) => handleChangeUsername(e.nativeEvent.text)}
            onChangeText={(e) => setUsername(e)}
            autoCapitalize="none"
          />
          <View style={inscriptionStyle.ViewLabelStyle}>
            <Text style={inscriptionStyle.TextLabelStyle}>Mot de passe</Text>
            <Text
              style={
                !errorPassword.state
                  ? inscriptionStyle.InputLabelErrorStyle
                  : inscriptionStyle.InputLabelValideStyle
              }
            >
              {errorPassword.message}
            </Text>
          </View>
          <TextInput
            style={inscriptionStyle.InputStyle}
            placeholder="mot de passe"
            placeholderTextColor="gray"
            onChange={(e) => handleChangePassword(e.nativeEvent.text)}
            onChangeText={(e) => setPassword(e)}
            secureTextEntry={true}
            autoCapitalize="none"
          />
          <View style={inscriptionStyle.ViewLabelStyle}>
            <Text style={inscriptionStyle.TextLabelStyle}>
              Confirmer le mot de passe
            </Text>
            <Text
              style={
                !errorPasswordConfirm.state
                  ? inscriptionStyle.InputLabelErrorStyle
                  : inscriptionStyle.InputLabelValideStyle
              }
            >
              {errorPasswordConfirm.message}
            </Text>
          </View>
          <TextInput
            style={inscriptionStyle.InputStyle}
            placeholder="confirmation"
            placeholderTextColor="gray"
            onChange={(e) => handleChangePasswordConfirm(e.nativeEvent.text)}
            onChangeText={(e) => setPasswordConfirm(e)}
            secureTextEntry={true}
            autoCapitalize="none"
          />
          <TouchableOpacity
            style={inscriptionStyle.ButtonStyle}
            onPress={handleInscription}
          >
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
      </KeyboardAvoidingView>
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
