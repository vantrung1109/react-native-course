import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, Alert } from 'react-native';
import CustomButton from '@/components/CustomButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import axios from 'axios';
import { API_BASE_URL } from '@/config';
import { useGlobalContext } from '@/context/GlobalProvider';

interface UserData {
  displayName: string;
  email: string;
  // Add other properties if needed
}

const Profile = () => {
  const {token} = useGlobalContext();
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(API_BASE_URL + '/v1/user/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(response.data.data);
  
      } catch (error) {
        Alert.alert('Error', 'Email or password is incorrect')
        console.log(error)
      } 
    };

    fetchUserData();
  }, []);

  const logOut = async () => {
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('userData');
    router.replace('/');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.profileHeader}>
          <Image
            source={{ uri: 'https://via.placeholder.com/150' }}
            style={styles.avatar}
          />
          <Text style={styles.name}>{userData?.displayName || 'User Name'}</Text>
          <Text style={styles.email}>{userData?.email || 'user@example.com'}</Text>
        </View>

        <View style={styles.infoSection}>
          {/* Thêm các thông tin khác nếu cần */}
        </View>

        <CustomButton 
          title="Log out"
          handlePress={logOut}
          containerStyles={styles.logoutButton}
          textStyles={styles.logoutButtonText}
           isLoading={undefined}        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0', // Giả sử đây là màu primary của bạn
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 20,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: '#666',
  },
  infoSection: {
    width: '100%',
    paddingHorizontal: 20,
  },
  logoutButton: {
    marginTop: 20,
    backgroundColor: '#ff3b30',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Profile;