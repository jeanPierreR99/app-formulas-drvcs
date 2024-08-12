import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {useData} from '../context/contextProvider';

function FormConduct() {
  const {linea, setLinea} = useData();
  const [metro, setMetro] = useState(0);

  const handleChange = (name: string, value: string) => {
    setLinea({
      ...linea,
      [name]: value,
    });
  };

  const handleMetro = (value: string) => {
    const total = (parseFloat(value) * 2.54) / 100;
    setLinea({
      ...linea,
      diametro: value,
    });
    setMetro(total);
  };

  const handleArea = () => {
    const total = 3.1416 * ((metro * metro) / 4);
    return total;
  };

  const handleVol = (area: number) => {
    const total = parseFloat(linea.largo as string) * area;
    return total;
  };

  const handleButton = () => {
    const areaValue = handleArea();
    if (areaValue) {
      const vol = handleVol(areaValue);
      setLinea({
        ...linea,
        area: areaValue.toFixed(3),
        volumen: vol.toFixed(2),
      });
    } else {
      console.log('------------ no hay valor');
    }
  };

  return (
    <View>
      <Text className="text-blue-500 font-bold text-center text-xl">
        LINEA DE CONDUCCIÓN
      </Text>
      <View className="flex-row p-2">
        <View className="flex-col h-full w-5/12" style={{gap: 10}}>
          <Text className="font-bold">DATOS:</Text>
          <View>
            <Text>Largo (m)</Text>
            <TextInput
              keyboardType="numeric"
              className="border rounded-sm border-gray-200 h-8 p-2"
              onChangeText={value => {
                handleChange('largo', value);
              }}
              value={linea.largo as string}
            />
          </View>
          <View>
            <Text>Diametro (pulg)</Text>
            <TextInput
              keyboardType="numeric"
              className="border rounded-sm border-gray-200 h-8 p-2"
              onChangeText={value => handleMetro(value)}
              value={linea.diametro as string}
            />
            <Text className="text-right">{metro.toFixed(4)} (m)</Text>
          </View>
          <Button title="Calcular" onPress={handleButton} />
        </View>
        <View className="w-7/12 items-center justify-center">
          <Text className="text-3xl text-blue-500 font-bold">A(m²)</Text>
          <Text className="text-3xl text-blue-500 font-bold">
            {linea.area} (m²)
          </Text>
          <Text className="text-3xl text-blue-500 font-bold">V(m³)</Text>
          <Text className="text-3xl text-blue-500 font-bold">
            {linea.volumen} (m³)
          </Text>
        </View>
      </View>
    </View>
  );
}

export default FormConduct;
