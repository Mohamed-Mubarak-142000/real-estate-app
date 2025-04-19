import { View, Text, Alert } from "react-native";
import React from "react";
import SettingsItem from "./settings-items";
import icons from "@/constants/icons";
import { useGlobalContext } from "@/lib/global-provider";
import { logout } from "@/lib/appwrite";

const LogoutItem = () => {
  const { isLogged, user, refetch } = useGlobalContext();
  const handleLogout = async () => {
    const result = await logout();
    if (result) {
      Alert.alert("Success", "Logout Success");
      refetch({ key: "value" });
    } else {
      Alert.alert("Error", "Logout Failed");
    }
  };

  return (
    <View className="flex flex-col mt-10 border-t border-primary-200 pt-5">
      <SettingsItem
        icon={icons.logout}
        title="Logout"
        onPress={handleLogout}
        showArrow={false}
        textStyle="text-danger"
      />
    </View>
  );
};

export default LogoutItem;
