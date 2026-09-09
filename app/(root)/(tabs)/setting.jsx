import { Ionicons } from "@expo/vector-icons";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Setting() {
    return (

        <SafeAreaView className="bg-gray-100 flex-1">
            <View className="px-4 flex-row items-center bg-white py-6">
                <View className="">
                    <Text className="font-bold text-xl">
                        Transaction
                    </Text>

                    <Text className="text-gray-500 mt-1">
                        Record every sales as it happens
                    </Text>
                </View>

                {/* Notification */}
                <View className="ml-auto w-10 h-10 mt-3 rounded-full justify-center items-center bg-gray-300">
                    <Ionicons
                        name="notifications-outline"
                        size={20}
                    />
                </View>
            </View>
            <View className="px-4 mt-6 ">
                <Text className="text-lg font-semibold">
                    New Sale
                </Text>
                <View className="bg-white mt-2 rounded-2xl pb-8">
                    <View className="px-4">
                        <Text className="text-sm mt-2">Product/Item</Text>
                        <TextInput
                            placeholder="e.g Weekly grocery pack"
                            className="bg-gray-200 rounded-2xl px-4 mt-2"
                        />
                        <Text className="text-sm mt-2">Category</Text>
                        <TextInput
                            placeholder="Health and beauty"
                            className="bg-gray-200 rounded-2xl px-4 mt-2"
                        />
                        <View className="flex-row gap-3 mt-4">
                            <View className="flex-1">
                                <Text className="text-sm">Amount </Text>
                                <TextInput 
                                placeholder="0.00"
                                keyboardType="numeric"
                                className="bg-gray-200 rounded-2xl px-4 mt-2 h-12" />
                            </View>
                            <View className="flex-1">
                                <Text className="text-sm"> Cost</Text>
                                <TextInput 
                                placeholder=""
                                keyboardType="numeric"
                                className="bg-gray-200 rounded-2xl px-4 mt-2 h-12" />
                            </View>
                        </View>
                        <View className="flex-row mt-4 gap-3">
                            <View className="flex-1">
                                <Text className="text-sm">Date</Text>
                                <TextInput
                                placeholder="date"
                                className="bg-gray-200 rounded-2xl px-4 mt-2"
                                />
                            </View>
                            <View className="flex-1">
                                <Text className="text-sm">Branch</Text>
                                <TextInput
                                placeholder="Branch A"
                                className="bg-gray-200 rounded-2xl px-4 mt-2"
                                />
                            </View>
                           
                        </View>
                         <View>
                            <Text className="text-sm">Payment Method</Text>
                            <View className="flex-row gap-3 items-center">
                                <TouchableOpacity className="border border-gray-300 rouded-2xl w-14 items-center">
                                    <Text>Cash</Text>
                                </TouchableOpacity>
                                 <TouchableOpacity className="border border-gray-300 w-16 h-8 items-center">
                                    <Text>Ewallet</Text>
                                </TouchableOpacity>
                                 <TouchableOpacity className="border border-gray-300 w-14 items-center">
                                    <Text>Credit Card</Text>
                                </TouchableOpacity>

                            </View>
                         </View>
                    </View>
                </View>

            </View>

        </SafeAreaView>


    )
}