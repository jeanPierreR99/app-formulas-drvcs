import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {useDataHipocloroCalcio} from '../context/contextProvider';

const FormAforo = () => {
  const {aforo, setAforo} = useDataHipocloroCalcio();

  const handleChange = (name: string, value: string) => {
    setAforo({
      ...aforo,
      [name]: value,
    });
  };

  const calCaudal = () => {
    const tPromedio =
      (parseFloat(aforo.t1 as string) +
        parseFloat(aforo.t2 as string) +
        parseFloat(aforo.t3 as string)) /
      3 || 0;

    const caudal:number = parseFloat(aforo.v as string) / tPromedio || 0;

    setAforo({...aforo, caudal: caudal.toFixed(2)});
  };

  return (
    <View>
      <Text className="text-red-500 font-bold text-center text-xl">
        MEDICIÓN DE CAUDAL - METODO VOLUMETRICO
      </Text>
      <View>
        <View className="p-2">
          <Text className="font-bold mb-2">DATOS:</Text>
          <View className="flex-row">
            <View className="flex-col h-full w-5/12" style={{gap: 10}}>
              <View className="w-full">
                <Text>Volumen V(lts)</Text>
                <TextInput
                  keyboardType="numeric"
                  className="border rounded-sm border-gray-200 h-8 p-2"
                  onChangeText={value => {
                    handleChange('v', value);
                  }}
                  value={aforo.v as string}
                />
              </View>
              <View className="w-full">
                <Text>Toma1 (seg)</Text>
                <TextInput
                  keyboardType="numeric"
                  className="border rounded-sm border-gray-200 h-8 p-2"
                  onChangeText={value => {
                    handleChange('t1', value);
                  }}
                  value={aforo.t1 as string}
                />
              </View>
              <View className="w-full">
                <Text>Toma2 (seg)</Text>
                <TextInput
                  keyboardType="numeric"
                  className="border rounded-sm border-gray-200 h-8 p-2"
                  onChangeText={value => {
                    handleChange('t2', value);
                  }}
                  value={aforo.t2 as string}
                />
              </View>
              <View className="w-full">
                <Text>Toma3 (seg)</Text>
                <TextInput
                  keyboardType="numeric"
                  className="border rounded-sm border-gray-200 h-8 p-2"
                  onChangeText={value => {
                    handleChange('t3', value);
                  }}
                  value={aforo.t3 as string}
                />
              </View>
              <Button title="Calcular" onPress={calCaudal} />
            </View>
            <View className="w-6/12 items-center justify-center pl-4">
              <Text className="text-xl text-red-500 font-bold">Caudal</Text>
              <Text className="text-3xl text-red-500 font-bold">
                {aforo.caudal}
              </Text>
              <Text className="text-xl text-red-500 font-bold">Lts/Seg</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FormAforo;
