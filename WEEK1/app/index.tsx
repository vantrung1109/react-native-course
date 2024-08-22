import { Link, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { useEffect } from "react";
export default function Index() {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/home"); // Automatically navigate to the HomePage after 10 seconds
    }, 10000); // 10 seconds

    return () => clearTimeout(timer); // Cleanup the timer when the component unmounts
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl">Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
