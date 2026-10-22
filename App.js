import React, { useState } from 'react';
import { 
  StyleSheet, Text, View, TouchableOpacity, ScrollView, 
  SafeAreaView, StatusBar, Image, Alert, TextInput 
} from 'react-native';

export default function App() {
  const [lang, setLang] = useState('AR'); // AR, FR, EN
  const [activeTab, setActiveTab] = useState('home'); // home, vtc, rental, airbnb, voice
  const [selectedListing, setSelectedListing] = useState(null);
  const [voiceQuery, setVoiceQuery] = useState('');

  // نصوص التوطين واللغات
  const i18n = {
    AR: {
      location: '📍 الدار البيضاء، المغرب',
      subtitle: 'منصة الخدمات والتنقل العالمية',
      bannerTitle: 'مرحباً بك في K-PATH',
      bannerDesc: 'الحل الشامل للتنقل، كراء السيارات، والحجوزات العالمية بصيغة Airbnb.',
      vtc: '🚗 VTC وسيارات أجرة',
      rental: '🔑 كراء السيارات',
      airbnb: '🏡 إقامات وفيلات (Airbnb Style)',
      voice: '🎙️ الأوامر الصوتية الذكية',
      bookNow: 'تأكيد الحجز الآن',
      back: '← العودة للقائمة',
      voicePlaceholder: 'قل شيئاً (مثلاً: احجز لي VTC إلى المعاريف)...',
      listen: 'بدء الاستماع الصوتي 🎧',
      price: 'السعر',
      rating: 'التقييم',
    },
    FR: {
      location: '📍 Casablanca, Maroc',
      subtitle: 'SERVICES & MOBILITÉ GLOBALE',
      bannerTitle: 'Bienvenue sur K-PATH',
      bannerDesc: 'Solution complète VTC, Location de voitures & Séjours style Airbnb.',
      vtc: '🚗 VTC & Taxis',
      rental: '🔑 Location de Voitures',
      airbnb: '🏡 Fincas & Villas (Airbnb)',
      voice: '🎙️ Commandes Vocales',
      bookNow: 'Réserver Maintenant',
      back: '← Retour',
      voicePlaceholder: 'Parlez (ex: Réserver VTC vers Maarif)...',
      listen: 'Activer la voix 🎧',
      price: 'Prix',
      rating: 'Note',
    },
    EN: {
      location: '📍 Casablanca, Morocco',
      subtitle: 'GLOBAL SERVICES & MOBILITY',
      bannerTitle: 'Welcome to K-PATH',
      bannerDesc: 'All-in-one VTC, Car Rental & Airbnb-style Luxury Stays.',
      vtc: '🚗 VTC & Rides',
      rental: '🔑 Car Rentals',
      airbnb: '🏡 Stays & Villas (Airbnb)',
      voice: '🎙️ Smart Voice Command',
      bookNow: 'Book Now',
      back: '← Back',
      voicePlaceholder: 'Speak (e.g., Book VTC to Maarif)...',
      listen: 'Start Listening 🎧',
      price: 'Price',
      rating: 'Rating',
    }
  };

  const t = i18n[lang];

  // عقارات بطريقة Airbnb
  const airbnbListings = [
    {
      id: 1,
      title: 'فيلا فاخرة بمسبح خاص - عين الذئاب',
      titleEn: 'Luxury Villa with Pool - Anfa',
      price: '2,500 DH / نهار',
      rating: '⭐ 4.9 (128 تقييم)',
      img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500',
      desc: 'فيلا مطلة على المحيط، 4 غرف نوم، مسبح خاص، حراسة 24/7 وخادمة منزلية.',
    },
    {
      id: 2,
      title: 'شقة مودرن مطلة على مسجد الحسن الثاني',
      titleEn: 'Modern Oceanview Apartment',
      price: '900 DH / نهار',
      rating: '⭐ 4.8 (85 تقييم)',
      img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500',
      desc: 'شقة فاخرة وسط المدينة، أثاث عصري، إنترنت عالي السرعة وموقف سيارات.',
    }
  ];

  const handleVoiceCommand = () => {
    if(!voiceQuery.trim()) return;
    Alert.alert(
      'K-Path Voice AI 🎙️',
      `تم تحليل أمرك الصوتي: "${voiceQuery}"\nجاري تنفيذه فوراً!`
    );
    setVoiceQuery('');
  };

  // الواجهة الرئيسية
  const renderHome = () => (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      {/* Header & Language Selector */}
      <View style={styles.topBar}>
        <View style={styles.locationBadge}>
          <Text style={styles.locationText}>{t.location}</Text>
        </View>
        <View style={styles.langContainer}>
          {['AR', 'FR', 'EN'].map((l) => (
            <TouchableOpacity 
              key={l} 
              style={[styles.langBtn, lang === l && styles.langBtnActive]}
              onPress={() => setLang(l)}
            >
              <Text style={[styles.langText, lang === l && styles.langTextActive]}>{l}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.header}>
        <Text style={styles.logoK}>K<Text style={styles.logoPath}>PATH</Text></Text>
        <Text style={styles.subTitle}>{t.subtitle}</Text>
      </View>

      {/* Banner */}
      <View style={styles.bannerCard}>
        <Text style={styles.bannerTitle}>{t.bannerTitle}</Text>
        <Text style={styles.bannerDesc}>{t.bannerDesc}</Text>
      </View>

      {/* Grid Services */}
      <TouchableOpacity style={[styles.serviceCard, { borderColor: '#00A8FF' }]} onPress={() => setActiveTab('vtc')}>
        <Text style={styles.serviceText}>{t.vtc}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.serviceCard, { borderColor: '#FF6B00' }]} onPress={() => setActiveTab('rental')}>
        <Text style={styles.serviceText}>{t.rental}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.serviceCard, { borderColor: '#00A8FF' }]} onPress={() => setActiveTab('airbnb')}>
        <Text style={styles.serviceText}>{t.airbnb}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.serviceCard, { borderColor: '#FF6B00', backgroundColor: '#1A233A' }]} onPress={() => setActiveTab('voice')}>
        <Text style={[styles.serviceText, { color: '#FF6B00' }]}>{t.voice}</Text>
      </TouchableOpacity>
    </ScrollView>
  );

  // واجهة Airbnb
  const renderAirbnb = () => (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <TouchableOpacity style={styles.backBtn} onPress={() => setActiveTab('home')}>
        <Text style={styles.backText}>{t.back}</Text>
      </TouchableOpacity>
      
      <Text style={styles.sectionHeading}>{t.airbnb}</Text>

      {airbnbListings.map((item) => (
        <View key={item.id} style={styles.airbnbCard}>
          <Image source={{ uri: item.img }} style={styles.airbnbImage} />
          <View style={styles.airbnbBody}>
            <Text style={styles.airbnbTitle}>{lang === 'AR' ? item.title : item.titleEn}</Text>
            <Text style={styles.airbnbDesc}>{item.desc}</Text>
            <View style={styles.airbnbMeta}>
              <Text style={styles.priceTag}>{item.price}</Text>
              <Text style={styles.ratingTag}>{item.rating}</Text>
            </View>
            <TouchableOpacity 
              style={styles.bookBtn}
              onPress={() => Alert.alert('K-Path Airbnb', `تم تسجيل طلب حجز: ${item.title}`)}
            >
              <Text style={styles.bookBtnText}>{t.bookNow}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );

  // واجهة الأوامر الصوتية
  const renderVoice = () => (
    <View style={styles.voiceContainer}>
      <TouchableOpacity style={styles.backBtn} onPress={() => setActiveTab('home')}>
        <Text style={styles.backText}>{t.back}</Text>
      </TouchableOpacity>

      <View style={styles.micCircle}>
        <Text style={{ fontSize: 60 }}>🎙️</Text>
      </View>

      <Text style={styles.voiceTitle}>K-Path AI Voice Assistant</Text>
      <Text style={styles.voiceSub}>تحدث بلغتك الأم، وسيقوم المساعد الذكي بتنفيذ طلبك.</Text>

      <TextInput 
        style={styles.voiceInput}
        placeholder={t.voicePlaceholder}
        placeholderTextColor="#6B7280"
        value={voiceQuery}
        onChangeText={setVoiceQuery}
      />

      <TouchableOpacity style={styles.listenBtn} onPress={handleVoiceCommand}>
        <Text style={styles.listenBtnText}>{t.listen}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0B0F19" />
      {activeTab === 'home' && renderHome()}
      {activeTab === 'airbnb' && renderAirbnb()}
      {activeTab === 'voice' && renderVoice()}
      {(activeTab === 'vtc' || activeTab === 'rental') && (
        <View style={styles.voiceContainer}>
          <TouchableOpacity style={styles.backBtn} onPress={() => setActiveTab('home')}>
            <Text style={styles.backText}>{t.back}</Text>
          </TouchableOpacity>
          <Text style={styles.sectionHeading}>{activeTab === 'vtc' ? t.vtc : t.rental}</Text>
          <TouchableOpacity 
            style={styles.listenBtn}
            onPress={() => Alert.alert('K-Path', 'تم الحجز بنجاح!')}
          >
            <Text style={styles.listenBtnText}>{t.bookNow}</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B0F19' },
  scrollContent: { padding: 20 },
  topBar: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 },
  locationBadge: { backgroundColor: '#161F33', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 12 },
  locationText: { color: '#00A8FF', fontSize: 11, fontWeight: 'bold' },
  langContainer: { flexDirection: 'row' },
  langBtn: { paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6, marginLeft: 4, backgroundColor: '#161F33' },
  langBtnActive: { backgroundColor: '#00A8FF' },
  langText: { color: '#A0AEC0', fontSize: 10, fontWeight: 'bold' },
  langTextActive: { color: '#FFFFFF' },
  header: { alignItems: 'center', marginBottom: 20 },
  logoK: { fontSize: 44, fontWeight: 'bold', color: '#00A8FF' },
  logoPath: { color: '#FFFFFF' },
  subTitle: { fontSize: 10, color: '#FF6B00', fontWeight: 'bold', letterSpacing: 2, marginTop: 4 },
  bannerCard: { backgroundColor: '#161F33', padding: 18, borderRadius: 14, marginBottom: 20, borderWidth: 1, borderColor: '#00A8FF' },
  bannerTitle: { color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', marginBottom: 6 },
  bannerDesc: { color: '#9CA3AF', fontSize: 13, lineHeight: 18 },
  serviceCard: { backgroundColor: '#111827', padding: 18, borderRadius: 12, marginBottom: 12, borderWidth: 1.5, alignItems: 'center' },
  serviceText: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' },
  backBtn: { marginBottom: 15 },
  backText: { color: '#00A8FF', fontSize: 14, fontWeight: '600' },
  sectionHeading: { color: '#FFFFFF', fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  airbnbCard: { backgroundColor: '#161F33', borderRadius: 16, overflow: 'hidden', marginBottom: 20, borderWidth: 1, borderColor: '#1F2937' },
  airbnbImage: { width: '100%', height: 180 },
  airbnbBody: { padding: 16 },
  airbnbTitle: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold', marginBottom: 6 },
  airbnbDesc: { color: '#9CA3AF', fontSize: 12, marginBottom: 12 },
  airbnbMeta: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 },
  priceTag: { color: '#00A8FF', fontWeight: 'bold', fontSize: 14 },
  ratingTag: { color: '#FF6B00', fontWeight: 'bold', fontSize: 12 },
  bookBtn: { backgroundColor: '#00A8FF', padding: 12, borderRadius: 10, alignItems: 'center' },
  bookBtnText: { color: '#FFFFFF', fontWeight: 'bold' },
  voiceContainer: { flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center' },
  micCircle: { width: 110, height: 110, borderRadius: 55, backgroundColor: '#161F33', justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: '#FF6B00', marginBottom: 20 },
  voiceTitle: { color: '#FFFFFF', fontSize: 20, fontWeight: 'bold', marginBottom: 8 },
  voiceSub: { color: '#9CA3AF', textAlign: 'center', marginBottom: 20, fontSize: 13 },
  voiceInput: { backgroundColor: '#161F33', color: '#FFFFFF', width: '100%', padding: 14, borderRadius: 10, borderWidth: 1, borderColor: '#374151', marginBottom: 15, textAlign: 'center' },
  listenBtn: { backgroundColor: '#FF6B00', paddingVertical: 14, paddingHorizontal: 30, borderRadius: 10, width: '100%', alignItems: 'center' },
  listenBtnText: { color: '#FFFFFF', fontWeight: 'bold', fontSize: 16 },
});
