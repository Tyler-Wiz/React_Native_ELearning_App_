import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { GlobalStyles } from "../constant/styles";

const Tab = createBottomTabNavigator();

//Tab Screens
import {
  HomeScreen,
  FavoriteScreen,
  SearchScreen,
  BooksScreen,
} from "../screens";

const homeName = "home";
const bookName = "book";
const searchName = "search";
const userName = "user";

export const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: GlobalStyles.colors.primary600,
        tabBarStyle: { paddingBottom: 10 },
        tabBarIcon: ({ focused, size, color }) => {
          let iconName;
          let routeName = route.name;
          let iconSize;

          switch (routeName) {
            case homeName:
              iconName = focused ? "home" : "home-outline";
              iconSize = focused ? 25 : 20;
              break;
            case bookName:
              iconName = focused ? "book" : "book-outline";
              iconSize = focused ? 25 : 20;
              break;
            case searchName:
              iconName = focused ? "search" : "search-outline";
              iconSize = focused ? 25 : 20;
              break;
            case userName:
              iconName = focused ? "bookmark" : "bookmark-outline";
              iconSize = focused ? 25 : 20;
              break;
            default:
              return;
          }

          return (
            <Ionicons
              name={iconName}
              size={iconSize}
              color={GlobalStyles.colors.primary600}
            />
          );
        },
      })}
    >
      <Tab.Screen name={homeName} component={HomeScreen} />
      <Tab.Screen name={bookName} component={BooksScreen} />
      <Tab.Screen name={searchName} component={SearchScreen} />
      <Tab.Screen name={userName} component={FavoriteScreen} />
    </Tab.Navigator>
  );
};
