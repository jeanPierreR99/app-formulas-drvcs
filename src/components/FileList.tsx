import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import RNFS from 'react-native-fs';
import FileViewer from 'react-native-file-viewer';

const FileList = ({refresh}: any) => {
  const [files, setFiles] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const loadFiles = async () => {
      try {
        const path = `${RNFS.DownloadDirectoryPath}`;
        const result = await RNFS.readDir(path)
        const fileNames = result.map(file => file.name);
        setFiles(fileNames);
      } catch (err) {
        setError('No se pudieron cargar los archivos');
      } finally {
        setLoading(false);
      }
    };

    loadFiles();
  }, [refresh]);

  if (loading) return <ActivityIndicator size="large" color="#0000ff" />;
  if (error) return <Text>{error}</Text>;

  const openFile = async (fileName: string) => {
    const filePath = `${RNFS.DownloadDirectoryPath}/${fileName}`;
    console.log(filePath);
    if (filePath) {
      try {
        await FileViewer.open(filePath);
      } catch (error) {
        console.error(error);
        Alert.alert('Error', 'No se pudo abrir el archivo');
      }
    } else {
      Alert.alert('Error', 'No hay archivo para abrir');
    }
  };

  return (
    <View style={styles.container}>
      {files.map((fileName, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => openFile(fileName)}
          style={styles.item}>
          <Text className="text-gray-500">{fileName}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default FileList;
