import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#392ddd",
        tabBarInactiveTintColor: "#888888",
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          height: 65,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "600",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="briefcase-outline"
              color={String(color)}
              size={size}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="estudios"
        options={{
          title: "Estudios",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="briefcase-outline"
              color={String(color)}
              size={size}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="experiencia"
        options={{
          title: "Experiencia",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="briefcase-outline"
              color={String(color)}
              size={size}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="hobbies"
        options={{
          title: "Hobbies",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="briefcase-outline"
              color={String(color)}
              size={size}
            />
          ),
        }}
      />

      <Tabs.Screen name="explore" options={{ href: null }} />
    </Tabs>
  );
}
