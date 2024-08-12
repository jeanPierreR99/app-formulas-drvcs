import React, {useState} from 'react';
import {View} from 'react-native';
import FormCapt from './FormCapt';
import FormCaptDes from './FormCaptDes';
import {useData, useDataHipocloro} from '../context/contextProvider';

function TableCrp() {
  const {crp, setCrp} = useData();
  const {crpH, setCrpH} = useDataHipocloro();
  return (
    <View style={{gap: 40}}>
      <FormCapt nameTable={crp} setNameTable={setCrp} title={"CRP - VI"}></FormCapt>
      <FormCaptDes nameTable={crpH} setNameTable={setCrpH}></FormCaptDes>
    </View>
  );
}

export default TableCrp;
