import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useContext } from "react";
import { AuthContext } from "../store/Auth";
import { GlobalStyles } from "../constant/styles";
import { Ionicons } from "@expo/vector-icons";

export const FavoriteScreen = ({ navigation }) => {
  const AuthCtx = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.bottomSafeArea}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>
            You have ({AuthCtx.bookmarked.length}) Exams BookMarked
          </Text>
          {AuthCtx.bookmarked?.map((bookmark, i) => (
            <View key={i} style={styles.itemContainer}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(bookmark.nav, {
                    itemId: bookmark.id,
                  });
                }}
              >
                <View style={styles.item}>
                  <Text style={styles.itemSubText}>{bookmark.description}</Text>
                  <Text style={styles.itemText}>{bookmark.title}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  AuthCtx.removeBookmarked(bookmark.id);
                }}
              >
                <View style={styles.timeContainer}>
                  <Ionicons name="trash-outline" size={25} color="black" />
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bottomSafeArea: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  container: {
    height: "100%",
    marginTop: 10,
    backgroundColor: "white",
    padding: 15,
  },
  header: {
    fontFamily: "Poppins500",
    fontSize: 15,
    textAlign: "center",
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
    borderBottomWidth: 0.6,
    borderBottomColor: GlobalStyles.colors.greyExtra,
  },
  item: {
    marginBottom: 10,
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
