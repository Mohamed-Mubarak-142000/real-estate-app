import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import icons from "@/constants/icons";
import { login } from "@/lib/appwrite";
import { useGlobalContext } from "@/lib/global-provider";
import { Redirect } from "expo-router";

const SignIn = () => {
  const { isLogged, loading, refetch, user } = useGlobalContext();

  if (!loading && isLogged) return <Redirect href={"/"} />;

  const handleLogin = async () => {
    const result = await login();
    if (result) {
      refetch({ key: "value" });
      console.log("Success Login.!");
      Alert.alert("Success", "Success Login");
    } else {
      Alert.alert("Error", "Failed Login.!");
    }
  };
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerClassName="h-full">
        <Image
          source={images.onboarding}
          className="w-full h-5/6"
          resizeMode="contain"
        />

        <View className="px-10">
          <Text className="text-base text-center uppercase font-rubik text-black-200">
            WelCome to Real Estate App
          </Text>

          <Text className="text-3xl font-rubik-bold text-black-300 text-center mt-2">
            Let's Get You Closer to {"\n"}
            <Text className="text-primary-300">Your Ideal Home</Text>
          </Text>

          <Text className="text-lg font-rubik text-black-200 text-center mt-5">
            Login to Restate With Google
          </Text>

          <TouchableOpacity
            className="bg-white shadow-lg shadow-zinc-400 rounded-full w-1/2 mx-auto p-3 mt-2"
            onPress={handleLogin}
          >
            <View className="flex items-center justify-center flex-row gap-2">
              <Image
                source={icons.google}
                className="w-5 h-5"
                resizeMode="contain"
              />

              <Text className="text-lg font-rubik-medium text-black-300">
                Continue With Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
