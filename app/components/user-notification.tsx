import { View, Text, Image } from "react-native";
import React from "react";
import icons from "@/constants/icons";

const UserNotification = () => {
  return (
    <View className="flex flex-row items-center justify-between mt-5">
      <Text className="text-xl font-rubik-bold">Profile</Text>
      <Image source={icons.bell} className="size-5" />
    </View>
  );
};

export default UserNotification;
