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

const Home = () => {
  const { user } = useGlobalContext();
  const params = useLocalSearchParams<{ filter?: string; query?: string }>();
  const { data: latestProperitiesData, loading: latestProperitiesLoading } =
    useAppwrite({
      fn: getLatestProperties,
    });

  const {
    data: properitiesData,
    loading: properitiesLoading,
    refetch,
  } = useAppwrite({
    fn: getProperities,
    params: {
      filter: params.filter!,
      query: params.query!,
      limit: 4,
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
      limit: 3,
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
            <View className="px-5">
              <View className="flex flex-row items-center justify-between mt-2">
                <View className="flex flex-row items-center">
                  <Image
                    source={user?.avatar ? { uri: user.avatar } : images.avatar}
                    className="size-20 rounded-full"
                  />
                  <View className="flex flex-col ml-2 items-start justify-center ">
                    <Text className="text-sx font-rubik text-black-300">
                      Good Morning
                    </Text>

                    <Text className="text-lg font-rubik-medium text-black-300 capitalize">
                      {user?.name}
                    </Text>
                  </View>
                </View>

                <Image source={icons.bell} className="size-5" />
              </View>
              <Search />
            </View>
            <View className="px-5 mt-5">
              <View className="flex flex-row items-center justify-between">
                <Text className="text-xl font-rubik-bold">Featured</Text>
                <TouchableOpacity>
                  <Text className="text-sm font-rubik-medium text-primary-300">
                    See All
                  </Text>
                </TouchableOpacity>
              </View>

              {latestProperitiesLoading ? (
                <ActivityIndicator
                  size={"large"}
                  className="text-primary-300 mt-5"
                />
              ) : !latestProperitiesData ||
                latestProperitiesData.length === 0 ? (
                <NoResults />
              ) : (
                <FlatList
                  data={latestProperitiesData}
                  renderItem={({ item }) => (
                    <CardFeatured
                      item={item}
                      onPress={() => handleOnPress(item.$id)}
                    />
                  )}
                  keyExtractor={(item) => item.toString()}
                  horizontal
                  bounces={false}
                  showsHorizontalScrollIndicator={false}
                  contentContainerClassName="gap-5 mt-5"
                />
              )}

              <View className="flex flex-row items-center justify-between mt-5">
                <Text className="text-xl font-rubik-bold">
                  Our Recommendation
                </Text>
                <TouchableOpacity>
                  <Text className="text-sm font-rubik-medium text-primary-300">
                    See All
                  </Text>
                </TouchableOpacity>
              </View>

              <Filters />
            </View>
          </>
        }
      />
    </SafeAreaView>
  );
};

export default Home;
