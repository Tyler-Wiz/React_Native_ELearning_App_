import { createContext, useEffect, useState } from "react/";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({
  addBookmarked: (title, description, id) => {},
  removeBookmarked: (id) => {},
  bookmarked: [],
});

export const AuthContextProvider = ({ children }) => {
  const [bookmarked, setBookmarked] = useState([]);

  const runStorage = async () => {
    const booked = await AsyncStorage.getItem("@MySuperStore:key");
    if (booked !== null) {
      let bookmarked = booked;
    }
  };
  useEffect(() => {
    runStorage();
  }, []);

  const addBookmarked = async (title, description, id, nav) => {
    setBookmarked((preState) => [...preState, { title, description, id, nav }]);
    await AsyncStorage.setItem("@MySuperStore:key", JSON.stringify(bookmarked));
  };

  const removeBookmarked = async (id) => {
    setBookmarked(bookmarked.filter((item) => item.id !== id));
    await AsyncStorage.setItem("@MySuperStore:key", JSON.stringify(bookmarked));
  };

  const value = {
    bookmarked: bookmarked,
    addBookmarked: addBookmarked,
    removeBookmarked: removeBookmarked,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
