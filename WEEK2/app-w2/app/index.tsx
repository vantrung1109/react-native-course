import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import CustomButton from "@/components/CustomButton";
import {router, Link} from "expo-router";

export default function App() {

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl">Login Page</Text>

     
      <TextInput
        placeholder="UserName"
        className="w-80 p-4 mt-4 mb-4 border border-gray-300 rounded-md bg-white text-gray-800"
      />
      <TextInput
        placeholder="Password"
        className="w-80 p-4 border border-gray-300 rounded-md bg-white text-gray-800"
      />
    
      <CustomButton
        title="Login"
        handlePress={() => {router.push('/profile')} }
        containerStyles="w-80 mt-7" 
        textStyles={undefined} 
        isLoading={undefined}/>

        <Link href="/register" 
          className="text-blue-500 mt-10"
        > Don't Have Account, Register here </Link>
  </View>
  );
}
