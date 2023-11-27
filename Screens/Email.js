import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import arrow from "../assets/arrow.jpg";
import { useNavigation } from "@react-navigation/native";

export default function Email() {
  const navigation = useNavigation();
  const [inputText, setInputText] = useState("");

  const handleInputChange = (text) => {
    setInputText(text);
  };

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="light" />
      <TouchableOpacity
        className="mt-14 ml-10 mr-72 border border-[#EFEFEF] p-5 rounded-3xl"
        onPress={() => navigation.navigate("Notification")}
      >
        <Image source={arrow} />
      </TouchableOpacity>
      <View className="mx-16 mt-10">
        <Text className="text-black font-bold text-3xl ">
          What's your Email ?
        </Text>
        <TextInput
          className=" w-[75%] h-[30%] text-xl"
          onChange={handleInputChange}
          value={inputText}
          placeholder="Eg-bluey@gmail.com"
        />
        <Text className='text-neutral-600'>Your will be used by square to with you about your appointments</Text>
      </View>
      <TouchableOpacity
        className="bg-[#2E1F6B] py-5 px-16 rounded-3xl mt-4 mx-16"
        onPress={() => navigation.navigate('Call')}
      >
        <Text className="text-white font-semibold text-center text-xl">
          Next
        </Text>
      </TouchableOpacity>
    </View>
  );
}
