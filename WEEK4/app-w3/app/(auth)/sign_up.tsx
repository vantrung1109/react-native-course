import { View, Text, Alert, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '@/components/FormField'
import CustomButton from '@/components/CustomButton'
import { Link, router } from 'expo-router'
import images from '@/constants/images'
import axios from 'axios'
const SignUp = () => {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [loading, setLoading] = useState(false);
    
    const [form, setForm] = useState({
        displayName: '',
        email: '',
        password: '',
        phone:'',
      })
  
      const submit = async () => {
        if (form.displayName === '' || form.email === '' || form.password === '' || form.phone === '') {
          Alert.alert('Error', 'Please fill all the fields')
        }
    
        try {
          const response = await axios.post('http://192.168.1.12:7979/v1/user/register', {
            displayName: form.displayName,
            email: form.email,
            phone: form.phone,
            password: form.password
          });
    
          if (response.status === 200) {
            router.push({
              pathname: '/otp',
              params: {
                 email: form.email 
              }
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
                Sign Up
              </Text>
    
              <FormField
                title='DisplayName'
                value={form.displayName}
                handleChangeText={(e: any) => setForm({ ...form, displayName: e })}
                otherStyles='mt-10'
                placeholder={undefined}
                />
    
              <FormField
                title='Email'
                value={form.email}
                handleChangeText={(e: any) => setForm({ ...form, email: e })}
                otherStyles='mt-7'
                keyboardType='email-address' placeholder={undefined}
                />
              <FormField
                title='Phone'
                value={form.phone}
                handleChangeText={(e: any) => setForm({ ...form, phone:e })}
                otherStyles='mt-7' 
                placeholder={undefined}
                />

              <FormField
                title='Password'
                value={form.password}
                handleChangeText={(e: any) => setForm({ ...form, password:e })}
                otherStyles='mt-7 mb-7' 
                placeholder={undefined}
              />

              <CustomButton 
                title="Sign Up" 
                handlePress={submit} 
                containerStyles='mt-2'
                textStyles={undefined} 
                isLoading={isSubmitting}            
                />
    
              <View className='
                justify-center pt-5 flex-row gap-2'>
                  <Text className='text-gray-100  font-pregular'>
                    Have an account already?
                  </Text>
                  <Link 
                    className='text-secondary font-psemibold'
                    href='/sign_in'>
                    Sign In
                    </Link>
              </View>
    
            </View>
          </ScrollView>
          
        </SafeAreaView>
      )
}

export default SignUp