import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const AuthLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name='sign_in'
          options={{headerShown: false}}
        />
         <Stack.Screen
          name='sign_up'
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='forgot_password'
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='otp'
          options={{headerShown: false}}
        />
      </Stack>

      <StatusBar backgroundColor='#161622'
        style='light'/>
    </>
  )
}

export default AuthLayout