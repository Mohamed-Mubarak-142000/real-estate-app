import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import images from "@/constants/images";
import icons from "@/constants/icons";
import { Models } from "react-native-appwrite";

const CardFeatured = ({
  item,
  onPress,
}: {
  item: Models.Document;
  onPress?: () => void;
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex flex-col items-start w-60 h-80 relative"
    >
      <Image source={{ uri: item.image }} className="size-full rounded-lg" />
      <Image
        source={images.cardGradient}
        className="size-full rounded-2xl absolute bottom-0"
      />

      <View className="absolute top-4 right-4 flex flex-row items-center bg-white/90 px-2  rounded-full">
        <Image source={icons.star} className="size-4" />
        <Text className="text-md font-rubik-bold text-primary-300 ml-1">
          {item.rating}
        </Text>
      </View>

      <View className="absolute bottom-4 inset-x-5 flex flex-col items-center">
        <Text className="text-lg font-rubik-bold text-white" numberOfLines={1}>
          {item.name}
        </Text>

        <Text className="text-sm font-rubik text-white mt-1" numberOfLines={1}>
          {item.address}
        </Text>

        <View className="flex flex-row items-center mt-4 justify-between w-full ">
          <Text className="text-md font-rubik-bold text-white">
            ${item.price}
          </Text>
          <Image source={icons.heart} className="size-5" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardFeatured;
