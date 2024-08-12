// src/screens/ScreenA.tsx
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import TableReservorio from '../components/TableReservorio';
const ScreenReservorio = () => (
  <ScrollView className="bg-white">
  <View className="p-4">
    <TableReservorio></TableReservorio>
  </View>
  </ScrollView>
);


export default ScreenReservorio;
