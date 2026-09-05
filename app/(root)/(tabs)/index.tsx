import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { FlatList, ScrollView, Text, TouchableOpacity, View } from "react-native";
//Financial Overview
const financialOverviewData = [
  {
    "id": "1",
    "title" : "Gross Revenue",
    "value" : "$7.7K",
    "icon" : "arrow-up-outline",
    "num" : "100.0%"

  },
  {
    "id": "2",
    "title" : "Net Profit",
    "value" : "$2.3K",
    "icon" : "arrow-up-outline",
    "num" : "30.0%"
  },
  {
    "id": "3",
    "title" : "Expenses",
    "value" : "$5.48K",
    "icon" : "arrow-down-outline",
    "num" : "70.0%"
  }

];

export default function Index() {
//For color changing  of the button
const [selectedPeriod, setSelectedPeriod] = useState("Week");
  return (
    <View className="flex-1 bg-gray-100">
      {/* Heading */}
      <LinearGradient
        colors={["#F1EBFF", "#FCEFFF", "#FCE4EC"]}
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
      <View className="px-4 py-2 mt-4">
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
              <View 
              className="bg-white px-4 py-3 rounded-2xl mr-4 shadow-lg mt-4 items-start w-40 h-30">
                <Text className="text-gray-500">{item.title}</Text>
                <Text className="text-black text-xl font-bold mt-2 ">{item.value}</Text>
                <View className="flex-row items-center mt-2 bg-green-100 rounded-2xl w-24 h-6">
                  <View className="rotate-45 px-2">
                  <Ionicons
                  name={item.icon as any}
                  size={18} 
                  color={item.icon === "arrow-up-outline" ? "green" : "red"}
                />
                </View>
                  <Text className="text-xs text-green-700">{item.num}</Text>
                </View>
              </View>
            )}  
          />
        </ScrollView>
          {/* Activity  */}
        <View className="mt-2 flex-row">
        <Text className="text-lg font-semibold py-2.5">Activity</Text>
        <View className="flex-row ml-auto border border-gray-300 rounded-3xl items-center ">
        {/* Week */}
        <TouchableOpacity
        onPress={() => setSelectedPeriod("Week")}
        className={`rounded-2xl px-2 py-2 ${
        selectedPeriod === "Week" ? "bg-white " : ""
        }`}
        >
        <Text className={`text-sm ${
          selectedPeriod === "Week" ? "text-purple-600" : "text-gray-600"
        }`}>Week</Text>
        </TouchableOpacity>
        {/* Day */}
        <TouchableOpacity
        onPress={() => setSelectedPeriod("Day")}
        className={`rounded-2xl px-3 py-2 ${
        selectedPeriod === "Day" ? "bg-white text-purple-500" : ""
        }`}
        >
        <Text className={`text-sm ${
          selectedPeriod === "Day" ? "text-purple-600" : "text-gray-600"
        }`}>Day</Text>
        </TouchableOpacity>
        {/* Month */}
        <TouchableOpacity
        onPress={() => setSelectedPeriod("Month")}
        className={`rounded-2xl px-2 py-2 ${
        selectedPeriod === "Month" ? "bg-white text-purple-500" : ""
        }`}
        >
          <Text className={`text-sm ${
            selectedPeriod === "Month" ? "text-purple-600" : "text-gray-600"
          }`}>Month</Text>
        </TouchableOpacity>
        </View>
      </View>
      </View>
    
      
    </View>
  );
}