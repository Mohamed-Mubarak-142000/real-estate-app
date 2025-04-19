import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useGlobalContext } from "@/lib/global-provider";
import images from "@/constants/images";
import icons from "@/constants/icons";

const ProfileInfo = () => {
  const { user } = useGlobalContext();
  return (
    <View className="flex-row justify-center flex mt-40">
      <View className="flex flex-col items-center relative mt-5">
        <Image
          source={user?.avatar ? { uri: user.avatar } : images.avatar}
          className="size-44 relative rounded-full"
        />

        <TouchableOpacity className="absolute bottom-8 right-1">
          <Image source={icons.edit} className="size-9" />
        </TouchableOpacity>

        <View className="flex flex-col gap-1 items-center justify-center mt-2">
          <Text className="capitalize font-rubik-medium">{user?.name}</Text>
          <Text className="font-rubik text-black-200">
            FrontEnd Developer @Innovatek
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileInfo;
