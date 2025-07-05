import { View } from "@/components/Themed";
import { userType } from "@/type/data";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { KeyboardAvoidingView, Platform, TouchableOpacity } from "react-native";
import { StyleSheet, Text, TextInput } from "react-native";
import { Image } from "react-native";
import ModalError from "../authentification/modalError";
import ModalValide from "../authentification/modalValide";
import * as FileSystem from "expo-file-system";
import { useAllUser } from "@/context/userContext";
import { Svg, Path } from "react-native-svg";
import { router } from "expo-router";
export default function Profil() {
  const { allUser, setAllUser } = useAllUser();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [isError, setIsError] = useState<{
    state: boolean;
    message: string;
  }>({
    state: false,
    message: "",
  });
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
  const handleModifier = async () => {
    if (!errorEmail.state || !errorUsername.state) {
      setIsError({ state: true, message: "information saisi invalide" });
      return;
    } else if (email.trim() === "" || username.trim() === "") {
      setIsError({ state: true, message: "veuillez remplir tous les champs" });
      return;
    } else {
      var isExist = false;
      const userActif = await AsyncStorage.getItem("userData");
      allUser.find((user) => {
        if (
          userActif &&
          user.username === username &&
          user.username !== JSON.parse(userActif).username
        ) {
          setIsError({
            state: true,
            message: "nom d'utilisateur déjà utilisé",
          });
          setUsername(JSON.parse(userActif).username);
          isExist = true;
        }
      });
      if (!isExist) {
        const user = await AsyncStorage.getItem("userData");
        const userData: userType = {
          id: user ? JSON.parse(user).id : "",
          email: email,
          username: username,
          password: user ? JSON.parse(user).password : "",
        };
        await AsyncStorage.setItem("userData", JSON.stringify(userData));
        const newUser = allUser.map((user) => {
          if (user.id == userData.id) {
            user.email = email;
            user.username = username;
          }
          return user;
        });
        setAllUser(newUser);
        console.log(newUser);
        setIsValide(true);
      }
    }
  };
  useEffect(() => {
    const getUser = async () => {
      const user = await AsyncStorage.getItem("userData");
      if (user) {
        setEmail(JSON.parse(user).email);
        setUsername(JSON.parse(user).username);
      }
    };
    getUser();
  }, []);
  return (
    <>
      {isError.state && (
        <ModalError
          message={isError.message}
          setIsError={setIsError}
          title="Erreur"
        />
      )}
      {isValide && (
        <ModalValide
          handle={() => setIsValide(false)}
          title="Modification réussie"
        />
      )}
      <KeyboardAvoidingView
        style={profilStyle.container}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <View style={profilStyle.containerProfilStyle}>
          <TouchableOpacity
            style={profilStyle.logOutStyle}
            onPress={() => {
              router.push("/authentification/connexion");
            }}
          >
            <Svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <Path d="m16 17 5-5-5-5" />
              <Path d="M21 12H9" />
              <Path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            </Svg>
          </TouchableOpacity>
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
              onChangeText={(e) => setUsername(e)}
              defaultValue={username}
              editable={isEdit}
              autoCapitalize="none"
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
              onChangeText={(e) => setEmail(e)}
              defaultValue={email}
              editable={isEdit}
              autoCapitalize="none"
            />
            <TouchableOpacity
              style={profilStyle.ButtonStyle}
              onPress={() => (!isEdit ? setIsEdit(!isEdit) : handleModifier())}
            >
              <Text style={profilStyle.TextButtonStyle}>
                {!isEdit ? "Editer" : "Modifier"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
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
  logOutStyle: {
    position: "absolute",
    top: 3,
    right: 3,
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(238, 238, 238, 0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
