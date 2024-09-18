import { Button, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import images from '@/constants/images'
import { StatusBar } from "expo-status-bar";
import { useGlobalContext } from "@/context/GlobalProvider";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";

export default function App() {
  const { token, setToken } = useGlobalContext();
    console.log('begin' + token);
    // Load token from AsyncStorage on startup
    useEffect(() => {
    const loadToken = async () => {
      try {
        const storedToken = await AsyncStorage.getItem('token');
        if (storedToken) {
          setToken(storedToken);
          router.replace('/profile');
        }
      } catch (error) {
        router.replace('/');
        console.error('Failed to load token from AsyncStorage:', error);
      }
    };
    loadToken();
    }, []);


  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView contentContainerStyle={{ height:'100%'}}
      >
        <View className='w-full justify-center
         items-center min-h-[85vh] px-4 mt-5'>
          
          <Text
            className='w-[130px] h-[84px] text-secondary-200 text-3xl font-pbold'>
            Zalo UTE
          </Text>

          <Image
            source={images.bg_default}
            className='max-w-[380px] w-full h-[300px] rounded-full'
            resizeMode='cover'
          />

          <View className='relative mt-5'>
            <Text className='text-3xl text-white font-bold text-center'>
              Chat with your friends with {' '}
              <Text className='text-secondary-200'>Zalo UTE</Text>
            </Text>
            <Image
              source={images.path}
              className='w-[136px] h-[15px] absolute -bottom-2 -right-0'
              resizeMode='contain'
            />
          </View>

          <Text className='text-sm font-pregular
          text-gray-100 mt-7 text-center'>
            Where you can chat with your friends, share your photos and posts what ever you want.
          </Text>
          
          <CustomButton
            title="Continue with your phone"
            handlePress={() => {router.push('/sign_in')} }
            containerStyles='w-full mt-7' 
            textStyles={undefined} 
            isLoading={undefined}            
          />

          <StatusBar 
            backgroundColor='#161622'
            style='light'
          />

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
