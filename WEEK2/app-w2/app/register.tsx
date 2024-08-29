import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import CustomButton from "@/components/CustomButton";
import {router, Link} from "expo-router";

export default function Register() {

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl">Register</Text>

     
      <TextInput
        placeholder="UserName"
        className="w-80 p-4 mt-4 border border-gray-300 rounded-md bg-white text-gray-800"
      />
      <TextInput
        placeholder="Password"
        className="w-80 p-4 mt-4 border border-gray-300 rounded-md bg-white text-gray-800"
      />
       <TextInput
        placeholder="Confirm Password"
        className="w-80 p-4 mt-4 border border-gray-300 rounded-md bg-white text-gray-800"
      />
    
      <CustomButton
        title="Register"
        handlePress={() => {router.push('/')} }
        containerStyles="w-80 mt-7" 
        textStyles={undefined} 
        isLoading={undefined}/>

  </View>
  );
}
