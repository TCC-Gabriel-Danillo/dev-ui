import {StyleSheet} from 'react-native';
import {PRIMARY} from '../../constants';

export const styles = StyleSheet.create({
  focus: {
    borderWidth: 2,
    borderColor: PRIMARY,
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#e3e3e3',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});
