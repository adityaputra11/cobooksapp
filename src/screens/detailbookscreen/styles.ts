import {StyleSheet} from 'react-native';
import {fontSize, size} from '../../utils/constant';
export const styles = StyleSheet.create({
  container: {flex: 1, padding: size.l},
  imageBook: {
    width: 200,
    height: 300,
  },
  titleBook: {
    fontWeight: 'bold',
    fontSize: fontSize.xxl,
  },
  titlePickup: {
    fontWeight: 'bold',
    fontSize: fontSize.l,
  },
  titleDetail: {
    fontWeight: 'bold',
    fontSize: fontSize.xl,
    alignSelf: 'center',
  },
  detailBookContainer: {
    flexDirection: 'row',
  },
  pickupContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  textChange: {
    fontSize: fontSize.m,
    color: 'red',
  },
});
