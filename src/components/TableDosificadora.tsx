import React, {useState} from 'react';
import {View} from 'react-native';
import FormDosificadorCalcio from './FormDosificadorCalcio';
import FormDosificadorLejia from './FormDosificadorLejia';

function TableDosificadora() {
  return (
    <View style={{gap: 40}}>
      <FormDosificadorCalcio></FormDosificadorCalcio>
      <FormDosificadorLejia></FormDosificadorLejia>
    </View>
  );
}

export default TableDosificadora;
