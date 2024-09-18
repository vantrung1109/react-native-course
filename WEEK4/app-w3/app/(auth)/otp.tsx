import { View, Text, ScrollView, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '@/constants/images'
import FormField from '@/components/FormField'
import { Link, router, useLocalSearchParams } from 'expo-router'
import { useGlobalContext } from '@/context/GlobalProvider';
import CustomButton from '@/components/CustomButton'
import axios from 'axios'
import { API_BASE_URL } from '@/config'
const ForgotPassword = () => {
  
    const { email } = useLocalSearchParams();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        otp: '',
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    // const {setUser, setIsLogged} = useGlobalContext()
    const submit = async () => {
        if (form.otp === '') {
            Alert.alert('Error', 'Please fill all the fields')
        }

        try {
          const response = await axios.post(API_BASE_URL + '/v1/user/verify', {
            email: email,
            otp: form.otp
          });
    
          if (response.status === 200) {
            router.push({
              pathname: '/sign_in',
            })
          } else {
            Alert.alert('Error', response.data.message)
          }
          
        } catch (error: any) {
          if (error.response.status === 400) {
            Alert.alert(error.response.data.message)
          }
          console.log(error)
        } finally {
          setLoading(false);
        }
    }

       
    
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
          
          <Text
            className='
              text-2xl
            text-secondary-200
              text-semibold 
              mt-10 font-psemibold'
          >
           OTP
          </Text>

          <FormField
                title='Otp'
                value={form.otp}
                handleChangeText={(e: any) => setForm({ ...form, otp:e })}
                otherStyles='mt-7' 
                placeholder='Enter your OTP'
                />
          <CustomButton 
                title="Continue" 
                handlePress={submit} 
                containerStyles='mt-2'
                textStyles={undefined} 
                isLoading={isSubmitting}            
                />
        </View>
      </ScrollView>
      
    </SafeAreaView>
  )
}

export default ForgotPassword