import { StyleSheet, Text, View, TextInput } from "react-native";
import { GlobalStyles } from "../constant/styles";
import { Ionicons } from "@expo/vector-icons";

export const InputWithIcon = ({
  placeholder,
  keyboardType,
  value,
  onUpdateValue,
  label,
}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.wrapper}>
        <Ionicons name="search-outline" size={26} style={styles.icon} />
        <TextInput
          placeholder={placeholder}
          keyboardType={keyboardType}
          style={styles.input}
          onChangeText={onUpdateValue}
          value={value}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    paddingHorizontal: 15,
    marginVertical: 2,
    fontSize: 14,
    fontFamily: "Poppins400",
    color: GlobalStyles.colors.primary200,
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    padding: 10,
  },
  input: {
    paddingVertical: 13,
    paddingHorizontal: 45,
    borderColor: GlobalStyles.colors.greyExtra,
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 14,
    fontFamily: "Poppins500",
    color: GlobalStyles.colors.primary200,
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  icon: {
    position: "absolute",
    top: 20,
    left: 20,
  },
});
