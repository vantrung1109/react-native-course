import { View, Text, ScrollView, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '@/constants/images'
import FormField from '@/components/FormField'
import { Link } from 'expo-router'
import { useGlobalContext } from '@/context/GlobalProvider';
import CustomButton from '@/components/CustomButton'
const ForgotPassword = () => {

    const [form, setForm] = useState({
        otp: '',
        password: '',
        confirm_password: ''
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    // const {setUser, setIsLogged} = useGlobalContext()
    const submit = async () => {
        if (form.otp === '' || form.password === '' || form.confirm_password === '') {
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
                title='Otp'
                value={form.otp}
                handleChangeText={(e: any) => setForm({ ...form, otp:e })}
                otherStyles='mt-7' 
                placeholder='Enter your OTP'
                />

          <FormField
                title='Password'
                value={form.password}
                handleChangeText={(e: any) => setForm({ ...form, password:e })}
                otherStyles='mt-7' 
                placeholder='Enter your password'
                />
        
        <FormField
                title='Confirm Password'
                value={form.password}
                handleChangeText={(e: any) => setForm({ ...form, password:e })}
                otherStyles='mt-7' 
                placeholder='Confirm your password'
                />
          

          {/* <CustomButton 
            title="Continue" 
            handlePress={submit} 
            containerStyles='mt-10'
            textStyles={undefined} 
            isLoading={isSubmitting}            
          /> */}

        
        </View>
      </ScrollView>
      
    </SafeAreaView>
  )
}

export default ForgotPassword