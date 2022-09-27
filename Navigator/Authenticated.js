import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialIcons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity } from "react-native";
import { AuthContext } from "../store/Auth";
import { useContext } from "react";
import { MyTabs } from "./TabNavigator";
import {
  OBJQuestionScreen,
  WaecScreen,
  ResultScreen,
  CorrectAnswerScreen,
  EnglishQuestionsScreen,
  JambScreen,
  JambQuestionsScreen,
  BookReadingScreen,
  SubjectsScreen,
  WalkThroughScreen,
} from "../screens";

const Stack = createNativeStackNavigator();

export const AuthenticatedStack = () => {
  const authCtx = useContext(AuthContext);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: "#FFFFFF",
        },
        contentStyle: {
          backgroundColor: "#fbfbfb",
        },
      }}>
      <Stack.Screen name="WalkScreen" component={WalkThroughScreen} />
      <Stack.Screen
        name="Chips"
        component={MyTabs}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "#242b43",
          },
          headerTintColor: "#ffffff",
        }}
      />

      {/* WAEC OBJ Screens */}

      <Stack.Screen name="englishObj" component={EnglishQuestionsScreen} />
      <Stack.Screen name="subjects" component={SubjectsScreen} />

      {/* JAMB Screen */}
      <Stack.Screen name="jamb" component={JambScreen} />
      <Stack.Screen name="jambQuestions" component={JambQuestionsScreen} />

      {/* UTILS Screens */}
      <Stack.Screen name="objective" component={OBJQuestionScreen} />
      <Stack.Screen name="waec" component={WaecScreen} />
      <Stack.Screen name="result" component={ResultScreen} />
      <Stack.Screen name="bookScreen" component={BookReadingScreen} />
      <Stack.Screen
        name="correct"
        component={CorrectAnswerScreen}
        options={{
          presentation: "modal",
        }}
      />
    </Stack.Navigator>
  );
};
