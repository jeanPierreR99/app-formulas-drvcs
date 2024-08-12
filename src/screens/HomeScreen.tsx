// src/screens/HomeScreen.tsx
import React, { useState } from 'react';
import { View, ScrollView, Text, Pressable, Image, Animated } from 'react-native';

const HomeScreen = ({ navigation }: { navigation: any }) => {
  const createAnimatedScale = () => {
    const scaleValue = new Animated.Value(1);

    const handlePressIn = () => {
      Animated.spring(scaleValue, {
        toValue: 0.85,
        useNativeDriver: true,
      }).start();
    };

    const handlePressOut = () => {
      Animated.spring(scaleValue, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    };

    return { scaleValue, handlePressIn, handlePressOut };
  };

  const renderButton = (navigateTo: string, imageSource: any, text: string, imageStyle = {}) => {
    const { scaleValue, handlePressIn, handlePressOut } = createAnimatedScale();
    return (
      <Pressable
        onPress={() => navigation.navigate(navigateTo)}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        <Animated.View
          style={{
            transform: [{ scale: scaleValue }],
          }}
          className="w-40 h-40 m-2 justify-center items-center rounded-lg"
        >
          <Image
            source={imageSource}
            className="w-full h-full rounded-[15px]"
            style={{ resizeMode: "cover", ...imageStyle }}
          />
          <Text className="text-white absolute font-bold w-full text-center">
            {text}
          </Text>
        </Animated.View>
      </Pressable>
    );
  };

  return (
    <ScrollView className="flex-1 p-4 bg-white">
      <View className="flex-row justify-center py-10">
        <View>
          {renderButton('ScreenDesinfection', require('../public/images/icon-resultados.jpg'), 'Resultados Linea de Conduccion, Captación, CRP - VI, Reservorio')}
          {renderButton('ScreenCaptation', require('../public/images/icon-captacion.png'), 'Captación')}
          {renderButton('ScreenReservorio', require('../public/images/icon-reservorio.png'), 'Reservorio', { resizeMode: 'stretch' })}
          {renderButton('ScreenTuboVisor', require('../public/images/tubo-visor.png'), 'Tubo Visor')}
        </View>
        <View>
          {renderButton('ScreenConduction', require('../public/images/icon-linea.png'), 'Linea de Conducción', { resizeMode: 'stretch' })}
          {renderButton('ScreenCrp', require('../public/images/icon-crp.jpeg'), 'CRP - VI', { resizeMode: 'stretch' })}
          {renderButton('ScreenDosificador', require('../public/images/icon-bomba-dosificadora.png'), 'Bomba Dosificadora')}
          {renderButton('ScreenAforo', require('../public/images/icon-aforo.png'), 'Medición del Caudal', { resizeMode: 'stretch' })}
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
