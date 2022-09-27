import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { GlobalStyles } from "../../constant/styles";
import { useNavigation } from "@react-navigation/native";

export const HomeSubjects = ({ item }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(item.navigate);
      }}
    >
      <View
        style={{
          backgroundColor: item.backgroundColor,
          paddingHorizontal: 15,
          paddingVertical: 25,
          marginHorizontal: 7,
          marginTop: 15,
          borderRadius: 6,
          width: 150,
          height: 150,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image source={item.imageUrl} style={styles.icon} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "rubik500",
    color: GlobalStyles.colors.primary50,
    fontSize: 16,
    color: GlobalStyles.colors.primary600,
    textAlign: "center",
  },
  icon: {
    width: 50,
    height: 50,
  },
});
