import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { GlobalStyles } from "../constant/styles";

export const NavigateButton = ({ title, navigate }) => {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <View style={styles.arrowContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Ionicons
              name="arrow-back"
              size={30}
              color={Platform.OS == "android" ? "#FFFFFF" : "#242b43"}
            />
          </TouchableOpacity>
          <Text style={styles.arrowText}>{title}</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  arrowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 30,
    marginBottom: 10,
    marginHorizontal: 5,
    paddingHorizontal: 20,
    paddingVertical: 3,
  },
  arrowText: {
    fontFamily: "Poppins600",
    fontSize: 13,
    color: Platform.OS == "android" ? "#FFFFFF" : "#242b43",
    textAlign: "center",
  },
  container: {
    backgroundColor: Platform.OS == "android" ? "#242b43" : "#FFFFFF",
  },
});
