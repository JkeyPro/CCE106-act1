import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

export default function TopBar({ title }: { title: string }) {
  const { colors } = useTheme();

  return (
    <View style={[styles.bar, { backgroundColor: colors.navy }]}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    paddingTop: 54,
    paddingBottom: 18,
    paddingHorizontal: 20,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '800',
  },
});