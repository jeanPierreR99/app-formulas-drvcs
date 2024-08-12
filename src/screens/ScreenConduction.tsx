// src/screens/ScreenA.tsx
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import TableLineConduct from '../components/TableLineConduct';

const ScreenConduction = () => (
  <ScrollView className="bg-white">
  <View className="p-4">
    <TableLineConduct></TableLineConduct>
  </View>
  </ScrollView>
);


export default ScreenConduction;
