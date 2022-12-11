import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {color, size} from '../utils/constant';

interface IInput {
  testID: string;
  secureTextEntry?: boolean;
  onChangeText: (e: any) => void;
  placeholder: string;
}

const Input = (props: IInput) => {
  return (
    <View style={styles.textfieldContainer}>
      <TextInput
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
    borderWidth: 1,
    borderColor: color.primary,
  },
});

export default Input;
