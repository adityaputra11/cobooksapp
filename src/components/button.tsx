import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {color, fontSize, size} from '../utils/constant';

interface IButton {
  testID: string;
  label: string;
  onPress: (e: any) => void;
}

const Button = (props: IButton) => {
  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={props.onPress}
      testID={props.testID}>
      <Text style={styles.label}>{props.label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: color.alternative,
    borderRadius: size.l,
    padding: size.xl,
    borderWidth: 1,
    borderColor: color.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: color.secondary,
    fontSize: fontSize.l,
  },
});

export default Button;
