import { View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { images } from "@/constants/images";
import { ChevronRight } from "lucide-react-native";

export default function OnboardingScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View className="flex-1 bg-white px-5">
        {/* Logo and App Name */}
        <View className="items-center mt-6 mb-8">
          <View className="flex-row items-center gap-3">
            <Image
              source={images.mascotLogo}
              className="w-16 h-16"
              resizeMode="contain"
            />
            <Text className="text-3xl font-bold text-neutral-text">
              muolingo
            </Text>
          </View>
        </View>

        {/* Headline */}
        <View className="mb-6">
          <Text className="text-[44px] leading-[52px] font-bold text-neutral-text">
            Your AI language{"\n"}
            <Text className="text-primary-purple">teacher.</Text>
          </Text>
        </View>

        {/* Subtitle */}
        <Text className="text-lg text-neutral-text-secondary mb-8">
          Real conversations, personalized{"\n"}lessons, anytime, anywhere.
        </Text>

        {/* Mascot with greeting bubbles */}
        <View className="flex-1 items-center justify-center relative">
          {/* Hello bubble - top left */}
          <View
            className="absolute left-8 top-12 bg-neutral-surface px-6 py-3 rounded-3xl"
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.05,
              shadowRadius: 8,
              elevation: 2,
            }}
          >
            <Text className="text-xl font-semibold text-neutral-text">
              Hello!
            </Text>
          </View>

          {/* ¡Hola! bubble - top right */}
          <View
            className="absolute right-4 top-8 bg-neutral-surface px-6 py-3 rounded-3xl"
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.05,
              shadowRadius: 8,
              elevation: 2,
            }}
          >
            <Text className="text-xl font-semibold text-primary-blue italic">
              ¡Hola!
            </Text>
          </View>

          {/* 你好! bubble - bottom right */}
          <View
            className="absolute right-8 bottom-32 bg-red-50 px-6 py-3 rounded-3xl"
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.05,
              shadowRadius: 8,
              elevation: 2,
            }}
          >
            <Text className="text-xl font-semibold text-error">你好!</Text>
          </View>

          {/* Mascot Image */}
          <Image
            source={images.mascotWelcome}
            className="w-80 h-80"
            resizeMode="contain"
          />
        </View>

        {/* Get Started Button */}
        <View className="pb-8">
          <TouchableOpacity
            className="bg-primary-purple rounded-2xl py-4 px-8 flex-row items-center justify-center"
            activeOpacity={0.8}
            onPress={() => router.push("/sign-up")}
            style={{
              shadowColor: "#6C4EF5",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.3,
              shadowRadius: 12,
              elevation: 6,
            }}
          >
            <Text className="text-xl font-semibold text-white mr-2">
              Get Started
            </Text>
            <ChevronRight size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
