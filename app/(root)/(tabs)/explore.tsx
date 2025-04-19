import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Button,
  ActivityIndicator,
} from "react-native";
import React, { useEffect } from "react";
import { Link, router, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import icons from "@/constants/icons";
import { useGlobalContext } from "@/lib/global-provider";
import Search from "@/app/components/search";
import CardFeatured from "@/app/components/card-featured";
import Card from "@/app/components/card-item";
import Filters from "@/app/components/filter-products";
import { useAppwrite } from "@/lib/useAppWrite";
import { getLatestProperties, getProperities } from "@/lib/appwrite";
import NoResults from "@/app/components/no-result";

const Explore = () => {
  const params = useLocalSearchParams<{ filter?: string; query?: string }>();

  const {
    data: properitiesData,
    loading: properitiesLoading,
    refetch,
  } = useAppwrite({
    fn: getProperities,
    params: {
      filter: params.filter!,
      query: params.query!,
      limit: 15,
    },
    skip: true,
  });

  const handleOnPress = (id: string) => {
    router.push(`/properities/${id}`);
  };
  useEffect(() => {
    refetch({
      filter: params.filter!,
      query: params.query!,
      limit: 15,
    });
  }, [params.filter, params.query]);

  return (
    <SafeAreaView className=" h-full bg-white">
      <FlatList
        data={properitiesData}
        renderItem={({ item }) => (
          <Card item={item} onPress={() => handleOnPress(item.$id)} />
        )}
        keyExtractor={(item) => item.toString()}
        numColumns={2}
        ListEmptyComponent={
          properitiesLoading ? (
            <ActivityIndicator
              size={"large"}
              className="text-primary-300 mt-5"
            />
          ) : (
            <NoResults />
          )
        }
        contentContainerClassName="pb-32"
        showsVerticalScrollIndicator={false}
        columnWrapperClassName="flex gap-5 px-5"
        ListHeaderComponent={
          <>
            <View className="px-7">
              <View className="flex flex-row items-center justify-between mt-8">
                <TouchableOpacity
                  className=" flex flex-row bg-primary-200 p-2 rounded-full items-center justify-center"
                  onPress={() => router.back()}
                >
                  <Image source={icons.backArrow} className="size-8" />
                </TouchableOpacity>

                <Text className="text-xl font-rubik-bold text-black-300">
                  Search For Ideal Home
                </Text>

                <Image source={icons.bell} className="w-6 h-6" />
              </View>
              <Search />
            </View>

            <View className="px-7">
              <Filters />
              <Text className="text-lg font-rubik-bold text-black-300 mt-5">
                Found {properitiesData?.length} Properties
              </Text>
            </View>
          </>
        }
      />
    </SafeAreaView>
  );
};

export default Explore;
