import React from 'react';
import {View, Text} from 'react-native';
import {useData} from '../context/contextProvider';

function TableVol() {
  const {captacion, linea, reservorio, crp} = useData();
  return (
    <View>
      <View className="flex-row bg-red-100 overflow-hidden h-16 justify-sapce-between items-center">
        <Text className="text-[11px] text-black font-bold  text-center w-[30%]">
          COMPONENTES DEL SISTEMA
        </Text>
        <View className="items-center h-full w-[55%]">
          <Text
            className="text-[11px] text-black font-bold h-8 w-full text-center"
            style={{verticalAlign: 'middle'}}>
            DIMENSIONES
          </Text>
          <View className="flex-row h-8 w-full">
            <Text
              className="text-[11px] text-black font-bold px-1 w-[25%] text-center"
              style={{verticalAlign: 'middle'}}>
              LARGO
            </Text>
            <Text
              className="text-[11px] text-black font-bold px-1 w-[25%] text-center"
              style={{verticalAlign: 'middle'}}>
              ANCHO
            </Text>
            <Text
              className="text-[11px] text-black font-bold px-1 w-[25%] text-center"
              style={{verticalAlign: 'middle'}}>
              ALTO
            </Text>
            <Text
              className="text-[11px] text-black font-bold px-1 w-[25%] text-center"
              style={{verticalAlign: 'middle'}}>
              DIAMETRO
            </Text>
          </View>
        </View>
        <View className="h-full px-1  w-[15%]">
          <Text className="text-[11px] font-bold  text-center w-full text-black m-auto">
            VOLUMEN VI
          </Text>
        </View>
      </View>
      <View className="flex-row">
        <View className="w-[30%]">
          <Text className="pl-1 text-[11px] w-full font-bold text-red-600">
            CAPTACIÓN
          </Text>
        </View>
        <View className="w-[55%] flex-row">
          <Text className="text-[11px] text-center w-[25%]">
            {captacion.largo}
          </Text>
          <Text className="text-[11px] text-center w-[25%]">
            {captacion.ancho}
          </Text>
          <Text className="text-[11px] text-center w-[25%]">
            {captacion.alto}
          </Text>
          <Text className="text-[11px] text-center w-[25%]">
            {captacion.diametro}
          </Text>
        </View>
        <View className="w-[15%]">
          <Text className="text-[12px] text-center font-bold text-black">
            {captacion.volumen}
          </Text>
        </View>
      </View>
      <View className="flex-row">
        <View className="w-[30%]">
          <Text className="pl-1 text-[11px] w-full font-bold text-red-600">
            LINEA DE CONDUCCIÓN
          </Text>
        </View>
        <View className="w-[55%] flex-row" style={{alignItems: 'center'}}>
          <Text className="text-[11px] text-center w-[25%] text-gray-500">
            {linea.largo}
          </Text>
          <Text className="text-[11px] text-center w-[25%] text-gray-500">
            {linea.ancho}
          </Text>
          <Text className="text-[11px] text-center w-[25%] text-gray-500">
            {linea.alto}
          </Text>
          <Text className="text-[11px] text-center w-[25%] text-gray-500">
            {linea.diametro}
          </Text>
        </View>
        <View
          className="w-[15%] flex-row justify-center"
          style={{alignItems: 'center'}}>
          <Text className="text-[12px] text-center font-bold text-black">
            {linea.volumen}
          </Text>
        </View>
      </View>
      <View className="flex-row">
        <View className="w-[30%]">
          <Text className="pl-1 text-[11px] w-full font-bold text-red-600">
            CRP - VI
          </Text>
        </View>
        <View className="w-[55%] flex-row">
          <Text className="text-[11px] text-center w-[25%] text-gray-500">
            {crp.largo}
          </Text>
          <Text className="text-[11px] text-center w-[25%] text-gray-500">
            {crp.ancho}
          </Text>
          <Text className="text-[11px] text-center w-[25%] text-gray-500">
            {crp.alto}
          </Text>
          <Text className="text-[11px] text-center w-[25%] text-gray-500">
            {crp.diametro}
          </Text>
        </View>
        <View className="w-[15%]">
          <Text className="text-[12px] text-center font-bold text-black">
            {crp.volumen}
          </Text>
        </View>
      </View>
      <View className="flex-row">
        <View className="w-[30%]">
          <Text className="pl-1 text-[11px] w-full font-bold text-red-600">
            RESERVORIO
          </Text>
        </View>
        <View className="w-[55%] flex-row">
          <Text className="text-[11px] text-center w-[25%] text-gray-500">
            {reservorio.largo}
          </Text>
          <Text className="text-[11px] text-center w-[25%] text-gray-500">
            {reservorio.ancho}
          </Text>
          <Text className="text-[11px] text-center w-[25%] text-gray-500">
            {reservorio.alto}
          </Text>
          <Text className="text-[11px] text-center w-[25%] text-gray-500">
            {reservorio.diametro}
          </Text>
        </View>
        <View className="w-[15%]">
          <Text className="text-[12px] text-center font-bold text-black">
            {reservorio.volumen}
          </Text>
        </View>
      </View>
    </View>
  );
}

export default TableVol;
