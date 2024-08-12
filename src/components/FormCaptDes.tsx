import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

function FormCaptDes({nameTable, setNameTable}: any) {

  const handleChange = (name: any, value: any) => {
    setNameTable({
      ...nameTable,
      [name]: value,
    });
  };

  const calVol = () => {
    const total: number =
      (parseFloat(nameTable.v as string) * parseFloat(nameTable.cc as string)) /
      (10 * parseFloat(nameTable.ci as string));

      setNameTable({
      ...nameTable,
      peso: total.toFixed(3),
    });
  };

  return (
    <View>
      <Text className="text-cyan-400 font-bold text-center text-xl">
        DESINFECCIÓN - HIPOCLORITO DE CALCIO
      </Text>
      <View className="flex-row p-2">
        <View className="flex-col h-full w-5/12" style={{gap: 10}}>
          <Text className="font-bold">DATOS:</Text>
          <View className="">
            <Text>V (lts)</Text>
            <TextInput
              keyboardType="numeric"
              className="border rounded-sm border-gray-200 h-8 p-2"
              onChangeText={value => handleChange('v', value)}
              value={nameTable.v as string}
            />
          </View>
          <View className="">
            <Text>Cc (mg/lts)</Text>
            <TextInput
              keyboardType="numeric"
              className="border rounded-sm border-gray-200 h-8 p-2"
              onChangeText={value => handleChange('cc', value)}
              value={nameTable.cc as string}
            />
          </View>
          <View className="">
            <Text>% CI</Text>
            <TextInput
              keyboardType="numeric"
              className="border rounded-sm border-gray-200 h-8 p-2"
              onChangeText={value => handleChange('ci', value)}
              value={nameTable.ci as string}
            />
          </View>
          <Button title="Calcular" onPress={() => calVol()} />
        </View>
        <View className="w-7/12 items-center justify-center">
          <Text className="text-3xl text-cyan-400 font-bold">Pcl(gr)</Text>
          <Text className="text-3xl text-cyan-400 font-bold">{nameTable.peso} (gr)</Text>
        </View>
      </View>
    </View>
  );
}

export default FormCaptDes;
