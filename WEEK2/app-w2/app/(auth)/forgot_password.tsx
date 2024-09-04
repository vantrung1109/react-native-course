import { View, Text, ScrollView, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '@/constants/images'
import FormField from '@/components/FormField'
import { Link, router } from 'expo-router'
import { useGlobalContext } from '@/context/GlobalProvider';
import CustomButton from '@/components/CustomButton'
const ForgotPassword = () => {

    const [form, setForm] = useState({
        email: '',
        password: '',
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    // const {setUser, setIsLogged} = useGlobalContext()
    const submit = async () => {
        if (form.email === '' || form.password === '') {
            Alert.alert('Error', 'Please fill all the fields')
        }

        setIsSubmitting(true)
    }

        // try {
        //     await signIn(form.email, form.password)
        //     const result = await getCurrentUser()
        //     setUser(result)
        //     setIsLogged(true)
        //     Alert.alert('Success', 'User signed in successfully')
        //     //set it to global state...
        //     router.replace('/home')
        // } catch (error: any) {
        //     Alert.alert('Error', error.message)
        // } finally{
        //     setIsSubmitting(false)
        // }
        
        

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
            Forgot Password?
          </Text>

          <FormField
            title='Email'
            value={form.email}
            handleChangeText={(e: any) => setForm({ ...form, email: e })}
            otherStyles='mt-7'
            keyboardType='email-address'
             placeholder='Enter your email'          />
          
        
          <CustomButton 
            title="Continue" 
            handlePress={() => {router.replace('/otp')}} 
            containerStyles='mt-10'
            textStyles={undefined} 
            isLoading={isSubmitting}            
          />

        
        </View>
      </ScrollView>
      
    </SafeAreaView>
  )
}

export default ForgotPassword