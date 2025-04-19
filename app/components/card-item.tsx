import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { Models } from "react-native-appwrite";

const Card = ({
  item,
  onPress,
}: {
  item: Models.Document;
  onPress?: () => void;
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-1 w-full mt-4 px-3 py-4 rounded-lg bg-white shadow-lg shadow-black-100/70 relative"
    >
      <View className="absolute top-5 right-5 px-2 bg-white shadow-lg rounded-full z-50 flex flex-row items-center ">
        <Image source={icons.star} className="size-4" />
        <Text className="text-md font-rubik-bold text-primary-300 ml-1">
          {item.rating}
        </Text>
      </View>

      <Image
        source={{ uri: item.image }}
        className="w-full h-52 rounded-lg"
        resizeMode="cover"
      />

      <View className=" flex flex-col items-start justify-start mt-2 w-full">
        <Text
          className="text-lg font-rubik-bold capitalize text-black-300"
          numberOfLines={1}
        >
          {item.name}
        </Text>

        <Text
          className="text-sm font-rubik mt-1 text-black-200"
          numberOfLines={1}
        >
          {item.address}
        </Text>

        <View className="flex flex-row items-center mt-4 justify-between w-full ">
          <Text className="text-md font-rubik-bold text-primary-300">
            ${item.price}
          </Text>

          <Image
            source={icons.heart}
            className="w-5 h-5 mr-2"
            tintColor="#191D31"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
