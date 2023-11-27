import { View, Text, ImageBackground, StatusBar,TouchableOpacity } from "react-native";
import React from "react";
import Bg from "../assets/BgLast.jpg";
import { useNavigation } from "@react-navigation/native";

export default function LastScreen() {
  const navigation=useNavigation()
  return (
    <ImageBackground source={Bg} className="flex-1">
      <StatusBar style="light" />
      <View className=" flex-1">
        <View className="flex mx-16 mt-24">
          <Text className="text-white text-6xl text-center font-bold mt-4">Discover </Text>
          <Text className="text-white text-6xl  text-center font-bold mt-4">and book, </Text>
          <Text className="text-white text-6xl text-center font-bold mt-4">local. </Text>
        </View>
      </View>
      <TouchableOpacity className="bg-white py-6 px-8 rounded-3xl mx-12 mb-[70%]" onPress={()=>navigation.navigate("")}>
        <Text className="text-[#2E1F6B] font-semibold text-center text-xl">Get Started</Text>
      </TouchableOpacity>
    </ImageBackground>
  )
}
