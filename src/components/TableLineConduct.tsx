import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import FormConduct from './FormConduct';
import { useDataHipocloro } from '../context/contextProvider';
import FormCaptDes from './FormCaptDes';

function TableLineConduct() {
  const {lineaH, setLineaH} = useDataHipocloro()
  return (
    <View style={{gap: 40}}>
      <FormConduct></FormConduct>
      <FormCaptDes nameTable={lineaH} setNameTable={setLineaH}></FormCaptDes>
    </View>
  );
}

export default TableLineConduct;
