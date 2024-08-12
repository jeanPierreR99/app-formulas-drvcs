// src/screens/ScreenA.tsx
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import TableCapt from '../components/TableCapt';

const ScreenCaptation = () => (
  <ScrollView className="bg-white">
  <View className="p-4">
    <TableCapt></TableCapt>
  </View>
  </ScrollView>
);


export default ScreenCaptation;
