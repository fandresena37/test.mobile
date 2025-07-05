import { useAllData } from "@/context/dataContext";
import { SetStateAction } from "react";
import { TouchableOpacity } from "react-native";
import { Modal, StyleSheet, Text, View } from "react-native";

export default function ModalConfirmation({
  id,
  handleYes,
  handleNo,
}: {
  id: number;
  handleYes: () => void;
  handleNo: () => void;
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
          <View style={ModalConfirmationStyle.container}>
            <Text style={{ marginTop: 10 }}>Vous voulez continuer ?</Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 10,
                marginTop: 10,
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: "red",
                  height: 30,
                  width: 40,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 8,
                }}
                onPress={() => handleNo()}
              >
                <Text style={{ color: "white" }}>Non</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: "green",
                  height: 30,
                  width: 40,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 8,
                }}
                onPress={() => handleYes()}
              >
                <Text style={{ color: "white" }}>Oui</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

const ModalConfirmationStyle = StyleSheet.create({
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
