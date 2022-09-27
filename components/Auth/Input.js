import { View, TextInput, StyleSheet, Platform } from "react-native";
import { GlobalStyles } from "../../constant/styles";

export const Input = ({
  placeholder,
  keyboardType,
  secure,
  value,
  onUpdateValue,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        keyboardType={keyboardType}
        secureTextEntry={secure}
        style={styles.input}
        onChangeText={onUpdateValue}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 7,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  label: {
    fontFamily: "Poppins500",
    fontSize: 15,
    color: GlobalStyles.colors.primary600,
    marginBottom: 7,
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: GlobalStyles.colors.grey,
    borderWidth: Platform.OS === "android" ? 2 : 1,
    borderRadius: 8,
    fontSize: 13,
    fontFamily: "Poppins500",
    color: GlobalStyles.colors.primary200,
    flex: 1,
  },
});
