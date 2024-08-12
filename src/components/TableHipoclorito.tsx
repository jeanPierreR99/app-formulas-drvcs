import React, {useEffect, useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {useDataHipocloro} from '../context/contextProvider';

function TableHipoclorito() {
  const {captacionH, lineaH, reservorioH, crpH, totalH, setTotalH} =
    useDataHipocloro();

  const handleChange = (name: string, value: String) => {
    const newValue = value;
    setTotalH(prevData => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  useEffect(() => {
    const captacion = parseFloat(captacionH.peso as string) || 0;
    const linea = parseFloat(lineaH.peso as string) || 0;
    const crp = parseFloat(crpH.peso as string) || 0;
    const reservorio = parseFloat(reservorioH.peso as string) || 0;

    const capPeso = captacion * parseFloat(totalH.capVeces as string);
    const lineaPeso = linea * parseFloat(totalH.lineaVeces as string);
    const crpPeso = crp * parseFloat(totalH.crpVeces as string);
    const reservorioPeso =
      reservorio * parseFloat(totalH.reservorioVeces as string);

    setTotalH(prevData => ({
      ...prevData,
      capPeso,
      lineaPeso,
      crpPeso,
      reservorioPeso,
    }));

    const totalPeso = capPeso + lineaPeso + crpPeso + reservorioPeso;
    const totalPesoKg: any = totalPeso / 1000;
    setTotalH(prevData => ({
      ...prevData,
      totalPesoGramos: totalPeso,
      totalPesoKilo: totalPesoKg,
    }));
  }, [
    totalH.capVeces,
    totalH.lineaVeces,
    totalH.crpVeces,
    totalH.reservorioVeces,
  ]);

  return (
    <View>
      <View className="flex-row bg-blue-100 overflow-hidden h-16 justify-sapce-between items-center">
        <Text className="text-[11px] text-black font-bold text-center w-[30%]">
          COMPONENTES DEL SISTEMA
        </Text>
        <Text
          className="text-[11px] h-full text-black font-bold text-center w-[25%]"
          style={{verticalAlign: 'middle'}}>
          N° DE VECES QUE SE REPITE
        </Text>
        <Text
          className="text-[11px] h-full text-black font-bold text-center w-[25%]"
          style={{verticalAlign: 'middle'}}>
          CONCENTRACIÓN mg/lts o ppm
        </Text>
        <Text
          className="text-[11px] h-full text-black font-bold text-center w-[20%]"
          style={{verticalAlign: 'middle'}}>
          PESO DEL HIPOCLORITO DE CALCIO 70% (gr)
        </Text>
      </View>
      <View className="flex-row">
        <Text className="pl-1 text-[11px] w-[30%] font-bold text-red-600">
          CAPTACIÓN
        </Text>
        <TextInput
          keyboardType="numeric"
          className="text-[11px] border border-gray-200 items-center text-center w-[25%] h-[11px] p-0 text-gray-500"
          style={{alignSelf: 'center'}}
          onChangeText={value => handleChange('capVeces', value)}
          value={`${totalH.capVeces}`}
        />
        <TextInput
          keyboardType="numeric"
          className="text-[11px] border border-gray-200 text-center w-[25%] h-[11px] p-0 text-gray-500"
          style={{alignSelf: 'center'}}
          onChangeText={value => handleChange('capConcen', value)}
          value={`${totalH.capConcen}`}
        />
        <Text className="text-[11px] text-center w-[20%] text-gray-500">
          {totalH.capPeso}
        </Text>
      </View>
      <View className="flex-row">
        <Text className="pl-1 text-[11px] w-[30%] font-bold text-red-600">
          LINEA DE CONDUCCIÓN
        </Text>
        <TextInput
          keyboardType="numeric"
          className="text-[11px] border border-gray-200 text-center w-[25%] h-[11px] p-0 text-gray-500"
          style={{alignSelf: 'center'}}
          onChangeText={value => handleChange('lineaVeces', value)}
          value={`${totalH.lineaVeces}`}
        />
        <TextInput
          keyboardType="numeric"
          className="text-[11px] border border-gray-200 text-center w-[25%] h-[11px] p-0 text-gray-500"
          style={{alignSelf: 'center'}}
          onChangeText={value => handleChange('lineaConcen', value)}
          value={`${totalH.lineaConcen}`}
        />
        <Text
          className="text-[11px] text-center w-[20%] text-gray-500"
          style={{alignSelf: 'center'}}>
          {totalH.lineaPeso}
        </Text>
      </View>
      <View className="flex-row">
        <Text className="pl-1 text-[11px] w-[30%] font-bold text-red-600">
          CRP - VI
        </Text>
        <TextInput
          keyboardType="numeric"
          className="text-[11px] border border-gray-200 text-center w-[25%] h-[11px] p-0 text-gray-500"
          style={{alignSelf: 'center'}}
          onChangeText={value => handleChange('crpVeces', value)}
          value={`${totalH.crpVeces}`}
        />
        <TextInput
          keyboardType="numeric"
          className="text-[11px] border border-gray-200 text-center w-[25%] h-[11px] p-0 text-gray-500"
          style={{alignSelf: 'center'}}
          onChangeText={value => handleChange('crpConcen', value)}
          value={`${totalH.crpConcen}`}
        />
        <Text className="text-[11px] text-center w-[20%] text-gray-500">
          {totalH.crpPeso}
        </Text>
      </View>
      <View className="flex-row">
        <Text className="pl-1 text-[11px] w-[30%] font-bold text-red-600">
          RESERVORIO
        </Text>
        <TextInput
          keyboardType="numeric"
          className="text-[11px] border border-gray-200 text-center w-[25%] h-[11px] p-0 text-gray-500"
          style={{alignSelf: 'center'}}
          onChangeText={value => handleChange('reservorioVeces', value)}
          value={`${totalH.reservorioVeces}`}
        />
        <TextInput
          keyboardType="numeric"
          className="text-[11px] border border-gray-200 text-center w-[25%] h-[11px] p-0 text-gray-500"
          style={{alignSelf: 'center'}}
          onChangeText={value => handleChange('reservorioConcen', value)}
          value={`${totalH.reservorioConcen}`}
        />
        <Text className="text-[11px] text-center w-[20%] text-gray-500">
          {totalH.reservorioPeso}
        </Text>
      </View>
      <View className="flex-row justify-between bg-gray-100 w-full">
        <Text
          className="pl-1 text-[11px] w-[80%] font-bold text-black"
          style={{verticalAlign: 'middle'}}>
          TOTAL
        </Text>
        <View className="w-[20%]">
          <Text className="text-[12px] border-b text-center w-full font-bold text-black">
            {totalH.totalPesoGramos} GR
          </Text>
          <Text className="text-[12px] text-center w-full font-bold text-black">
            {totalH.totalPesoKilo} KG
          </Text>
        </View>
      </View>
    </View>
  );
}

export default TableHipoclorito;
