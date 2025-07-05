import { Text } from "@/components/Themed";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
// import { Layers } from "lucide-react";
import { Svg, Path } from "react-native-svg";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useColorScheme } from "@/components/useColorScheme";
import { useEffect, useRef, useState } from "react";
import ProductItems from "../productComponent/productItems";
import ViewItems from "../productComponent/viewItems";
import DropDownPicker from "react-native-dropdown-picker";
import { dataType } from "@/type/data";
import { useAllData } from "@/context/dataContext";
export default function Home() {
  const { allData } = useAllData();
  const [dataSearch, setDataSearch] = useState<dataType[]>(allData);
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [viewState, setViewState] = useState<
    { state: boolean; data: dataType } | undefined
  >({
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
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Java", value: "java" },
    { label: "JavaScript", value: "js" },
  ]);

  const handleSearch = (text: string) => {
    if (text.trim() === "") {
      setDataSearch(allData);
    } else {
      const filteredData = allData.filter((item) =>
        item.nom.toLowerCase().includes(text.toLowerCase())
      );
      setDataSearch(filteredData);
    }
  };
  useEffect(() => {
    setDataSearch(allData);
  }, [allData]);
  return (
    <>
      {viewState?.state == true && (
        <ViewItems
          setViewState={setViewState}
          nom={viewState.data.nom}
          src={viewState.data.src}
          desc={viewState.data.desc}
          price={viewState.data.price}
          stock={viewState.data.stock}
          vendeur={viewState.data.vendeur}
          categories={viewState.data.categories}
        />
      )}
      <View style={homeStyle.container}>
        <View style={homeStyle.headerStyle}>
          <View>
            <Text style={homeStyle.headerTitleStyle}>Produits</Text>
            <Text style={homeStyle.headerDescStyle}>
              {allData.length} produits au total
            </Text>
          </View>
          <Svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <Path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" />
            <Path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" />
            <Path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" />
          </Svg>
        </View>
        <View style={homeStyle.ViewFilterStyle}>
          <TextInput
            style={homeStyle.InputSearchStyle}
            placeholder="recherche ..."
            autoFocus={false}
            onChange={(e) => {
              handleSearch(e.nativeEvent.text);
            }}
          />
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            style={homeStyle.ButtonFilterStyle}
            dropDownContainerStyle={{
              width: "50%",
              borderRadius: 8,
              backgroundColor: "white",
              borderColor: "rgba(238, 238, 238, 0.7)",
              position: "absolute",
            }}
            textStyle={{
              fontSize: 12,
              fontWeight: "medium",
              color: "gray",
            }}
            labelStyle={{
              fontSize: 12,
              fontWeight: "medium",
              color: "gray",
            }}
            placeholder="filtrer"
          />
        </View>

        <ScrollView
          contentContainerStyle={[
            homeStyle.ViewProduct,
            dataSearch.length == 0 && {
              justifyContent: "center",
              alignItems: "center",
              height: "80%",
            },
          ]}
          keyboardShouldPersistTaps="handled"
        >
          {dataSearch.map((items) => (
            <ProductItems
              nom={items.nom}
              src={items.src}
              price={items.price}
              desc={items.desc}
              categories={items.categories}
              vendeur={items.vendeur}
              stock={items.stock}
              id={items.id}
              key={items.id}
              setViewState={setViewState}
            />
          ))}

          {dataSearch.length != 0 && (
            <View style={homeStyle.ViewPagination}>
              <TouchableOpacity
                style={{
                  backgroundColor: "white",
                  padding: 5,
                  borderRadius: 20,
                }}
              >
                <Svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="gray"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <Path d="M6 8L2 12L6 16" />
                  <Path d="M2 12H22" />
                </Svg>
              </TouchableOpacity>
              <Text style={{ color: "gray", fontSize: 12, fontWeight: "700" }}>
                Page 1 à {Math.ceil(dataSearch.length / 5)}
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: "white",
                  padding: 5,
                  borderRadius: 20,
                }}
              >
                <Svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="gray"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <Path d="M18 8L22 12L18 16" />
                  <Path d="M2 12H22" />
                </Svg>
              </TouchableOpacity>
            </View>
          )}
          {dataSearch.length == 0 && (
            <View>
              <Text style={{ color: "gray", fontSize: 20 }}>
                Aucune produit trouvés
              </Text>
            </View>
          )}
        </ScrollView>
      </View>
    </>
  );
}

const homeStyle = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "rgb(243, 243, 243)",
    height: "100%",
  },
  headerStyle: {
    marginTop: 50,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
  },
  headerTitleStyle: {
    fontSize: 20,
  },
  headerDescStyle: {
    fontSize: 12,
    color: "gray",
  },
  InputSearchStyle: {
    height: 40,
    minWidth: "50%",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "rgba(238, 238, 238, 0.7)",
    fontSize: 12,
    paddingLeft: 10,
    paddingRight: 10,
    fontWeight: "medium",
    backgroundColor: " rgb(247, 247, 247)",
  },
  ButtonFilterStyle: {
    minHeight: 40,
    width: "50%",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "rgba(238, 238, 238, 0.7)",
    backgroundColor: " rgb(247, 247, 247)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10,
  },
  ViewFilterStyle: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    justifyContent: "space-between",
    marginTop: 10,
  },
  ViewProduct: {
    width: "100%",
    marginTop: 20,
    display: "flex",
    gap: 20,
    paddingBottom: 30,
  },
  ViewPagination: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
});
