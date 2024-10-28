import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Link } from "expo-router";
import { verifyInstallation } from "nativewind";

export default function App() {
  verifyInstallation();

  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-3xl font-pblack">Aora!</Text>
      <StatusBar style="auto" />
      <Link href="/Profile" style={{ color: "blue" }}>
        Go to Profile
      </Link>
    </View>
  );
}
