// src/screens/ScreenA.tsx
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import TableCrp from '../components/TableCrp';

const ScreenCrp = () => (
  <ScrollView className="bg-white">
  <View className="p-4">
    <TableCrp></TableCrp>
  </View>
  </ScrollView>
);


export default ScreenCrp;
