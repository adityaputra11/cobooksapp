import React from 'react';
import {Text, View} from 'react-native';

const DetailBookScreen = (props: any) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Text>{JSON.stringify(props)}</Text>
    </View>
  );
};

export default DetailBookScreen;
