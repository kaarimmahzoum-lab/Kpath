import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView, StatusBar, Alert } from 'react-native';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('home');

  const renderHomeScreen = () => (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logoK}>K<Text style={styles.logoPath}>PATH</Text></Text>
        <Text style={styles.subTitle}>PREMIUM SERVICES</Text>
      </View>

      {/* Welcome Section */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>مرحباً بك في K-Path</Text>
        <Text style={styles.cardText}>اختر إحدى الخدمات التالية للمتابعة.</Text>
      </View>

      {/* Services */}
      <TouchableOpacity 
        style={[styles.serviceButton, { borderColor: '#00A8FF' }]}
        onPress={() => setCurrentScreen('vtc')}
      >
        <Text style={styles.buttonText}>🚗 حجز VTC / سيارات أوجرة</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.serviceButton, { borderColor: '#FF6B00' }]}
        onPress={() => setCurrentScreen('rental')}
      >
        <Text style={styles.buttonText}>🔑 كراء السيارات (Car Rental)</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.serviceButton, { borderColor: '#00A8FF' }]}
        onPress={() => setCurrentScreen('hotels')}
      >
        <Text style={styles.buttonText}>🏨 الفنادق والفيلات (Hotels & Villas)</Text>
      </TouchableOpacity>
    </ScrollView>
  );

  const renderDetailScreen = (title, description, color) => (
    <View style={styles.detailContainer}>
      <Text style={[styles.detailTitle, { color }]}>{title}</Text>
      <Text style={styles.detailText}>{description}</Text>
      
      <TouchableOpacity 
        style={[styles.actionButton, { backgroundColor: color }]}
        onPress={() => Alert.alert('K-Path', `تم تسجيل طلبك في خدمة ${title} بنجاح!`)}
      >
        <Text style={styles.actionButtonText}>تاكيد الطلب الان</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => setCurrentScreen('home')}
      >
        <Text style={styles.backButtonText}>← العودة للقائمة الرئيسية</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0B0F19" />
      {currentScreen === 'home' && renderHomeScreen()}
      {currentScreen === 'vtc' && renderDetailScreen('حجز VTC', 'خدمة التنقل الفاخر مع سائق خاص داخل وخارج المدينة.', '#00A8FF')}
      {currentScreen === 'rental' && renderDetailScreen('كراء السيارات', 'تصفح أسطول السيارات المتاحة للكراء بأفضل الأسعار.', '#FF6B00')}
      {currentScreen === 'hotels' && renderDetailScreen('الفنادق والفيلات', 'حجز إقامات فاخرة وفيلات حصرية.', '#00A8FF')}
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
  detailContainer: {
    flex: 1,
    padding: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  detailText: {
    color: '#A0AEC0',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
  },
  actionButton: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backButton: {
    padding: 10,
  },
  backButtonText: {
    color: '#A0AEC0',
    fontSize: 14,
  },
});
