// App.tsx
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';
import ScreenDesinfection from './src/screens/ScreenDesinfection';
import ScreenCaptation from './src/screens/ScreenCaptation';
import ScreenConduction from './src/screens/ScreenConduction';
import ScreenCrp from './src/screens/ScreenCrp';
import ScreenReservorio from './src/screens/ScreenReservorio';
import ScreenDosificador from './src/screens/ScreenDosificador';
import ScreenTuboVisor from './src/screens/ScreenTuboVisor';
import ScreenAforo from './src/screens/ScreenAforo';

import {
  DataProvider,
  DataProviderDosificadoraCalcio,
  DataProviderHipocloro,
} from './src/context/contextProvider';

type RootStackParamList = {
  Home: undefined;
  ScreenDesinfection: undefined;
  ScreenCaptation: undefined;
  ScreenConduction: undefined;
  ScreenCrp: undefined;
  ScreenReservorio: undefined;
  ScreenTuboVisor: undefined;
  ScreenDosificador: undefined;
  ScreenAforo: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <DataProvider>
      <DataProviderHipocloro>
        <DataProviderDosificadoraCalcio>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="ScreenDesinfection"
                component={ScreenDesinfection}
                options={{
                  title: '',
                  headerStyle: {backgroundColor: '#ffff'},
                  headerTintColor: '#0c6ccc',
                }}
              />
              <Stack.Screen
                name="ScreenCaptation"
                component={ScreenCaptation}
                options={{
                  title: '',
                  headerStyle: {backgroundColor: '#ffff'},
                  headerTintColor: '#0c6ccc',
                }}
              />
              <Stack.Screen
                name="ScreenConduction"
                component={ScreenConduction}
                options={{
                  title: '',
                  headerStyle: {backgroundColor: '#ffff'},
                  headerTintColor: '#0c6ccc',
                }}
              />
              <Stack.Screen
                name="ScreenCrp"
                component={ScreenCrp}
                options={{
                  title: '',
                  headerStyle: {backgroundColor: '#ffff'},
                  headerTintColor: '#0c6ccc',
                }}
              />
              <Stack.Screen
                name="ScreenReservorio"
                component={ScreenReservorio}
                options={{
                  title: '',
                  headerStyle: {backgroundColor: '#ffff'},
                  headerTintColor: '#0c6ccc',
                }}
              />
              <Stack.Screen
                name="ScreenDosificador"
                component={ScreenDosificador}
                options={{
                  title: '',
                  headerStyle: {backgroundColor: '#ffff'},
                  headerTintColor: '#0c6ccc',
                }}
              />
              <Stack.Screen
                name="ScreenTuboVisor"
                component={ScreenTuboVisor}
                options={{
                  title: '',
                  headerStyle: {backgroundColor: '#ffff'},
                  headerTintColor: '#0c6ccc',
                }}
              />
                        <Stack.Screen
                name="ScreenAforo"
                component={ScreenAforo}
                options={{
                  title: '',
                  headerStyle: {backgroundColor: '#ffff'},
                  headerTintColor: '#0c6ccc',
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </DataProviderDosificadoraCalcio>
      </DataProviderHipocloro>
    </DataProvider>
  );
};

export default App;
