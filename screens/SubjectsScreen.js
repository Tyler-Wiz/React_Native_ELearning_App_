import {
  StyleSheet,
  View,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import { NavigateButton } from "../ui/NavigateButton";
import { ExamList } from "../components/ExamList";

export const SubjectsScreen = ({ navigation, route }) => {
  const data = route.params.data;
  const title = route.params.title;
  const isLoading = route.params.isLoading;

  return (
    <SafeAreaView style={styles.bottomSafeArea}>
      <NavigateButton title={title} />
      <View style={styles.container}>
        <View>
          <ExamList data={data} />
          <ActivityIndicator size="small" animating={isLoading} color="grey" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bottomSafeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  container: {
    padding: 20,
  },
});
