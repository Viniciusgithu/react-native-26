import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@/components/ThemeContext";

export default function TabsLayout() {
  const { darkMode } = useTheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: darkMode ? "#FFFFFF" : "#1A1A2E",
        tabBarInactiveTintColor: darkMode ? "#666" : "#999",
        tabBarStyle: {
          backgroundColor: darkMode ? "#1C1C1E" : "#FFFFFF",
          borderTopWidth: 1,
          borderTopColor: darkMode ? "#333333" : "#E5E5EA",
          height: 60,
          paddingBottom: 8,
          paddingTop: 6,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "News",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="newspaper-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
