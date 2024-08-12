import React, {useState} from 'react';
import {View} from 'react-native';
import FormCapt from './FormCapt';
import FormCaptDes from './FormCaptDes';
import {useData, useDataHipocloro} from '../context/contextProvider';

function TableCapt() {
  const {captacion, setCaptacion} = useData();
  const {captacionH, setCaptacionH} = useDataHipocloro();
  return (
    <View style={{gap: 40}}>
      <FormCapt nameTable={captacion} setNameTable={setCaptacion} title={"CAPTACIÓN"}></FormCapt>
      <FormCaptDes nameTable={captacionH} setNameTable={setCaptacionH}></FormCaptDes>
    </View>
  );
}

export default TableCapt;
