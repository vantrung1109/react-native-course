import { View, Text, Alert, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '@/components/FormField'
import CustomButton from '@/components/CustomButton'
import { Link } from 'expo-router'
import images from '@/constants/images'
const SignUp = () => {
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: '',
      })
    
      const [isSubmitting, setIsSubmitting] = useState(false)
    //   const {setUser, setIsLogged} = useGlobalContext()
    
    
      const submit = async () => {
        if (form.username === '' || form.email === '' || form.password === '') {
          Alert.alert('Error', 'Please fill all the fields')
        }
    
        setIsSubmitting(true)
    
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
                title='Username'
                value={form.username}
                handleChangeText={(e: any) => setForm({ ...form, username: e })}
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