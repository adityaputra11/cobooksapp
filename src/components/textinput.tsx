import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {color, size} from '../utils/constant';

interface IInput {
  testID: string;
  secureTextEntry?: boolean;
  onChangeText: (e: any) => void;
  placeholder: string;
  value?: string;
}

const Input = (props: IInput) => {
  return (
    <View style={styles.textfieldContainer}>
      <TextInput
        value={props.value}
        testID={props.testID}
        secureTextEntry={props.secureTextEntry}
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textfieldContainer: {
    backgroundColor: color.secondary,
    borderRadius: size.l,
    paddingStart: size.l,
    minHeight: 40,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: color.primary,
  },
});

export default Input;
