import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
  StyleSheet,
  SafeAreaView, 
  Platform,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { useTheme } from "./ThemeContext";

const AVATAR_URLS = [
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/44.jpg",
];

export default function ProfileScreen() {
  const [name, setName] = useState<string>("");
  const [avatarIndex, setAvatarIndex] = useState<number>(0);
  const { darkMode } = useTheme();

  const isDark = darkMode;

  const handleSave = () => {
    if (name.trim() === "") {
      Alert.alert("Atenção", "Por favor, digite seu nome antes de salvar.");
      return;
    }
    Alert.alert("Perfil Salvo!", `Nome: ${name}`);
  };

  const handleToggleAvatar = () => {
    setAvatarIndex((prev) => (prev === 0 ? 1 : 0));
  };

  return (
    <SafeAreaView style={[styles.safe, isDark && darkStyles.safe]}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          {/* Header */}
          <Text style={[styles.heading, isDark && darkStyles.heading]}>Perfil Rápido</Text>

          {/* Avatar */}
          <View style={styles.avatarContainer}>
            <View style={[styles.avatarRing, isDark && darkStyles.avatarRing]}>
              <Image
                source={{ uri: AVATAR_URLS[avatarIndex] }}
                style={styles.avatar}
                resizeMode="cover"
              />
            </View>

            <TouchableOpacity
              style={[styles.toggleButton, isDark && darkStyles.toggleButton]}
              onPress={handleToggleAvatar}
              activeOpacity={0.7}
            >
              <Text style={[styles.toggleButtonText, isDark && darkStyles.toggleButtonText]}>
                🔄 Change Photo
              </Text>
            </TouchableOpacity>
          </View>

          {/* Input */}
          <View style={styles.inputGroup}>
            <Text style={[styles.label, isDark && darkStyles.label]}>Name</Text>
            <TextInput
              style={[styles.input, isDark && darkStyles.input]}
              placeholder="Type your name..."
              placeholderTextColor={isDark ? "#777" : "#999"}
              value={name}
              onChangeText={setName}
              autoCapitalize="words"
              returnKeyType="done"
            />
          </View>

          {/* Preview */}
          {name.trim() !== "" && (
            <View style={[styles.previewCard, isDark && darkStyles.previewCard]}>
              <Image
                source={{ uri: AVATAR_URLS[avatarIndex] }}
                style={styles.previewAvatar}
                resizeMode="cover"
              />
              <View style={styles.previewInfo}>
                <Text style={[styles.previewName, isDark && darkStyles.previewName]}>
                  {name}
                </Text>
                <Text style={[styles.previewBio, isDark && darkStyles.previewBio]}>
                  Member of the community ✨
                </Text>
              </View>
            </View>
          )}

          {/* Save Button */}
          <TouchableOpacity
            style={[
              styles.saveButton,
              isDark && darkStyles.saveButton,
              name.trim() === "" && styles.saveButtonDisabled,
              name.trim() === "" && isDark && darkStyles.saveButtonDisabled,
            ]}
            onPress={handleSave}
            activeOpacity={0.8}
          >
            <Text style={[styles.saveButtonText, isDark && darkStyles.saveButtonText]}>
              💾 Save Profile
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#F0F2F5",
  },
  flex: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: Platform.OS === "android" ? 50 : 30,
    paddingBottom: 40,
  },

  // Header
  heading: {
    fontSize: 28,
    fontWeight: "800",
    color: "#1A1A2E",
    letterSpacing: -0.5,
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    color: "#666",
    marginBottom: 30,
  },

  // Avatar
  avatarContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  avatarRing: {
    width: 162,
    height: 162,
    borderRadius: 81,
    borderWidth: 3,
    borderColor: "#1A1A2E",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  toggleButton: {
    backgroundColor: "#E8E8EC",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  toggleButtonText: {
    color: "#1A1A2E",
    fontSize: 14,
    fontWeight: "700",
  },

  // Input
  inputGroup: {
    width: "100%",
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    fontWeight: "700",
    color: "#333",
    marginBottom: 8,
    marginLeft: 4,
  },
  input: {
    width: "100%",
    height: 52,
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    paddingHorizontal: 18,
    fontSize: 16,
    color: "#1A1A2E",
    borderWidth: 1.5,
    borderColor: "#E0E0E0",
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },

  // Preview Card
  previewCard: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  previewAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 14,
  },
  previewInfo: {
    flex: 1,
  },
  previewName: {
    fontSize: 17,
    fontWeight: "700",
    color: "#1A1A2E",
    marginBottom: 2,
  },
  previewBio: {
    fontSize: 13,
    color: "#888",
  },

  // Save Button
  saveButton: {
    width: "100%",
    height: 54,
    backgroundColor: "#1A1A2E",
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 5,
  },
  saveButtonDisabled: {
    backgroundColor: "#6B6B7B",
  },
  saveButtonText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "800",
    letterSpacing: 0.3,
  },
});

const darkStyles = StyleSheet.create({
  safe: {
    backgroundColor: "#0A0A0A",
  },
  heading: {
    color: "#FFFFFF",
  },
  subtitle: {
    color: "#999",
  },
  avatarRing: {
    borderColor: "#FFFFFF",
  },
  toggleButton: {
    backgroundColor: "#2C2C2E",
  },
  toggleButtonText: {
    color: "#FFFFFF",
  },
  label: {
    color: "#CCC",
  },
  input: {
    backgroundColor: "#1C1C1E",
    borderColor: "#333",
    color: "#FFFFFF",
  },
  previewCard: {
    backgroundColor: "#1C1C1E",
    borderColor: "#333",
  },
  previewName: {
    color: "#FFFFFF",
  },
  previewBio: {
    color: "#999",
  },
  saveButton: {
    backgroundColor: "#FFFFFF",
  },
  saveButtonDisabled: {
    backgroundColor: "#444",
  },
  saveButtonText: {
    color: "#1A1A2E",
  },
});
