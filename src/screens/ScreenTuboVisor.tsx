// src/screens/ScreenA.tsx
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import FormTuboVisor from '../components/FormTuboVisor';

const ScreenTuboVisor = () => (
  <ScrollView className="bg-white">
  <View className="p-4">
    <FormTuboVisor></FormTuboVisor>
  </View>
  </ScrollView>
);


export default ScreenTuboVisor;
