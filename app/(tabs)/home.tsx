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
import { Svg, Path } from "react-native-svg";
import { useEffect, useRef, useState } from "react";
import ProductItems from "../productComponent/productItems";
import ViewItems from "../productComponent/viewItems";
import { dataType } from "@/type/data";
import { useAllData } from "@/context/dataContext";
import CategoriesItems from "../productComponent/categoriesItems";
export default function Home() {
  const { allData } = useAllData();
  const [dataSearch, setDataSearch] = useState<dataType[]>(allData);
  const [selectedValue, setSelectedValue] = useState<string>("Tous");
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
  const searchRef = useRef<TextInput>(null);
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
        <ViewItems setViewState={setViewState} id={viewState.data.id} />
      )}
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss;
          searchRef.current?.blur;
          console.log("ato");
        }}
      >
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
              onChange={(e) => {
                handleSearch(e.nativeEvent.text);
              }}
              autoFocus={false}
              ref={searchRef}
            />
            <View
              style={{
                width: "100%",
                height: 35,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                paddingBottom: 8,
              }}
            >
              <CategoriesItems
                selectedValue={selectedValue}
                setSelectedValue={setSelectedValue}
              />
            </View>
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
            {dataSearch.length == 0 && (
              <View>
                <Text style={{ color: "gray", fontSize: 20 }}>
                  Aucune produit trouvés
                </Text>
              </View>
            )}
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
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
    minWidth: "100%",
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
    width: "23%",
    height: "100%",
    backgroundColor: "rgb(247, 247, 247)",
    borderColor: "rgba(238,238,238,0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
  },
  ViewFilterStyle: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
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
