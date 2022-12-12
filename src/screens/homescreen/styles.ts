import {StyleSheet} from 'react-native';
import {color, fontSize, size} from '../../utils/constant';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: size.xl,
    paddingBottom: 0,
    backgroundColor: color.secondary_alternative,
  },
  listContainer: {flex: 1},
  imgBook: {
    width: 120,
    height: 180,
    borderRadius: 20,
    marginStart: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: size.l,
    backgroundColor: color.secondary,
    borderRadius: 10,
  },
  titleBook: {
    fontWeight: 'bold',
    fontSize: fontSize.l,
    color: color.dark,
  },
  statusBook: {bottom: 10, right: 10, position: 'absolute'},
});
