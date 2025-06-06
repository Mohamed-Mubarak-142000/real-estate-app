import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { router, useLocalSearchParams, usePathname } from "expo-router";
import icons from "@/constants/icons";
import { useDebouncedCallback } from "use-debounce";
const Search = () => {
  const pathname = usePathname();
  const params = useLocalSearchParams<{ query: string }>();
  const [search, setSearch] = React.useState(params.query);

  const debouncedSearch = useDebouncedCallback(
    (text: string) => router.setParams({ query: text }),
    1000
  );

  const handleSearch = (text: string) => {
    setSearch(text);
    debouncedSearch(text);
  };
  return (
    <View className="flex flex-row items-center justify-between w-full px-4 rounded-lg bg-accent-100 border border-primary-100 mt-5 py-2">
      {/**search */}
      <View className="flex-1 flex flex-row items-center justify-start z-50">
        <Image source={icons.search} className="size-5 mb-1" />
        <TextInput
          value={search}
          onChangeText={handleSearch}
          placeholder="Enter your destination"
          className="text-base text-black-300 font-rubik ml-1 flex-1"
        />
      </View>
      {/**filter */}
      <TouchableOpacity>
        <Image source={icons.filter} className="size-5" />
      </TouchableOpacity>
    </View>
  );
};

export default Search;
