// src/screens/ScreenA.tsx
import React from 'react';
import {View, ScrollView} from 'react-native';
import TableDosificadora from '../components/TableDosificadora';

const ScreenDosificador = () => (
  <ScrollView className="bg-white">
    <View className="p-4">
      <TableDosificadora></TableDosificadora>
    </View>
  </ScrollView>
);

export default ScreenDosificador;
