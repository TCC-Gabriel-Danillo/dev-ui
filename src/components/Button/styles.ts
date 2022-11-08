import {StyleSheet} from 'react-native';
import {PRIMARY, WHITE} from '../../constants';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: PRIMARY,
    width: '100%',
    height: 40,
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: WHITE,
  },
});
