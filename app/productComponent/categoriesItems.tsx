import { SetStateAction } from "react";
import { StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native";

export default function CategoriesItems({
  selectedValue,
  setSelectedValue,
  isAll = true,
}: {
  selectedValue: string;
  setSelectedValue: React.Dispatch<SetStateAction<string>>;
  isAll?: boolean;
}) {
  return (
    <>
      {isAll && (
        <TouchableOpacity
          style={[
            categoriesStyle.ButtonFilterStyle,
            selectedValue == "Tous" ? { borderColor: "rgb(0, 132, 255)" } : {},
          ]}
          onPress={() => setSelectedValue("Tous")}
        >
          <Text
            style={[
              { fontSize: 11, color: "gray" },
              selectedValue == "Tous"
                ? { color: "rgb(0, 132, 255)", fontWeight: "bold" }
                : {},
            ]}
          >
            Tous
          </Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity
        style={[
          categoriesStyle.ButtonFilterStyle,
          selectedValue == "Guitar" ? { borderColor: "rgb(0, 132, 255)" } : {},
        ]}
        onPress={() => setSelectedValue("Guitar")}
      >
        <Text
          style={[
            { fontSize: 11, color: "gray" },
            selectedValue == "Guitar"
              ? { color: "rgb(0, 132, 255)", fontWeight: "bold" }
              : {},
          ]}
        >
          Guitar
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          categoriesStyle.ButtonFilterStyle,
          selectedValue == "Batteries"
            ? { borderColor: "rgb(0, 132, 255)" }
            : {},
        ]}
        onPress={() => setSelectedValue("Batteries")}
      >
        <Text
          style={[
            { fontSize: 11, color: "gray" },
            selectedValue == "Batteries"
              ? { color: "rgb(0, 132, 255)", fontWeight: "bold" }
              : {},
          ]}
        >
          Batteries
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          categoriesStyle.ButtonFilterStyle,
          selectedValue == "Autre" ? { borderColor: "rgb(0, 132, 255)" } : {},
        ]}
        onPress={() => setSelectedValue("Autre")}
      >
        <Text
          style={[
            { fontSize: 11, color: "gray" },
            selectedValue == "Autre"
              ? { color: "rgb(0, 132, 255)", fontWeight: "bold" }
              : {},
          ]}
        >
          Autre
        </Text>
      </TouchableOpacity>
    </>
  );
}

const categoriesStyle = StyleSheet.create({
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
});
