import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

export default function App() {
  const [activeTab, setActiveTab] = useState('Home');

  const services = [
    { id: '1', title: 'VTC & Chauffeur', icon: '🚗', desc: 'Transport privé de luxe' },
    { id: '2', title: 'Car Rental', icon: '🔑', desc: 'Location de voitures' },
    { id: '3', title: 'Hotels & Villas', icon: '🏰', desc: 'Réservations exclusives' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0B0F19" />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoK}>K</font></Text>
          <Text style={styles.logoPath}>PATH</Text>
        </View>
        <Text style={styles.subtitle}>PREMIUM SERVICES</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Banner */}
        <View style={styles.banner}>
          <Text style={styles.bannerTitle}>Bienvenue sur K-Path</Text>
          <Text style={styles.bannerSub}>Votre plateforme de réservation VIP</Text>
        </View>

        {/* Services List */}
        <Text style={styles.sectionTitle}>Nos Services</Text>
        {services.map((item) => (
          <TouchableOpacity key={item.id} style={styles.card} activeOpacity={0.8}>
            <Text style={styles.cardIcon}>{item.icon}</Text>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDesc}>{item.desc}</Text>
            </View>
            <Text style={styles.arrow}>➔</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Navigation */}
      <View style={styles.navBar}>
        {['Home', 'Reservations', 'Profile'].map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
            style={styles.navItem}
          >
            <Text style={[styles.navText, activeTab === tab && styles.activeNavText]}>
              {tab === 'Home' ? 'Accueil' : tab === 'Reservations' ? 'Réservations' : 'Profil'}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0F19',
  },
  header: {
    paddingTop: 40,
    paddingBottom: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#1F293D',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoK: {
    fontSize: 32,
    fontWeight: '900',
    color: '#00A8FF',
  },
  logoPath: {
    fontSize: 32,
    fontWeight: '900',
    color: '#FFFFFF',
    marginLeft: 4,
  },
  subtitle: {
    fontSize: 10,
    color: '#FF6B00',
    letterSpacing: 3,
    marginTop: 2,
    fontWeight: 'bold',
  },
  content: {
    padding: 20,
  },
  banner: {
    backgroundColor: '#161F33',
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#00A8FF33',
    marginBottom: 25,
  },
  bannerTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  bannerSub: {
    color: '#94A3B8',
    fontSize: 14,
    marginTop: 5,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  card: {
    backgroundColor: '#161F33',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 18,
    borderRadius: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#1F293D',
  },
  cardIcon: {
    fontSize: 28,
    marginRight: 15,
  },
  cardInfo: {
    flex: 1,
  },
  cardTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardDesc: {
    color: '#94A3B8',
    fontSize: 12,
    marginTop: 2,
  },
  arrow: {
    color: '#00A8FF',
    fontSize: 18,
  },
  navBar: {
    flexDirection: 'row',
    backgroundColor: '#161F33',
    borderTopWidth: 1,
    borderTopColor: '#1F293D',
    paddingVertical: 15,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
  },
  navText: {
    color: '#94A3B8',
    fontSize: 14,
  },
  activeNavText: {
    color: '#00A8FF',
    fontWeight: 'bold',
  },
});
