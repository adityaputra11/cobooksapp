import {StyleSheet} from 'react-native';
import {color, fontSize, size} from '../../utils/constant';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primary,
    padding: size.xl,
    justifyContent: 'space-around',
  },
  title: {
    fontSize: fontSize.super,
    fontWeight: 'bold',
    color: color.secondary,
    alignSelf: 'center',
  },
  textfieldContainer: {
    backgroundColor: color.secondary,
    borderRadius: size.l,
    paddingStart: size.l,
  },
});

export default styles;
