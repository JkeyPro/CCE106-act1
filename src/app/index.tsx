import React, { useMemo } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  StyleSheet,
} from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import TopBar from '../components/TopBar';
import { useTheme } from '../context/ThemeContext';
import { ThemeColors } from '../components/theme';

export default function Home() {
  const { colors } = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);

  const SOCIAL_LINKS = [
    {
      id: 'instagram',
      icon: 'instagram' as const,
      color: '#E1306C',
      url: 'https://instagram.com/urjkeyzxn',
    },
    {
      id: 'email',
      icon: 'envelope' as const,
      color: colors.navy,
      url: 'mailto:3kyletzy@gmail.com',
    },
    {
      id: 'github',
      icon: 'github' as const,
      color: '#171515',
      url: 'https://github.com/jkeyPro',
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <TopBar title="Profile" />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.card}>
          <Image
            source={require('../../assets/images/Profile.png')}
            style={styles.avatar}
          />
          <Text style={styles.name}>Justine Kyle Bonga I.</Text>
          <Text style={styles.role}>Student | Software Engineer</Text>

          <View style={styles.aboutCard}>
            <View style={styles.aboutHeader}>
              <Ionicons name="add-circle" size={20} color="#FFFFFF" />
              <Text style={styles.aboutHeaderText}>About Me</Text>
            </View>
            <View style={styles.aboutBody}>
              <Text style={styles.aboutText}>
                 a student passionate about learning and growing in tech.
                 I’m currently focusing on programming, UI, and UX design,
                 building my skills to create smooth and engaging digital experiences. 
                 My goal is to become a full‑stack developer,
                 capable of crafting both the front‑end and back‑end of modern applications.
              </Text>
            </View>
          </View>

          <View style={styles.socialRow}>
            {SOCIAL_LINKS.map((link) => (
              <TouchableOpacity
                key={link.id}
                style={[styles.socialButton, { backgroundColor: link.color }]}
                onPress={() => Linking.openURL(link.url)}
                activeOpacity={0.8}
              >
                <FontAwesome name={link.icon} size={22} color="#FFFFFF" />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function makeStyles(colors: ThemeColors) {
  return StyleSheet.create({
    safeArea: { flex: 1, backgroundColor: colors.bg },
    content: { padding: 20, paddingBottom: 40 },
    card: {
      backgroundColor: colors.card,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: colors.border,
      padding: 24,
      alignItems: 'center',
    },
    avatar: {
      width: 130,
      height: 130,
      borderRadius: 65,
      marginBottom: 16,
    },
    name: { fontSize: 22, fontWeight: '800', color: colors.navy },
    role: { fontSize: 14, color: colors.textMuted, marginTop: 6, marginBottom: 20 },
    aboutCard: {
      width: '100%',
      borderRadius: 12,
      overflow: 'hidden',
      borderWidth: 1,
      borderColor: colors.border,
    },
    aboutHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.navy,
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
    aboutHeaderText: {
      color: '#FFFFFF',
      fontWeight: '800',
      fontSize: 16,
      marginLeft: 8,
    },
    aboutBody: {
      backgroundColor: colors.cardAlt,
      padding: 16,
    },
    aboutText: {
      color: colors.navy,
      fontSize: 14.5,
      lineHeight: 22,
      fontWeight: '500',
    },
    socialRow: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 20,
    },
    socialButton: {
      width: 48,
      height: 48,
      borderRadius: 24,
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 8,
    },
  });
}