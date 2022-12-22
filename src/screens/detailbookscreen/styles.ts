import {StyleSheet} from 'react-native';
import {color, fontSize} from '../../utils/constant';
export const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: color.secondary_alternative},
  imageBook: {
    width: 120,
    height: 180,
    borderRadius: 20,
  },
  titleBook: {
    fontWeight: 'bold',
    fontSize: fontSize.l,
    width: '90%',
  },
  titlePickup: {
    fontWeight: 'bold',
    fontSize: fontSize.l,
  },
  titleDetail: {
    fontWeight: 'bold',
    fontSize: fontSize.xl,
    paddingStart: 20,
    color: color.dark,
  },
  detailBookContainer: {
    flexDirection: 'row',
    padding: 16,
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
  bottomSheet: {
    flex: 1,
    backgroundColor: color.secondary,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    padding: 20,
  },
});
