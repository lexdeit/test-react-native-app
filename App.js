import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import { Text, View, Image, ScrollView } from "react-native";
import { getLatestGames } from "./lib/metacritic";
import { Main } from "./components/Main";

export default function App() {

  const [games, setGames] = useState([]);
  useEffect(() => {
    getLatestGames().then(games => {
      setGames(games)
    })
  }, [])

  return (
    <SafeAreaProvider>
      <View className="flex-1 items-center justify-center bg-white">
        <Main />
      </View>
    </SafeAreaProvider>
  );
}
