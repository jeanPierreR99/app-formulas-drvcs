import React, {useState, useEffect} from 'react';
import {
  View,
  Button,
  Alert,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  PermissionsAndroid,
  Platform,
  Modal,
} from 'react-native';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import RNFS from 'react-native-fs';
import FileViewer from 'react-native-file-viewer';
import FileList from './FileList';
import {useData, useDataHipocloro} from '../context/contextProvider';

// const fecha = () => {
//   const now = new Date();
//   const date = now.toLocaleDateString().replace(/\//g, '-');
//   const resDate = date;
//   return resDate + '.' + 'name';
// };

const MyButton = () => {
  const [fileName, setFileName] = useState<string>('');
  const [filePath, setFilePath] = useState<string | null>(null);
  const [refresh, setRefresh] = useState<boolean>(false); // Estado para forzar la actualización
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const {captacion, linea, reservorio, crp} = useData();
  const {captacionH, lineaH, reservorioH, crpH, totalH} = useDataHipocloro();
  useEffect(() => {
    requestExternalStoragePermission();
  }, []);

  const requestExternalStoragePermission = async () => {
    if (Platform.OS === 'android') {
      if (Number(Platform.Version) >= 33) {
        return true;
      }
      try {
        const granted = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        ]);
        return (
          granted['android.permission.WRITE_EXTERNAL_STORAGE'] ===
            PermissionsAndroid.RESULTS.GRANTED &&
          granted['android.permission.READ_EXTERNAL_STORAGE'] ===
            PermissionsAndroid.RESULTS.GRANTED
        );
      } catch (err) {
        console.warn(err);
        return false;
      }
    }
    return true;
  };

  const createPDF = async () => {
    const permissionGranted = await requestExternalStoragePermission();
    if (!permissionGranted) {
      Alert.alert(
        'Permiso denegado',
        'No se puede guardar el PDF sin permisos de almacenamiento.',
      );
      return;
    }

    if (!fileName) {
      Alert.alert('Error', 'Por favor, ingrese un nombre para el PDF');
      return;
    }

    const html = `
    <!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Reporte de Componentes del Sistema</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
      }
      *{
        box-sizing: border-box;
      }
      .container {
        padding: 60px 20px 20px 20px;
        width: 700px;
        margin: auto;
      }
      table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
        background-color: #ffffff;
      }
      th,
      td {
        border: 1px solid #dddddd;
        padding: 10px;
        text-align: center;
        font-size: 12px;
      }
      th {
        background-color: #ebecef; /* bg-gray-700 */
        font-weight: bold;
      }
      .total-row {
        background-color: rgb(218, 218, 218); /* bg-green-500 */
        color: black;
        font-weight: bold;
      }
      .header-cell {
        font-weight: bold;
      }
      .dimensions-header {
        background-color: #2b6cb0; /* bg-blue-700 */
        font-weight: bold;
      }
      .dimensions-table td {
        border: 1px solid #dddddd;
        padding: 8px;
        font-size: 12px;
      }
      .dimensions-table th {
        background-color: #ebecef; /* bg-blue-700 */
        font-weight: bold;
      }
      .title-table {
        background-color: rgb(218, 218, 218);
        padding: 10px 2px 10px 2px;
        text-align: center;
        font-weight: bold;
      }
      .total {
        display: flex;
        flex-direction: column;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="title-table">
        CANTIDAD DE HIPOCLORO DE CALCIO APRA CADA UNO DE LOS SISTEMAS
      </div>
      <table class="dimensions-table">
        <thead>
          <tr>
            <th rowspan="2" class="dimensions-header">
              COMPONENTES DEL SISTEMA
            </th>
            <th class="dimensions-header" colspan="4">DIMENSIONES</th>
            <th rowspan="2" class="dimensions-header">VOLUMEN VI</th>
          </tr>
          <tr>
            <th class="dimensions-header">LARGO</th>
            <th class="dimensions-header">ANCHO</th>
            <th class="dimensions-header">ALTO</th>
            <th class="dimensions-header">DIÁMETRO</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="header-cell">CAPTACIÓN</td>
            <td>${captacion.largo}</td>
            <td>${captacion.ancho}</td>
            <td>${captacion.alto}</td>
            <td>${captacion.diametro}</td>
            <td>${captacion.volumen}</td>
          </tr>
          <tr>
            <td class="header-cell">LINEA DE CONDUCCIÓN</td>
            <td>${linea.largo}</td>
            <td>${linea.ancho}</td>
            <td>${linea.alto}</td>
            <td>${linea.diametro}</td>
            <td>${linea.volumen}</td>
          </tr>
          <tr>
            <td class="header-cell">CRP - VI</td>
            <td>${crp.largo}</td>
            <td>${crp.ancho}</td>
            <td>${crp.alto}</td>
            <td>${crp.diametro}</td>
            <td>${crp.volumen}</td>
          </tr>
          <tr>
            <td class="header-cell">RESERVORIO</td>
            <td>${reservorio.largo}</td>
            <td>${reservorio.ancho}</td>
            <td>${reservorio.alto}</td>
            <td>${reservorio.diametro}</td>
            <td>${reservorio.volumen}</td>
          </tr>
        </tbody>
      </table>

      <div class="title-table">
        VOLUMENES PARA CADA UNO DE LOS COMPONENTES DEL SISTEMA
      </div>
      <table>
        <thead>
          <tr>
            <th class="header-cell">COMPONENTES DEL SISTEMA</th>
            <th class="header-cell">N° DE VECES QUE SE REPITE</th>
            <th class="header-cell">CONCENTRACIÓN mg/lts o ppm</th>
            <th class="header-cell">PESO DEL HIPOCLORITO DE CALCIO 70% (gr)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="header-cell">CAPTACIÓN</td>
            <td>${totalH.capVeces}</td>
            <td>${totalH.capConcen}</td>
            <td>${totalH.capPeso}</td>
          </tr>
          <tr>
            <td class="header-cell">LINEA DE CONDUCCIÓN</td>
            <td>${totalH.lineaVeces}</td>
            <td>${totalH.lineaConcen}</td>
            <td>${totalH.lineaPeso}</td>
          </tr>
          <tr>
            <td class="header-cell">CRP - VI</td>
            <td>${totalH.crpVeces}</td>
            <td>${totalH.crpConcen}</td>
            <td>${totalH.crpPeso}</td>
          </tr>
          <tr>
            <td class="header-cell">RESERVORIO</td>
            <td>${totalH.reservorioVeces}</td>
            <td>${totalH.reservorioConcen}</td>
            <td>${totalH.reservorioPeso}</td>
          </tr>
          <tr class="total-row">
            <td>TOTAL</td>
            <td></td>
            <td></td>
            <td class="total">
              <label style="border-bottom: 1px black solid" for=""
                >${totalH.totalPesoGramos}</label
              ><label for="">${totalH.totalPesoKilo}</label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </body>
</html>

    `;

    try {
      const options = {
        html: html,
        fileName: fileName,
        directory: 'Gestores',
      };

      const pdfPath = `${RNFS.DownloadDirectoryPath}/${fileName}.pdf`;

      setFilePath(pdfPath);

      const file: any = await RNHTMLtoPDF.convert(options);
      console.log('Archivo PDF generado en:', file.filePath);

      await RNFS.moveFile(file.filePath, pdfPath);

      Alert.alert('Éxito', `PDF guardado en: ${pdfPath}`);
      setRefresh(true);
      setRefresh(false);
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Hubo un error al generar el PDF');
    }
  };

  const openFile = async () => {
    if (filePath) {
      try {
        await FileViewer.open(filePath);
      } catch (error: any) {
        if (error.message.includes('No app associated with this mime type')) {
          Alert.alert(
            'Error',
            'No hay ninguna aplicación instalada que pueda abrir este tipo de archivo. Por favor, instala una aplicación compatible y vuelve a intentarlo.',
          );
        } else {
          console.error(error);
          Alert.alert('Error', 'No se pudo abrir el archivo');
        }
      }
    } else {
      Alert.alert('Error', 'No hay archivo para abrir');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Nombre del PDF"
        className="text-black w-full px-2 mt-4 py-0 border-gray-200 border"
        onChangeText={setFileName}
        style={styles.input}
      />
      <TouchableOpacity
        onPress={() => setIsModalVisible(true)}
        className="p-2 my-4 bg-blue-600">
        <Text style={styles.buttonText}>Generar PDF</Text>
      </TouchableOpacity>
      <Modal
        transparent={true}
        visible={isModalVisible}
        animationType="fade"
        onRequestClose={() => setIsModalVisible(false)}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}>
          <View
            style={{
              width: 300,
              padding: 20,
              backgroundColor: 'white',
              borderRadius: 10,
            }}>
            <Text style={{marginBottom: 20}}>
              ¿Estás seguro de que quieres generar el PDF?
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: 'green',
                padding: 10,
                borderRadius: 5,
                alignItems: 'center',
              }}
              onPress={() => {
                createPDF();
                setIsModalVisible(false);
              }}>
              <Text style={{color: 'white'}}>Sí, generar PDF</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: 'red',
                padding: 10,
                borderRadius: 5,
                alignItems: 'center',
                marginTop: 10,
              }}
              onPress={() => setIsModalVisible(false)}>
              <Text style={{color: 'white'}}>No, cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {filePath && (
        <TouchableOpacity onPress={openFile} className="p-2 bg-red-600">
          <Text style={styles.buttonText}>Abrir PDF</Text>
        </TouchableOpacity>
      )}
      <Text className="text-gray-500 font-bold">Archivos Generados</Text>
      <FileList refresh={refresh}></FileList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
  },
});

export default MyButton;
