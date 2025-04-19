import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { useGlobalContext } from "@/lib/global-provider";
import ProfileInfo from "@/app/components/profile.info";
import UserNotification from "@/app/components/user-notification";
import SettingsList from "@/app/components/setting-list";
import LogoutItem from "@/app/components/logout-item";
import { ScrollView } from "react-native";

const Profile = () => {
  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-32 px-7"
      >
        {/**notification */}
        <UserNotification />
        {/** profile info */}
        <ProfileInfo />

        {/** settings list */}
        <SettingsList />

        <LogoutItem />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
