import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import Phone from "../assets/Phone.jpg";
import { useNavigation } from "@react-navigation/native";

var { width, height } = Dimensions.get("window");
export default function NotificationScreen() {
  const [activeModal, setactiveModal] = useState(false);
  const navigation = useNavigation();

  function renderModal() {
    return (
      <Modal visible={activeModal} animationType="fade" transparent={true}>
        <View className="flex-1 justify-center items-center bg-white/70">
          <View className="w-[80%] h-[35%] bg-[#ECECEC] border border-[#B0B0B0] rounded-2xl p-8">
            <Text className="text-black font-semibold text-xl text-center">
              "Square Go" Would like to send you Notifications
            </Text>
            <Text className="text-neutral-500 font-semibold text-sm text-center mt-2">
              Notifications may include alerts, sounds and icon badges. These
              can be configured in settings
            </Text>
            <View className="flex-row w-full justify-between p-8">
              <TouchableOpacity onPress={() => setactiveModal(false)}>
                <Text className="text-[#3777EA] font-bold text-sm">
                  Don't Allow
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>navigation.navigate("Conformation")}>
                <Text className="text-[#3777EA] font-bold text-sm">Allow</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
  return (
    <View className="bg-white flex-1 items-center justify-center">
      <StatusBar style="dark" />
      <View className="flex- itmes-center justify-center ml-[28%] w-full">
        <Image
          source={Phone}
          resizeMode="contain"
          style={{ width: width * 0.7, height: height * 0.5 }}
        />
      </View>
      <View className="flex w-full items-center gap-2">
        <Text className="text-2xl w-full text-center font-bold text-black mt-4">
          Get appointment reminders
        </Text>
        <Text className="text-center text-[#787878] text-sm w-[60%]">
          Get reminders when your booking is getting close and stay informed
          about any changes that happen
        </Text>
      </View>
      <TouchableOpacity
        className="bg-[#2E1F6B] py-5 px-16 rounded-3xl mt-4"
        onPress={() => setactiveModal(true)}
      >
        <Text className="text-white font-semibold text-xl">
          Turn on Notification
        </Text>
      </TouchableOpacity>
      <TouchableOpacity className="bg-white py-5 px-16 rounded-3xl mt-4">
        <Text className="text-[#2E1F6B] font-semibold text-xl">Skip</Text>
      </TouchableOpacity>
      {renderModal()}
    </View>
  );
}
