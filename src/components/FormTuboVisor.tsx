import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

const FormTuboVisor = () => {
  const [d, setD] = useState('');
  const [v, setV] = useState('');
  const [hMetro, sethMetro] = useState(0);
  const [hCm, sethCm] = useState(0);

  const calcTubo = () => {
    const dM: number = parseFloat(d) / 100;
    const vm3: number = parseFloat(v) / 1000;

    const res: number = (4 * vm3) / (3.141516 * (dM * dM));
    sethMetro(res);
    sethCm(res * 100);
  };

  return (
    <View>
      <Text className="text-red-500 font-bold text-center text-xl">
        MARCADO DEL TUBO VISOR
      </Text>
      <View>
        <View className="p-2">
          <Text className="font-bold mb-2">DATOS:</Text>
          <View className="flex-row">
            <View className="flex-col h-full w-5/12" style={{gap: 10}}>
              <View className="w-full">
                <Text>D (cm)</Text>
                <TextInput
                  keyboardType="numeric"
                  className="border rounded-sm border-gray-200 h-8 p-2"
                  onChangeText={value => {
                    setD(value);
                  }}
                  //   value={aforo.v as string}
                />
              </View>
              <View className="w-full">
                <Text>V (lts)</Text>
                <TextInput
                  keyboardType="numeric"
                  className="border rounded-sm border-gray-200 h-8 p-2"
                  onChangeText={value => {
                    setV(value);
                  }}
                />
              </View>
              <Button title="Calcular" onPress={calcTubo} />
            </View>
            <View className="w-6/12 items-center justify-center pl-4">
              <Text className="text-xl text-red-500 font-bold">h (m)</Text>
              <Text className="text-3xl text-red-500 font-bold">
                {hMetro ? hMetro.toFixed(4) : 0}
              </Text>
              <Text className="text-xl text-red-500 font-bold">h (cm)</Text>
              <Text className="text-3xl text-red-500 font-bold">
                {hCm ? hCm.toFixed(2) : 0}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FormTuboVisor;
