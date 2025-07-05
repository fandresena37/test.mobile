import { View } from "@/components/Themed";
import { SetStateAction, useEffect, useState } from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  // ScrollView,
  Platform,
  KeyboardAvoidingView,
  Modal,
} from "react-native";
import ModalError from "../authentification/modalError";
import { useAllData } from "@/context/dataContext";
import ModalValide from "../authentification/modalValide";
import CategoriesItems from "../productComponent/categoriesItems";
import { Svg, Path, Line } from "react-native-svg";
import { dataType } from "@/type/data";
export default function EditProduct({
  id,
  setIsEdit,
}: {
  id: number;
  setIsEdit: React.Dispatch<SetStateAction<boolean>>;
}) {
  const { allData, setAllData } = useAllData();
  const [nameProduct, setNameProduct] = useState("");
  const [price, setPrice] = useState<number | null>(null);
  const [stock, setStock] = useState<number | null>(null);
  const [categories, setCategories] = useState("Autre");
  const [vendeur, setVendeur] = useState("");
  const [description, setDescription] = useState("");
  const [isError, setIsError] = useState<{ state: boolean; message: string }>({
    state: false,
    message: "",
  });
  const [isValide, setIsValide] = useState(false);
  const handleAddProduct = () => {
    console.log(nameProduct, price, stock, categories, vendeur, description);
    if (
      nameProduct.trim() === "" ||
      (price && price <= 0) ||
      (stock && stock < 0) ||
      categories.trim() === "" ||
      vendeur.trim() === "" ||
      description.trim() === ""
    ) {
      setIsError({
        state: true,
        message: "Veuillez remplir tous les champs correctement.",
      });
    } else {
      const newProduct: dataType[] = allData.map((data) => {
        if (data.id == id) {
          data.nom = nameProduct;
          data.desc = description;
          data.price = price ? price : 0;
          data.stock = stock ? stock : 0;
          data.categories = categories;
          data.vendeur = vendeur;
        }
        return data;
      });
      setAllData(newProduct);
      setIsValide(true);
    }
  };
  useEffect(() => {
    const data = allData.find((items) => items.id == id);
    setNameProduct(data ? data.nom : "");
    setCategories(data ? data.categories : "");
    setDescription(data ? data.desc : "");
    setPrice(data ? data.price : 0);
    setStock(data ? data.stock : 0);
    setVendeur(data ? data.vendeur : "");
  }, []);
  return (
    <>
      <Modal
        style={{ width: "100%", height: "100%" }}
        transparent={true}
        animationType="fade"
        visible={true}
      >
        <View
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            top: 0,
            left: 0,
            zIndex: 9999,
            elevation: 10,
          }}
        >
          {isError.state && (
            <ModalError
              title="Erreur d'ajout"
              message={isError.message}
              setIsError={setIsError}
            />
          )}
          {isValide && (
            <ModalValide
              title="Modification reussi"
              handle={() => {
                setIsValide(false);
                setIsEdit(false);
              }}
            />
          )}
          <KeyboardAvoidingView
            style={addStyle.container}
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <View style={{ width: "95%", padding: 20, borderRadius: 8 }}>
              <TouchableOpacity
                style={{
                  backgroundColor: "white",
                  padding: 10,
                  borderRadius: 20,
                  borderWidth: 1,
                  borderColor: "rgba(238, 238, 238, 0.7)",
                  width: 35,
                  height: 35,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: 10,
                  left: 10,
                  zIndex: 5,
                }}
                onPress={() => {
                  setIsEdit(false);
                }}
              >
                <Svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <Path d="M6 8L2 12L6 16" />
                  <Path d="M2 12H22" />
                </Svg>
              </TouchableOpacity>
              <View>
                <Text style={addStyle.titleStyle}>Modifier</Text>
                <Text style={addStyle.descStyle}>Modifier un produit</Text>
              </View>
              <View style={addStyle.containerForm}>
                <TextInput
                  style={addStyle.InputStyle}
                  placeholder="nom du produit"
                  value={nameProduct}
                  onChangeText={(text) => setNameProduct(text)}
                  autoCapitalize="none"
                />
                <TextInput
                  style={addStyle.InputStyle}
                  placeholder="prix en Ar"
                  keyboardType="numeric"
                  value={price ? price.toString() : ""}
                  onChangeText={(text) => setPrice(Number(text))}
                />
                <TextInput
                  style={addStyle.InputStyle}
                  placeholder="nombre en stock"
                  keyboardType="numeric"
                  value={stock ? stock.toString() : ""}
                  onChangeText={(text) => setStock(Number(text))}
                />
                <View
                  style={{
                    width: "100%",
                    height: 35,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={{ fontSize: 12, color: "gray" }}>
                    categories:
                  </Text>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      height: "70%",
                      gap: 10,
                    }}
                  >
                    <CategoriesItems
                      setSelectedValue={setCategories}
                      selectedValue={categories}
                      isAll={false}
                    />
                  </View>
                </View>
                <TextInput
                  style={addStyle.InputStyle}
                  placeholder="nom du vendeur"
                  value={vendeur}
                  onChangeText={(text) => setVendeur(text)}
                  autoCapitalize="none"
                />
                <TextInput
                  style={addStyle.TextAreaStyle}
                  placeholder="Description du produit ..."
                  placeholderTextColor="gray"
                  multiline={true}
                  numberOfLines={5}
                  textAlignVertical="top"
                  onChangeText={(text) => setDescription(text)}
                  autoCapitalize="none"
                  value={description}
                />
                <TouchableOpacity
                  style={addStyle.ButtonStyle}
                  onPress={handleAddProduct}
                >
                  <Text style={addStyle.TextButtonStyle}>Modifier</Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </View>
      </Modal>
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
