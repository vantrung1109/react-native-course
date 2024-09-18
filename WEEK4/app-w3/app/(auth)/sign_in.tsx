import { View, Text, ScrollView, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { Link, router } from 'expo-router'
import axios from 'axios';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '@/constants/images';
import CustomButton from '@/components/CustomButton';
import FormField from '@/components/FormField';
import { useGlobalContext } from '@/context/GlobalProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_BASE_URL } from '@/config';
const SignIn = () => {
  const { token, setToken } = useGlobalContext()
  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  const [loading, setLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false)
  // const {setUser, setIsLogged} = useGlobalContext()
  const submit = async () => {
    if (form.email === '' || form.password === '') {
      Alert.alert('Error', 'Please fill all the fields')
      return
    }
  
    try {
      const response = await axios.post(API_BASE_URL + '/v1/user/login', {
        email: form.email,
        password: form.password
      });

      if (response.status === 200) {
        const result = response.data;
        setToken(result.data.accessToken);
        if (token) {
            await AsyncStorage.setItem('token', token);
            console.log('Token saved to AsyncStorage:', token);
            router.push('/profile');
        }
      }
    } catch (error) {
      Alert.alert('Error', 'Email or password is incorrect')
      console.log(error)
    } finally {
      setLoading(false);
    }
  };
   
  return (
    <SafeAreaView
      className='bg-primary h-full'
    >
      <ScrollView>
        <View 
          className='
            w-full 
            justify-center 
            min-h-[85vh]
            px-4 
            my-6'
        >
          <Image
            source={images.bg_default}
            resizeMode='contain'
            className='w-[115px] h-[85px]'
          />

          <Text
            className='
              text-2xl
                text-white
              text-semibold 
              mt-10 font-psemibold'
          >
            Log in
          </Text>

          <FormField
            title='Email'
            value={form.email}
            handleChangeText={(e: any) => setForm({ ...form, email: e })}
            otherStyles='mt-7'
            keyboardType='email-address' placeholder={undefined}          />
          <FormField
            title='Password'
            value={form.password}
            handleChangeText={(e: any) => setForm({ ...form, password:e })}
            otherStyles='mt-7 mb-7' 
            placeholder={undefined}/>

          <CustomButton 
            title="Sign In" 
            handlePress={submit} 
            containerStyles='mt-2'
            textStyles={undefined} 
            isLoading={isSubmitting}            
          />

          <View className='
            justify-center pt-5 flex-row gap-2'>
              <Text className='text-gray-100 font-pregular'>
                Don't have an Account?
              </Text>
              <Link 
                className='text-secondary font-psemibold'
                href='/sign_up'>
                Sign Up
                </Link>
          </View>

        </View>
      </ScrollView>
      
    </SafeAreaView>
  )
}

export default SignIn