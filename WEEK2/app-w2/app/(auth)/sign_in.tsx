import { View, Text, ScrollView, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'
import FormField from '@/components/FormField'
import CustomButton from '@/components/CustomButton'
import { Link, router } from 'expo-router'
const SignIn = () => {
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

    // try {
    //   await signIn(form.email, form.password)
    //   const result = await getCurrentUser()
    //   setUser(result)
    //   setIsLogged(true)
    //   Alert.alert('Success', 'User signed in successfully')
    //   //set it to global state...
    //   router.replace('/home')
    // } catch (error: any) {
    //   Alert.alert('Error', error.message)
    // } finally{
    //   setIsSubmitting(false)
    // }
   
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