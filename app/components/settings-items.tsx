import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from "react-native";
import React from "react";
import icons from "@/constants/icons";

interface SettingsItemProps {
  icon: ImageSourcePropType;
  title: string;
  onPress?: () => void;
  textStyle?: string;
  showArrow?: boolean;
}
const SettingsItem = ({
  icon,
  title,
  onPress,
  textStyle,
  showArrow = true,
}: SettingsItemProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View className="flex flex-row items-center justify-between">
        <View className="flex flex-row items-center gap-2">
          <Image source={icon} className="size-6" />
          <Text
            className={`ml-3 ${textStyle} font-rubik-medium text-black-300 text-lg`}
          >
            {title}
          </Text>
        </View>

        {showArrow && <Image source={icons.rightArrow} className="size-5" />}
      </View>
    </TouchableOpacity>
  );
};

export default SettingsItem;
