import React from 'react';
import {View} from 'react-native';

interface ISpacer {
  width?: number;
  height?: number;
}

const Spacer = (props: ISpacer) => {
  return <View style={{width: props.width, height: props.height}} />;
};

export default Spacer;
