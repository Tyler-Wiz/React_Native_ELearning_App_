import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { GlobalStyles } from "../constant/styles";

export const Button = ({ children, onPress, style }) => {
  return (
    <TouchableOpacity
      style={[styles.button, (style = { style })]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 16,
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: GlobalStyles.colors.primary600,
    borderRadius: 7,
  },
  buttonText: {
    textAlign: "center",
    color: GlobalStyles.colors.primary50,
    fontSize: 13,
    fontFamily: "Poppins700",
  },
});
