import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {useDataHipocloroCalcio} from '../context/contextProvider';

function FormDosificadorCalcio() {
  const {hipocloroCalcio, setHipocloroCalcio} = useDataHipocloroCalcio();

  const handleChange = (name: string, value: string) => {
    setHipocloroCalcio({
      ...hipocloroCalcio,
      [name]: value,
    });
  };

  const calCalcio = () => {
    const VltsOneDay: number =
      parseFloat(hipocloroCalcio.q as string) *
      parseFloat(hipocloroCalcio.tBombeo as string) *
      60;

    const Vm3OneDay: number = VltsOneDay / 1000;

    const POneDay: number =
      (VltsOneDay * parseFloat(hipocloroCalcio.cc as string)) /
      (10 * parseFloat(hipocloroCalcio.ci as string)) ||0;

    const PgrTrDay: number = parseFloat(hipocloroCalcio.tr as string) * POneDay || 0;

    const PkgTrDay: number = PgrTrDay / 1000  || 0;

    const vDilution: number =
      (PgrTrDay * 10 * parseFloat(hipocloroCalcio.ci as string)) / 10000 || 0 ;

    const goteoLtsH: number =
      parseFloat(hipocloroCalcio.Vtanq as string) /
      ((parseFloat(hipocloroCalcio.tr as string) *
        parseFloat(hipocloroCalcio.tBombeo as string)) /
        60) || 0;

    const goteoMilMin: number = (goteoLtsH * 1000) / 60;

    const gotaoGalH: number = goteoLtsH / 3.79;

    const ccFinal: number =
      (PkgTrDay * 10 * parseFloat(hipocloroCalcio.ci as string) * 1000) /
      parseFloat(hipocloroCalcio.Vtanq as string) || 0;

    setHipocloroCalcio({
      ...hipocloroCalcio,
      VltsOneDay: VltsOneDay.toFixed(2),
      Vm3OneDay: Vm3OneDay.toFixed(2),
      POneDay: POneDay.toFixed(2),
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
      <Text className="text-red-500 font-bold text-center text-xl">
        HIPOCLORITO DE CALCIO
      </Text>
      <View className="p-2">
        <View className="w-full" style={{gap: 10}}>
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
                  value={hipocloroCalcio.q as string}
                />
              </View>
              <View className="w-full">
                <Text>% CI</Text>
                <TextInput
                  keyboardType="numeric"
                  className="border rounded-sm border-gray-200 h-8 p-2"
                  onChangeText={value => {
                    handleChange('ci', value);
                  }}
                  value={hipocloroCalcio.ci as string}
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
                  value={hipocloroCalcio.tBombeo as string}
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
                  value={hipocloroCalcio.tr as string}
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
                  value={hipocloroCalcio.cc as string}
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
                  value={hipocloroCalcio.Vtanq as string}
                />
              </View>
            </View>
          </View>
          <Button title="Calcular" onPress={calCalcio} />
          <View className="w-full" style={{gap: 10}}>
            <View className="flex-row">
              <View className="w-6/12 pr-2">
                <Text className="text-red-500 font-bold text-xs">
                  Para un día
                </Text>
                <Text className="text-gray-500 text-xs">
                  V (lts) {hipocloroCalcio.VltsOneDay} lts
                </Text>
                <Text className="text-gray-500 text-xs">
                  V (lts) {hipocloroCalcio.Vm3OneDay} m3
                </Text>
                <Text className="text-gray-500 text-xs">Pcl(gr) {hipocloroCalcio.POneDay} gr</Text>
              </View>
              <View className="w-6/12 pl-2">
                <Text className="text-red-500 font-bold text-xs">
                  Para Tr (días) de recarga
                </Text>
                <Text className="text-gray-500 text-xs">Pcl(kg) {hipocloroCalcio.PgrTrDay} gr</Text>
                <Text className="text-gray-500 text-xs">Pcl(kg) {hipocloroCalcio.PkgTrDay} kg</Text>
              </View>
            </View>
            <View className="flex-row">
              <View className="w-6/12 pr-2">
                <Text className="text-red-500 font-bold text-xs">Dilución</Text>
                <Text className="text-gray-500 text-xs">V agua {hipocloroCalcio.vDilution} lts</Text>
              </View>
              <View className="w-6/12 pl-2">
                <Text className="text-red-500 font-bold text-xs">
                  Caudal de Goteo
                </Text>
                <Text className="text-gray-500 text-xs">
                  G goteo {hipocloroCalcio.goteoLtsH} lts/h
                </Text>
                <Text className="text-gray-500 text-xs">
                  G goteo {hipocloroCalcio.goteoMilMin} Mil/min
                </Text>
                <Text className="text-gray-500 text-xs">
                  G goteo {hipocloroCalcio.gotaoGalH} Gal/h
                </Text>
              </View>
            </View>
            <View className="w-6/12 pr-2">
              <Text className="text-red-500 font-bold text-xs">
                Verificación de la Cc
              </Text>
              <Text className="text-gray-500 text-xs">Cc (mg/lts) {hipocloroCalcio.ccFinal}</Text>
              {parseFloat(hipocloroCalcio.ccFinal as string)<=100000?<Text className="text-green-500 font-bold text-xl">OK</Text>:<Text className="text-red-500 font-bold text-xl">ERROR</Text>}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default FormDosificadorCalcio;