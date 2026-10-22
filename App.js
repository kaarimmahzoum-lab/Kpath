import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView, StatusBar } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0B0F19" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.logoK}>K<Text style={styles.logoPath}>PATH</Text></Text>
          <Text style={styles.subTitle}>PREMIUM SERVICES</Text>
        </View>

        {/* Welcome Section */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>مرحباً بك في K-Path</Text>
          <Text style={styles.cardText}>منصة الخدمات الذكية والنقل والتنقل الحديث.</Text>
        </View>

        {/* Services */}
        <TouchableOpacity style={[styles.serviceButton, { borderColor: '#00A8FF' }]}>
          <Text style={styles.buttonText}>🚗 حجز VTC / سيارات أوجرة</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.serviceButton, { borderColor: '#FF6B00' }]}>
          <Text style={styles.buttonText}>🔑 كراء السيارات (Car Rental)</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.serviceButton, { borderColor: '#00A8FF' }]}>
          <Text style={styles.buttonText}>🏨 الفنادق والفيلات (Hotels & Villas)</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0F19',
  },
  scrollContent: {
    padding: 20,
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    marginVertical: 30,
  },
  logoK: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#00A8FF',
  },
  logoPath: {
    color: '#FFFFFF',
  },
  subTitle: {
    fontSize: 12,
    color: '#FF6B00',
    fontWeight: 'bold',
    letterSpacing: 2,
    marginTop: 5,
  },
  card: {
    backgroundColor: '#161F33',
    padding: 20,
    borderRadius: 12,
    width: '100%',
    marginBottom: 25,
    borderWidth: 1,
    borderColor: '#00A8FF',
  },
  cardTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  cardText: {
    color: '#A0AEC0',
    fontSize: 14,
    textAlign: 'center',
  },
  serviceButton: {
    backgroundColor: '#111827',
    padding: 18,
    borderRadius: 12,
    width: '100%',
    marginBottom: 15,
    borderWidth: 1.5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
