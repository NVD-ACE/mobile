import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";
import { useState, useRef, useEffect } from "react";
import { X } from "lucide-react-native";

interface VerificationModalProps {
  visible: boolean;
  onClose: () => void;
  email: string;
}

export default function VerificationModal({
  visible,
  onClose,
  email,
}: VerificationModalProps) {
  const router = useRouter();
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef<(TextInput | null)[]>([]);

  useEffect(() => {
    if (visible && inputRefs.current[0]) {
      setTimeout(() => {
        inputRefs.current[0]?.focus();
      }, 100);
    }
  }, [visible]);

  const handleCodeChange = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    // Auto-focus next input
    if (text && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    // Check if all digits are filled
    if (newCode.every((digit) => digit !== "") && index === 5) {
      // Auto-navigate to home after a short delay
      setTimeout(() => {
        onClose();
        router.push("/");
      }, 300);
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleClose = () => {
    setCode(["", "", "", "", "", ""]);
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={handleClose}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View className="flex-1 justify-end bg-black/50">
          <View
            className="bg-white rounded-t-3xl px-6 pt-6 pb-8"
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 0, height: -4 },
              shadowOpacity: 0.1,
              shadowRadius: 16,
              elevation: 8,
            }}
          >
            {/* Header */}
            <View className="flex-row items-center justify-between mb-6">
              <Text className="text-2xl font-bold text-neutral-text">
                Verify your email
              </Text>
              <TouchableOpacity
                onPress={handleClose}
                className="w-10 h-10 items-center justify-center"
                activeOpacity={0.7}
              >
                <X size={24} color="#687280" />
              </TouchableOpacity>
            </View>

            {/* Description */}
            <Text className="text-base text-neutral-text-secondary mb-8">
              We&apos;ve sent a verification code to{"\n"}
              <Text className="font-semibold text-neutral-text">{email}</Text>
            </Text>

            {/* Code Input */}
            <View className="flex-row justify-between mb-8">
              {code.map((digit, index) => (
                <TextInput
                  key={index}
                  ref={(ref) => (inputRefs.current[index] = ref)}
                  className="w-12 h-14 bg-neutral-surface rounded-xl text-center text-2xl font-bold text-neutral-text"
                  value={digit}
                  onChangeText={(text) => handleCodeChange(text, index)}
                  onKeyPress={(e) => handleKeyPress(e, index)}
                  keyboardType="number-pad"
                  maxLength={1}
                  selectTextOnFocus
                  style={{
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.05,
                    shadowRadius: 4,
                    elevation: 2,
                  }}
                />
              ))}
            </View>

            {/* Resend Code */}
            <View className="flex-row items-center justify-center">
              <Text className="text-sm text-neutral-text-secondary">
                Didn&apos;t receive the code?{" "}
              </Text>
              <TouchableOpacity activeOpacity={0.7}>
                <Text className="text-sm font-semibold text-primary-purple">
                  Resend
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}
