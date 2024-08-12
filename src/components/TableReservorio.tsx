import React, {useState} from 'react';
import {View} from 'react-native';
import FormCapt from './FormCapt';
import FormCaptDes from './FormCaptDes';
import {useData, useDataHipocloro} from '../context/contextProvider';

function TableReservorio() {
  const {reservorio, setReservorio} = useData();
  const {reservorioH, setReservorioH} = useDataHipocloro();
  return (
    <View style={{gap: 40}}>
      <FormCapt nameTable={reservorio} setNameTable={setReservorio} title={"RESERVORIO"}></FormCapt>
      <FormCaptDes nameTable={reservorioH} setNameTable={setReservorioH}></FormCaptDes>
    </View>
  );
}

export default TableReservorio;
