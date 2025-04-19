import { View, Text } from "react-native";
import React from "react";
import SettingsItem from "./settings-items";
import icons from "@/constants/icons";
import { settings } from "@/constants/data";

const SettingsList = () => {
  return (
    <>
      <View className="flex flex-col mt-28 gap-5">
        <SettingsItem
          icon={icons.calendar}
          title="My Bookings"
          onPress={() => {}}
        />

        <SettingsItem
          icon={icons.wallet}
          title="My Wallet"
          onPress={() => {}}
        />
      </View>

      <View className="flex flex-col mt-10 gap-10 border-t border-primary-200 pt-10">
        {settings.slice(2).map((item, index) => (
          <SettingsItem key={index} {...item} />
        ))}
      </View>
    </>
  );
};

export default SettingsList;
