import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';

function FormCapt({nameTable, setNameTable, title}:any) {

  const handleChange = (name: string, value: string) => {
    setNameTable({
      ...nameTable,
      [name]: value,
    });
  };

  const calVol = () => {
    const total: number =
      parseFloat(nameTable.largo as string) *
      parseFloat(nameTable.ancho as string) *
      parseFloat(nameTable.alto as string);

      console.log(total)
      setNameTable({
      ...nameTable,
      volumen: total.toFixed(2),
    });
  };

  return (
    <View>
      <Text className="text-blue-500 font-bold text-center text-xl">
        {title}
      </Text>
      <View className="flex-row p-2">
        <View className="flex-col h-full w-5/12" style={{gap: 10}}>
          <Text className="font-bold">DATOS:</Text>
          <View className="">
            <Text>Largo (m)</Text>
            <TextInput
              keyboardType="numeric"
              className="border rounded-sm border-gray-200 h-8 p-2"
              onChangeText={value => {
                handleChange('largo', value);
              }}
              value={nameTable.largo as string}
            />
          </View>
          <View className="">
            <Text>Ancho (m)</Text>
            <TextInput
              keyboardType="numeric"
              className="border rounded-sm border-gray-200 h-8 p-2"
              onChangeText={value => {
                handleChange('ancho', value);
              }}
              value={nameTable.ancho as string}
            />
          </View>
          <View className="">
            <Text>Altura (m)</Text>
            <TextInput
              keyboardType="numeric"
              className="border rounded-sm border-gray-200 h-8 p-2"
              onChangeText={value => {
                handleChange('alto', value);
              }}
              value={nameTable.alto as string}
            />
          </View>
          <Button title="Calcular" onPress={() => calVol()} />
        </View>
        <View className="w-7/12 items-center justify-center">
          <Text className="text-3xl text-blue-500 font-bold">V(m3)</Text>
          <Text className="text-3xl text-blue-500 font-bold">
            {nameTable.volumen} (m3)
          </Text>
        </View>
      </View>
    </View>
  );
}

export default FormCapt;
