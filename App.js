import { useCallback, useEffect, useState, useContext } from "react";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { AuthenticatedStack } from "./Navigator/Authenticated";
import { AuthContextProvider } from "./store/Auth";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          rubik300: require("./assets/fonts/Rubik/Rubik-Light.ttf"),
          rubik400: require("./assets/fonts/Rubik/Rubik-Regular.ttf"),
          rubik500: require("./assets/fonts/Rubik/Rubik-Medium.ttf"),
          rubik600: require("./assets/fonts/Rubik/Rubik-SemiBold.ttf"),
          rubik700: require("./assets/fonts/Rubik/Rubik-Bold.ttf"),
          Poppins300: require("./assets/fonts/Poppins/Poppins-Light.ttf"),
          Poppins400: require("./assets/fonts/Poppins/Poppins-Regular.ttf"),
          Poppins500: require("./assets/fonts/Poppins/Poppins-Medium.ttf"),
          Poppins600: require("./assets/fonts/Poppins/Poppins-SemiBold.ttf"),
          Poppins700: require("./assets/fonts/Poppins/Poppins-Bold.ttf"),
        });
        await new Promise((resolve) => setTimeout(resolve, 100));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <AuthContextProvider>
      <StatusBar style="light" />
      <NavigationContainer onReady={onLayoutRootView}>
        <AuthenticatedStack />
      </NavigationContainer>
    </AuthContextProvider>
  );
}
