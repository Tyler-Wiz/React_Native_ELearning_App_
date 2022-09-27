import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { GlobalStyles } from "../constant/styles";
import { Ionicons } from "@expo/vector-icons";
import { useState, useContext } from "react";
import { AuthContext } from "../store/Auth";

export const ExamList = ({ data }) => {
  const navigation = useNavigation();
  const AuthCtx = useContext(AuthContext);
  const [bookmark, setBookmark] = useState([]);
  const [isBookmarked, setIsBookMarked] = useState([]);

  const renderList = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(item[0].nav, {
              itemId: item.id,
            });
          }}
        >
          <View style={styles.item}>
            <Text style={styles.itemSubText}>{item[0].description}</Text>
            <Text style={styles.itemText}>{item[0].title}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            AuthCtx.addBookmarked(
              item[0].title,
              item[0].description,
              item.id,
              item[0].nav
            );
            setBookmark((prevState) => [...prevState, item[0].id]);
            setIsBookMarked((prevState) => [...prevState, item[0].id]);
          }}
          disabled={isBookmarked.includes(item[0].id)}
        >
          <Ionicons
            name={
              bookmark.includes(item[0].id) ? "bookmark" : "bookmark-outline"
            }
            size={25}
            color="black"
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <>
      <FlatList
        data={data}
        keyExtractor={(item) => item[0].title}
        renderItem={renderList}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
    borderBottomWidth: 0.6,
    borderBottomColor: GlobalStyles.colors.greyExtra,
  },
  item: {
    marginBottom: 15,
  },
  itemText: {
    fontFamily: "Poppins600",
    fontSize: 14,
    color: GlobalStyles.colors.primary500,
    marginTop: 5,
    textTransform: "uppercase",
  },
  itemSubText: {
    fontFamily: "Poppins400",
    fontSize: 11,
    textTransform: "capitalize",
    color: GlobalStyles.colors.primary100,
    marginBottom: 5,
  },
});
