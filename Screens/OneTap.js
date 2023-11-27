import { View, Text, ImageBackground, StatusBar,TouchableOpacity } from "react-native";
import React from "react";
import Bg from "../assets/BgGradient.jpg";
import { useNavigation } from "@react-navigation/native";

export default function OneTap() {
  const navigation=useNavigation()
  return (
    <ImageBackground source={Bg} className="flex-1">
      <StatusBar style="light" />
      <View className=" flex-1">
        <View className="flex mx-16 mt-24">
          <Text className="text-white text-6xl font-bold mt-4">One tap </Text>
          <Text className="text-white text-6xl font-bold mt-4">History, </Text>
          <Text className="text-white text-6xl font-bold mt-4">Synced. </Text>
        </View>
        <Text className="text-white w-[75%] mt-4 mx-16">
          Book, reschedule and manage your appointments without missing a beat
        </Text>
      </View>
      <TouchableOpacity className="bg-white py-6 px-8 rounded-3xl mx-12 mb-10" onPress={()=>navigation.navigate("Last")}>
        <Text className="text-[#2E1F6B] font-semibold text-center text-xl">Next</Text>
      </TouchableOpacity>
    </ImageBackground>
  )
}
