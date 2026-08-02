import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { useState } from "react";
import { images } from "@/constants/images";
import { ChevronLeft, Eye, EyeOff } from "lucide-react-native";
import VerificationModal from "@/components/verification-modal";

export default function SignUpScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showVerificationModal, setShowVerificationModal] = useState(false);

  const handleSignUp = () => {
    setShowVerificationModal(true);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View className="flex-1 bg-white">
        {/* Header with back button */}
        <View className="px-5 py-4">
          <TouchableOpacity
            onPress={() => router.back()}
            className="w-10 h-10 items-center justify-center"
            activeOpacity={0.7}
          >
            <ChevronLeft size={28} color="#0D132B" />
          </TouchableOpacity>
        </View>

        {/* Scrollable content */}
        <View className="flex-1 px-5">
          {/* Title */}
          <Text className="text-[32px] leading-[38px] font-bold text-neutral-text mb-2">
            Create your account
          </Text>
          <Text className="text-lg text-neutral-text-secondary mb-6">
            Start your language journey today ✨
          </Text>

          {/* Mascot */}
          <View className="items-center mb-6">
            <Image
              source={images.mascotAuth}
              className="w-48 h-32"
              resizeMode="contain"
            />
          </View>

          {/* Email Input */}
          <View className="mb-4">
            <Text className="text-sm text-neutral-text-secondary mb-2 ml-1">
              Email
            </Text>
            <TextInput
              className="bg-neutral-surface rounded-2xl px-5 py-4 text-base text-neutral-text font-regular"
              placeholder="alex@gmail.com"
              placeholderTextColor="#9CA3AF"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoComplete="email"
            />
          </View>

          {/* Password Input */}
          <View className="mb-6">
            <Text className="text-sm text-neutral-text-secondary mb-2 ml-1">
              Password
            </Text>
            <View className="relative">
              <TextInput
                className="bg-neutral-surface rounded-2xl px-5 py-4 text-base text-neutral-text font-regular pr-14"
                placeholder="••••••••••"
                placeholderTextColor="#9CA3AF"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                autoCapitalize="none"
                autoComplete="password"
              />
              <TouchableOpacity
                className="absolute right-4 top-4"
                onPress={() => setShowPassword(!showPassword)}
                activeOpacity={0.7}
              >
                {showPassword ? (
                  <EyeOff size={24} color="#687280" />
                ) : (
                  <Eye size={24} color="#687280" />
                )}
              </TouchableOpacity>
            </View>
          </View>

          {/* Sign Up Button */}
          <TouchableOpacity
            className="bg-primary-purple rounded-2xl py-4 mb-6"
            activeOpacity={0.8}
            onPress={handleSignUp}
            style={{
              shadowColor: "#6C4EF5",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.3,
              shadowRadius: 12,
              elevation: 6,
            }}
          >
            <Text className="text-center text-lg font-semibold text-white">
              Sign Up
            </Text>
          </TouchableOpacity>

          {/* Divider */}
          <View className="flex-row items-center mb-6">
            <View className="flex-1 h-[1px] bg-neutral-border" />
            <Text className="mx-4 text-sm text-neutral-text-secondary">
              or continue with
            </Text>
            <View className="flex-1 h-[1px] bg-neutral-border" />
          </View>

          {/* Social Auth Buttons */}
          <View className="gap-3 mb-6">
            {/* Google */}
            <TouchableOpacity
              className="bg-white border border-neutral-border rounded-2xl py-4 flex-row items-center justify-center"
              activeOpacity={0.8}
            >
              <Text className="text-4xl mr-3">🔵</Text>
              <Text className="text-base font-medium text-neutral-text">
                Continue with Google
              </Text>
            </TouchableOpacity>

            {/* Facebook */}
            <TouchableOpacity
              className="bg-white border border-neutral-border rounded-2xl py-4 flex-row items-center justify-center"
              activeOpacity={0.8}
            >
              <Text className="text-4xl mr-3">📘</Text>
              <Text className="text-base font-medium text-neutral-text">
                Continue with Facebook
              </Text>
            </TouchableOpacity>

            {/* Apple */}
            <TouchableOpacity
              className="bg-white border border-neutral-border rounded-2xl py-4 flex-row items-center justify-center"
              activeOpacity={0.8}
            >
              <Text className="text-4xl mr-3">🍎</Text>
              <Text className="text-base font-medium text-neutral-text">
                Continue with Apple
              </Text>
            </TouchableOpacity>
          </View>

          {/* Sign In Link */}
          <View className="flex-row items-center justify-center pb-6">
            <Text className="text-base text-neutral-text-secondary">
              Already have an account?{" "}
            </Text>
            <TouchableOpacity onPress={() => router.push("/sign-in")}>
              <Text className="text-base font-semibold text-primary-purple">
                Log in
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Verification Modal */}
      <VerificationModal
        visible={showVerificationModal}
        onClose={() => setShowVerificationModal(false)}
        email={email}
      />
    </SafeAreaView>
  );
}
