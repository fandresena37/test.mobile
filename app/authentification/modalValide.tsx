import { View } from "@/components/Themed";
import { Image, Modal, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function ModalValide({
  title,
  handle,
}: {
  title: string;
  handle: () => void;
}) {
  return (
    <>
      <Modal
        transparent={true}
        animationType="fade"
        visible={true}
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={ModalErrorStyle.container}>
            <Image
              source={require("../../assets/images/succes.png")}
              style={{ width: 40, height: 40 }}
            />
            <Text
              style={{
                color: "green",
                textAlign: "center",
                fontSize: 12,
                fontWeight: "bold",
              }}
            >
              {title}
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: "black",
                borderRadius: 8,
                marginTop: 5,
                width: 50,
                height: 30,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => handle()}
            >
              <Text style={{ color: "white", fontWeight: "semibold" }}>Ok</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
}

const ModalErrorStyle = StyleSheet.create({
  container: {
    width: "80%",
    height: "auto",
    padding: 15,
    borderRadius: 8,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
});
