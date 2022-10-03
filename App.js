import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  Text,
  View,
  useColorScheme,
  TextInput,
  TouchableOpacity,
  TouchableNativeFeedback,
  Alert,
  ToastAndroid,
} from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);
const StyledTouchableOpacity = styled(TouchableOpacity);

function showToast() {
  ToastAndroid.show('Please enter height and weight!', ToastAndroid.SHORT);
}

export default function App() {
  const colorScheme = useColorScheme();
  const [weight, setWeight] = useState('0');
  const [height, setHeight] = useState('0');

  const createTwoButtonAlert = () => {
    let ans = parseFloat(weight) / (parseFloat(height) / 100) ** 2;
    if (!ans) {
      return showToast();
    }
    return Alert.alert(
      'BMI Calc Result',
      `Your BMI is ${Math.round(ans * 100) / 100}`,
      [{ text: 'Okay!' }]
    );
  };
  function increase(Var, setVar) {
    if (Var.lenght > 7) return;
    Var = parseFloat(Var);
    setVar(String(Var + 1));
  }

  function decrease(Var, setVar) {
    Var = parseFloat(Var);
    if (Var <= 0) return;
    setVar(String(Var - 1));
  }

  return (
    <StyledView
      className={
        colorScheme === 'light'
          ? 'h-full px-12 py-[80px] bg-slate-100'
          : 'h-full px-12 py-[80px] bg-slate-800'
      }
    >
      <StyledText
        className={
          colorScheme === 'light'
            ? 'text-slate-800 font-bold text-2xl text-center'
            : 'text-slate-100 font-bold text-2xl text-center'
        }
      >
        BMI Calculator
      </StyledText>

      <StyledView
        className={
          colorScheme === 'light'
            ? 'h-fit py-10 flex justify-center items-center w-full bg-white shadow-xl shadow-gray-300 mt-10 mb-10 rounded-xl'
            : 'h-fit py-10 flex justify-center items-center w-full bg-slate-900 shadow-xl shadow-gray-700 mt-10 mb-10 rounded-xl'
        }
      >
        <StyledText
          className={
            colorScheme === 'light'
              ? 'text-gray-600 font-bold text-lg mb-8'
              : 'text-slate-400 font-bold text-lg mb-8'
          }
        >
          Weight (kg)
        </StyledText>
        <StyledTextInput
          defaultValue={weight}
          onChangeText={(weight) => setWeight(weight)}
          className={
            colorScheme === 'light'
              ? 'text-2xl font-semibold text-slate-900'
              : 'text-2xl font-semibold text-gray-100'
          }
          keyboardType="numeric"
          maxLength={7}
        />
        <StyledView className="w-fit mx-auto flex flex-row mt-5">
          <StyledTouchableOpacity
            onPress={(e) => decrease(weight, setWeight)}
            className="bg-red-500 px-[20px] py-2 rounded-full shadow-xl shadow-red-500 mr-16"
          >
            <StyledText className="text-white font-bold text-3xl">-</StyledText>
          </StyledTouchableOpacity>
          <StyledTouchableOpacity
            onPress={(e) => increase(weight, setWeight)}
            className="bg-blue-500 px-[18px] py-2 rounded-full shadow-xl shadow-blue-500"
          >
            <StyledText className="text-white font-bold text-3xl">+</StyledText>
          </StyledTouchableOpacity>
        </StyledView>
      </StyledView>

      <StyledView
        className={
          colorScheme === 'light'
            ? 'h-fit py-10 flex justify-center items-center w-full bg-white shadow-xl shadow-gray-300 mb-10 rounded-xl'
            : 'h-fit py-10 flex justify-center items-center w-full bg-slate-900 shadow-xl shadow-gray-700 mb-10 rounded-xl'
        }
      >
        <StyledText
          className={
            colorScheme === 'light'
              ? 'text-gray-600 font-bold text-lg mb-8'
              : 'text-slate-400 font-bold text-lg mb-8'
          }
        >
          Height (cm)
        </StyledText>
        <StyledTextInput
          defaultValue={height}
          onChangeText={(height) => setHeight(height)}
          className={
            colorScheme === 'light'
              ? 'text-2xl font-semibold text-slate-900'
              : 'text-2xl font-semibold text-gray-100'
          }
          keyboardType="numeric"
          maxLength={7}
        />
        <StyledView className="w-fit mx-auto flex flex-row mt-5">
          <StyledTouchableOpacity
            onPress={(e) => decrease(height, setHeight)}
            className="bg-red-500 px-[20px] py-2 rounded-full shadow-xl shadow-red-500 mr-16"
          >
            <StyledText className="text-white font-bold text-3xl">-</StyledText>
          </StyledTouchableOpacity>

          <StyledTouchableOpacity
            onPress={(e) => increase(height, setHeight)}
            className="bg-blue-500 px-[18px] py-2 rounded-full shadow-xl shadow-blue-500"
          >
            <StyledText className="text-white font-bold text-3xl">+</StyledText>
          </StyledTouchableOpacity>
        </StyledView>
      </StyledView>
      <TouchableNativeFeedback onPress={createTwoButtonAlert}>
        <StyledView className="bg-emerald-500 w-full py-5 rounded-xl shadow-lg shadow-green-500">
          <StyledText className="text-white text-center text-lg font-semibold">
            Calulate BMI
          </StyledText>
        </StyledView>
      </TouchableNativeFeedback>
      <StatusBar style={colorScheme === 'light' ? 'dark' : 'light'} />

      <StyledText
        className={
          colorScheme === 'light'
            ? 'text-gray-600 font-semibold text-center mt-10'
            : 'text-slate-400 font-semibold text-center mt-10'
        }
      >
        {' '}
        Made with 💖 by Gokul{' '}
      </StyledText>
    </StyledView>
  );
}
