import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { FlatList, ScrollView, Text, TouchableOpacity, View } from "react-native";
//Financial Overview
const financialOverviewData = [
  {
    "id": "1",
    "title" : "Gross Revenue",
    "value" : "$7.7K",
    "icon" : "trending-up-outline",
    "color" : "#4ADE80",
    "num" : "100.0%"

  },
  {
    "id": "2",
    "title" : "Net Profit",
    "value" : "$2.3K",
    "icon" : "trending-up-outline",
    "color" : "#3B82F6",
    "num" : "30.0%"
  },
  {
    "id": "3",
    "title" : "Expenses",
    "value" : "$5.48K",
    "icon" : "trending-down-outline",
    "color" : "#F87171",
    "num" : "70.0%"
  }

];
export default function Index() {
  return (
    <View className="flex-1 bg-white">
      {/* Heading */}
      <LinearGradient
        colors={["#F1EBFF", "#FCEFFF", "#FEE8D6"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="h-60"
      >
      <View className="flex-row items-center px-4 py-2 mt-4">
        <Text className="text-xl font-bold text-purple-500">Finova</Text>
        <View className="flex-row items-center ml-auto">
        <Ionicons 
        name="notifications-outline" 
        size={24} 
        color="#6B21A8" />
        <View className="ml-2 bg-purple-500 rounded-full w-10 h-10 items-center justify-center">
          <Text className="text-white">S</Text>
        </View>
        </View>
      </View>
      <View className="px-4 py-2 flex-column mt-2 ">
        <Text className="text-2xl font-semibold">Good Morning, Suju!</Text>
        <Text className="text-base text-gray-600">15 transactions analysed across your branches</Text>
        <TouchableOpacity
        className="bg-purple-400 self-start w-40 h-8 items-center rounded-2xl mt-6"
        >
        <Text className="text-white text-lg font-bold ">+ Record a sale</Text>
        </TouchableOpacity>
      </View> 
      </LinearGradient>

      {/* Financial Overview */}
      <View className="flex-column px-4 py-2 mt-4">
        <Text className="text-lg font-semibold">Financial Overview</Text>
        {/* Cards */}
        <ScrollView
        showsHorizontalScrollIndicator={false}
        >
          <FlatList
            data={financialOverviewData}
            horizontal
            showsHorizontalScrollIndicator={false}  
            keyExtractor={(item)=> item.id}
            renderItem={({item})=>(
              <View className="bg-red-100 px-4 py-3 rounded-2xl mr-4 shadow-md">
                <Text className="font-bold">{item.title}</Text>
              </View>
            )}
          
          
          />
        </ScrollView>
      </View>
    </View>
  );
}