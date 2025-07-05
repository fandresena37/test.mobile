import { View } from "@/components/Themed";
import { imagePathRequire } from "@/data/data";
import { dataType } from "@/type/data";
import { useEffect, useState } from "react";
import {
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { Svg, Path, Line } from "react-native-svg";
import ModalConfirmation from "./modalConfirmation";
import { useAllData } from "@/context/dataContext";
import EditProduct from "./editProduct";
export default function ViewItems({
  id,
  setViewState,
}: {
  id: number;
  setViewState: React.Dispatch<
    React.SetStateAction<{ state: boolean; data: dataType } | undefined>
  >;
}) {
  const [isConfirm, setIsConfirm] = useState(false);
  const [nameProduct, setNameProduct] = useState("");
  const [price, setPrice] = useState<number | null>(null);
  const [stock, setStock] = useState<number | null>(null);
  const [categories, setCategories] = useState("Autre");
  const [vendeur, setVendeur] = useState("");
  const [description, setDescription] = useState("");
  const [imageSrc, setImageSrc] = useState("");
  const { allData, setAllData } = useAllData();
  const handleDeleteData = () => {
    const newData = allData.filter((item) => item.id !== id);
    setAllData(newData);
  };
  const [isEdit, setIsEdit] = useState(false);
  useEffect(() => {
    const data = allData.find((items) => items.id == id);
    setNameProduct(data ? data.nom : "");
    setCategories(data ? data.categories : "");
    setDescription(data ? data.desc : "");
    setPrice(data ? data.price : 0);
    setStock(data ? data.stock : 0);
    setVendeur(data ? data.vendeur : "");
    setImageSrc(data ? data.src : "");
  }, [allData]);
  return (
    <>
      {isEdit && <EditProduct id={id} setIsEdit={setIsEdit} />}
      {isConfirm && (
        <ModalConfirmation
          id={id}
          handleNo={() => setIsConfirm(false)}
          handleYes={() => {
            handleDeleteData();
            setIsConfirm(false);
            setViewState({
              state: false,
              data: {
                id: 0,
                nom: "",
                src: "",
                desc: "",
                price: 0,
                stock: 0,
                categories: "",
                vendeur: "",
              },
            });
          }}
        />
      )}
      <Modal
        style={{ width: "100%", height: "100%" }}
        transparent={true}
        animationType="fade"
        visible={true}
      >
        <ScrollView
          contentContainerStyle={ViewItemsStyle.container}
          keyboardShouldPersistTaps="handled"
        >
          <View
            style={{
              width: "95%",
              borderRadius: 10,
              padding: 20,
            }}
          >
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
                setViewState({
                  state: false,
                  data: {
                    id: 0,
                    nom: "",
                    src: "",
                    desc: "",
                    price: 0,
                    stock: 0,
                    categories: "",
                    vendeur: "",
                  },
                });
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
              <Text style={ViewItemsStyle.titleStyle}>Detail</Text>
              <Text style={ViewItemsStyle.descStyle}>Detail d'un produit</Text>
            </View>
            <View
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                marginTop: 20,
              }}
            >
              <Image
                source={imagePathRequire[imageSrc]}
                style={{ width: "90%", height: 200, borderRadius: 10 }}
              />
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
                marginTop: 20,
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 24, fontWeight: "700" }}>
                  {nameProduct}
                </Text>
                <Text
                  style={{ color: "green", fontWeight: "bold", fontSize: 20 }}
                >
                  {price} Ar
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 16,
                  color: "gray",
                  textOverflow: "ellipsis",
                }}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {description}
              </Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: 10,
                  marginBottom: 20,
                }}
              >
                <Text style={{ fontSize: 12, color: "gray" }}>
                  Stock: {stock}
                </Text>
                <Text style={{ fontSize: 12, color: "gray" }}>
                  Catégorie: {categories}
                </Text>
                <Text style={{ fontSize: 12, color: "gray" }}>
                  Vendeur: {vendeur}
                </Text>
              </View>
            </View>
            <View style={ViewItemsStyle.ButtonContainerStyle}>
              <TouchableOpacity
                style={ViewItemsStyle.ButtonEditStyle}
                onPress={() => {
                  setIsEdit(true);
                }}
              >
                <Svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <Path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                  <Path d="m15 5 4 4" />
                </Svg>
              </TouchableOpacity>
              <TouchableOpacity
                style={ViewItemsStyle.ButtonRemoveStyle}
                onPress={() => setIsConfirm(true)}
              >
                <Svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <Path d="M3 6h18" />
                  <Path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                  <Path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                  <Line x1="10" x2="10" y1="11" y2="17" />
                  <Line x1="14" x2="14" y1="11" y2="17" />
                </Svg>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </Modal>
    </>
  );
}
const ViewItemsStyle = StyleSheet.create({
  container: {
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
  },
  ButtonEditStyle: {
    backgroundColor: "rgb(0, 132, 255)",
    width: 40,
    height: 40,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
  ButtonRemoveStyle: {
    backgroundColor: "red",
    width: 40,
    height: 40,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
  ButtonContainerStyle: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    gap: 5,
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
});
