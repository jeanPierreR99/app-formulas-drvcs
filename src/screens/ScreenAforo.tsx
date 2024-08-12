// src/screens/ScreenA.tsx
import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import TableCapt from '../components/TableCapt';
import FormAforo from '../components/FormAforo';

const ScreenAforo = () => (
  <ScrollView className="bg-white">
    <View className="p-4">
      <FormAforo />
    </View>
  </ScrollView>
);

export default ScreenAforo;
