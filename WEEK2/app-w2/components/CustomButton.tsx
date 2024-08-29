import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({title, handlePress,
    containerStyles, textStyles, isLoading
}) => {
  return (
    <TouchableOpacity
    onPress={handlePress}
    activeOpacity={0.8}
    className={`bg-zinc-950
     rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50' : ''
     }`}
     disabled={isLoading}
     >
      <Text className={`text-zinc-50 text-lg ${textStyles}`}>
        {title}
        </Text>
    </TouchableOpacity>
  )
}

export default CustomButton