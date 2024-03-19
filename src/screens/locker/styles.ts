import {StyleSheet} from 'react-native';
import {wp} from '../../configs/config';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: wp(16),
    flex: 1,
  },
  popUpContainer: {
    height: undefined,
  },

  filterContainer: {
    paddingHorizontal: wp(16),
    borderRadius: wp(20),
    gap: wp(20),
    paddingBottom: wp(30),
  },

  filterItem: {flexDirection: 'row', flexGrow: 1, gap: 10, padding: 10},
});
