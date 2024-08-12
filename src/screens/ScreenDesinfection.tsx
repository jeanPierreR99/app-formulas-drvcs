// src/screens/ScreenA.tsx
import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import TableVol from '../components/TableVol';
import TableHipoclorito from '../components/TableHipoclorito';
import MyButton from '../components/MyButton';

const ScreenA = () => (
  <ScrollView className="bg-white">
    <View className="p-4">
      <View className="bg-red-600 p-2 items-center">
        <Text className="font-bold text-center text-white">
          VOLÚMENES PARA CADA UNO DE LOS COMPONENTES DEL SISTEMA
        </Text>
      </View>
      <TableVol></TableVol>
      {/* next */}

      <View className="bg-blue-600 p-2 mt-10 items-center">
        <Text className="font-bold text-center text-white">
          CANTIDAD DE HIPOCLORITO DE CALCIO PARA CADA UNO DE LOS COMPONENTES DEL
          SISTEMA
        </Text>
      </View>
      <TableHipoclorito></TableHipoclorito>
      <View>
        <MyButton></MyButton>
      </View>
    </View>
  </ScrollView>
);

export default ScreenA;
