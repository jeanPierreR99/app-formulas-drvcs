import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import { useDataHipocloroCalcio } from '../context/contextProvider';
import { validatePathConfig } from '@react-navigation/native';

function FormDosificadorLejia() {
  const {hipocloroLejia, setHipocloroLejia} = useDataHipocloroCalcio();

  const handleChange = (name: string, value: string) => {
    setHipocloroLejia({
      ...hipocloroLejia,
      [name]: value,
    });
  };

  const calCalcio = () => {
    const VltsOneDay: number =
      parseFloat(hipocloroLejia.q as string) *
      parseFloat(hipocloroLejia.tBombeo as string) *
      60;

    const Vm3OneDay: number = VltsOneDay / 1000;

    const VOneDay: number =
      (VltsOneDay * parseFloat(hipocloroLejia.cc as string)) /
      (10000 * parseFloat(hipocloroLejia.lejia as string)) ||0;

    const PgrTrDay: number = parseFloat(hipocloroLejia.tr as string) * VOneDay || 0;

    const PkgTrDay: number = PgrTrDay / 3.86  || 0;

    const vDilution: number =
      (PgrTrDay * 10000 * parseFloat(hipocloroLejia.lejia as string)) / 10000 || 0 ;

    const goteoLtsH: number =
      parseFloat(hipocloroLejia.Vtanq as string) /
      ((parseFloat(hipocloroLejia.tr as string) *
        parseFloat(hipocloroLejia.tBombeo as string)) /
        60) || 0;

    const goteoMilMin: number = (goteoLtsH * 1000) / 60;

    const gotaoGalH: number = goteoLtsH / 3.79;

    const ccFinal: number =
      (PgrTrDay * parseFloat(hipocloroLejia.lejia as string) * 10000) /
      parseFloat(hipocloroLejia.Vtanq as string) || 0;

    setHipocloroLejia({
      ...hipocloroLejia,
      VltsOneDay: VltsOneDay.toFixed(2),
      Vm3OneDay: Vm3OneDay.toFixed(2),
      VOneDay: VOneDay.toFixed(2),
      PgrTrDay: PgrTrDay.toFixed(2),
      PkgTrDay: PkgTrDay.toFixed(2),
      vDilution: vDilution.toFixed(2),
      goteoLtsH: goteoLtsH.toFixed(2),
      goteoMilMin: goteoMilMin.toFixed(2),
      gotaoGalH: gotaoGalH.toFixed(2),
      ccFinal: ccFinal.toFixed(2),
    });
  };

  return (
    <View>
      <Text className="text-orange-400 font-bold text-center text-xl">
        HIPOCLORITO DE SODIO (LEJIA)
      </Text>
      <View className="p-2">
        <View className="h-full w-full" style={{gap: 10}}>
          <Text className="font-bold">DATOS:</Text>
          <View className="flex-row w-full justify-center">
            <View className="w-6/12 pr-2" style={{gap: 10}}>
              <View className="w-full">
                <Text>Q (lts/s)</Text>
                <TextInput
                  keyboardType="numeric"
                  className="border rounded-sm border-gray-200 h-8 p-2"
                  onChangeText={value => {
                    handleChange('q', value);
                  }}
                  value={hipocloroLejia.q as string}
                />
              </View>
              <View className="w-full">
                <Text>% lejia</Text>
                <TextInput
                  keyboardType="numeric"
                  className="border rounded-sm border-gray-200 h-8 p-2"
                  onChangeText={value => {
                    handleChange('lejia', value);
                  }}
                  value={hipocloroLejia.lejia as string}
                />
              </View>
              <View className="w-full">
                <Text>Tbombeo(min)</Text>
                <TextInput
                  keyboardType="numeric"
                  className="border rounded-sm border-gray-200 h-8 p-2"
                  onChangeText={value => {
                    handleChange('tBombeo', value);
                  }}
                  value={hipocloroLejia.tBombeo as string}
                />
              </View>
            </View>
            <View className="w-6/12 pl-2" style={{gap: 10}}>
              <View className="w-full">
                <Text>Tr (días)</Text>
                <TextInput
                  keyboardType="numeric"
                  className="border rounded-sm border-gray-200 h-8 p-2"
                  onChangeText={value => {
                    handleChange('tr', value);
                  }}
                  value={hipocloroLejia.tr as string}
                />
              </View>
              <View className="w-full">
                <Text>Cc (mg/l)</Text>
                <TextInput
                  keyboardType="numeric"
                  className="border rounded-sm border-gray-200 h-8 p-2"
                  onChangeText={value => {
                    handleChange('cc', value);
                  }}
                  value={hipocloroLejia.cc as string}
                />
              </View>
              <View className="w-full">
                <Text>V tanq</Text>
                <TextInput
                  keyboardType="numeric"
                  className="border rounded-sm border-gray-200 h-8 p-2"
                  onChangeText={value => {
                    handleChange('Vtanq', value);
                  }}
                  value={hipocloroLejia.Vtanq as string}
                />
              </View>
            </View>
          </View>
          <Button title="Calcular" onPress={calCalcio} />
          <View className="w-full" style={{gap: 10}}>
            <View className="flex-row">
              <View className="w-6/12 pr-2">
                <Text className="text-orange-400 font-bold text-xs">
                  Para un día
                </Text>
                <Text className="text-gray-500 text-xs">
                  V (lts) {hipocloroLejia.VltsOneDay} lts
                </Text>
                <Text className="text-gray-500 text-xs">
                  V (lts) {hipocloroLejia.Vm3OneDay} m3
                </Text>
                <Text className="text-gray-500 text-xs">V lejia {hipocloroLejia.VOneDay} lts</Text>
              </View>
              <View className="w-6/12 pl-2">
                <Text className="text-orange-400 font-bold text-xs">
                  Para Tr (días) de recarga
                </Text>
                <Text className="text-gray-500 text-xs">V lejia {hipocloroLejia.PgrTrDay} lts</Text>
                <Text className="text-gray-500 text-xs">V lejia {hipocloroLejia.PkgTrDay} Gl</Text>
              </View>
            </View>
            <View className="flex-row">
              <View className="w-6/12 pr-2">
                <Text className="text-orange-400 font-bold text-xs">Dilución</Text>
                <Text className="text-gray-500 text-xs">V agua {hipocloroLejia.vDilution} lts</Text>
              </View>
              <View className="w-6/12 pl-2">
                <Text className="text-orange-400 font-bold text-xs">
                  Caudal de Goteo
                </Text>
                <Text className="text-gray-500 text-xs">
                  G goteo {hipocloroLejia.goteoLtsH} lts/h
                </Text>
                <Text className="text-gray-500 text-xs">
                  G goteo {hipocloroLejia.goteoMilMin} Mil/min
                </Text>
                <Text className="text-gray-500 text-xs">
                  G goteo {hipocloroLejia.gotaoGalH} Gal/h
                </Text>
              </View>
            </View>
            <View className="w-6/12 pr-2">
              <Text className="text-orange-400 font-bold text-xs">
                Verificación de la Cc
              </Text>
              <Text className="text-gray-500 text-xs">Cc (mg/lts) {hipocloroLejia.ccFinal}</Text>
              {parseFloat(hipocloroLejia.ccFinal as string)<=120000?<Text className="text-green-500 font-bold text-xl">OK</Text>:<Text className="text-red-500 font-bold text-xl">ERROR</Text>}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default FormDosificadorLejia;