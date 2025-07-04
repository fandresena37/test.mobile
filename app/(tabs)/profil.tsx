import { View } from "@/components/Themed";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, TouchableOpacity } from "react-native";
import { StyleSheet, Text, TextInput } from "react-native";
import { Image } from "react-native";
export default function Profil() {
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
    <KeyboardAvoidingView
      style={profilStyle.container}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      {/* <View style={profilStyle.container}> */}
      <View style={profilStyle.containerProfilStyle}>
        <View>
          <Text style={profilStyle.titleStyle}>Profil</Text>
          <Text style={profilStyle.descStyle}>
            gerer votre profil d'utilisateur
          </Text>
        </View>
        <View style={profilStyle.containerImageStyle}>
          <Image
            source={require("../../assets/images/Sample_User_Icon.png")}
            style={profilStyle.imageStyle}
          />
        </View>
        <View style={profilStyle.containerInputStyle}>
          <View style={profilStyle.ViewLabelStyle}>
            <Text style={profilStyle.TextLabelStyle}>Nom d'utilisateur</Text>
            <Text
              style={
                !errorUsername.state
                  ? profilStyle.InputLabelErrorStyle
                  : profilStyle.InputLabelValideStyle
              }
            >
              {errorUsername.message}
            </Text>
          </View>
          <TextInput
            style={profilStyle.InputStyle}
            placeholder="nom d'utilisateur"
            placeholderTextColor="gray"
            onChange={(e) => handleChangeUsername(e.nativeEvent.text)}
          />
          <View style={profilStyle.ViewLabelStyle}>
            <Text style={profilStyle.TextLabelStyle}>Email</Text>
            <Text
              style={
                !errorEmail.state
                  ? profilStyle.InputLabelErrorStyle
                  : profilStyle.InputLabelValideStyle
              }
            >
              {errorEmail.message}
            </Text>
          </View>
          <TextInput
            style={profilStyle.InputStyle}
            placeholder="Email"
            placeholderTextColor="gray"
            onChange={(e) => handleChangeEmail(e.nativeEvent.text)}
          />
          <TouchableOpacity style={profilStyle.ButtonStyle}>
            <Text style={profilStyle.TextButtonStyle}>Modifier</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* </View> */}
    </KeyboardAvoidingView>
  );
}

const profilStyle = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(243, 243, 243)",
    marginTop: 20,
  },
  containerProfilStyle: {
    width: "95%",
    height: "auto",
    borderRadius: 8,
    padding: 20,
    display: "flex",
    alignItems: "center",
  },
  containerImageStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 120,
    height: 120,
    backgroundColor: "rgb(243,243,243)",
    borderRadius: 60,
    marginBottom: 20,
  },
  imageStyle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
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
  containerInputStyle: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 10,
    marginTop: 20,
  },
  ViewLabelStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  TextLabelStyle: {
    fontSize: 11,
    fontWeight: "medium",
    color: "rgb(51, 51, 51)",
  },
  ButtonStyle: {
    width: "100%",
    height: 35,
    borderRadius: 8,
    backgroundColor: "rgb(0, 132, 255)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  TextButtonStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 13,
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
});
