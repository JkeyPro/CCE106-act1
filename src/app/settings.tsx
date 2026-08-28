import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import TopBar from '../components/TopBar';
import { useTheme } from '../context/ThemeContext';

export default function Settings() {
  const { colors } = useTheme();

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.bg }]}>
      <TopBar title="Settings" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
});