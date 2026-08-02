import { Text, View, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View className="flex-1 justify-center items-center bg-white px-5">
        <Text className="text-h2 font-bold text-neutral-text mb-8">
          Welcome to Muolingo
        </Text>

        <TouchableOpacity
          className="bg-primary-purple rounded-2xl py-4 px-8"
          activeOpacity={0.8}
          onPress={() => router.push("/onboarding")}
          style={{
            shadowColor: "#6C4EF5",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 12,
            elevation: 6,
          }}
        >
          <Text className="text-lg font-semibold text-white">
            View Onboarding Screen
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
