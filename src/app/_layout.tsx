import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { ThemeProvider, useTheme } from '../context/ThemeContext';

function ThemedTabs() {
  const { colors } = useTheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.navy,
        tabBarInactiveTintColor: '#FFFFFF',
        tabBarStyle: {
          backgroundColor: colors.navy,
          borderTopWidth: 0,
          height: 78,
          paddingBottom: 14,
          paddingTop: 8,
        },
        tabBarItemStyle: {
          marginHorizontal: 6,
          borderRadius: 10,
        },
        tabBarActiveBackgroundColor: colors.cream,
        tabBarLabelStyle: {
          fontWeight: '700',
          fontSize: 12,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-sharp" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <ThemedTabs />
    </ThemeProvider>
  );
}