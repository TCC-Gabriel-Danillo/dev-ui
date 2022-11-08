import React, {ReactNode} from 'react';
import {TouchableOpacity, ViewStyle} from 'react-native';
import {Text} from '../Text';
import {styles} from './styles';

interface Props {
  children: ReactNode;
  onPress: () => void;
  style?: ViewStyle;
}

export const Button: React.FC<Props> = ({children, onPress, style}) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text fontWeight="semibold" style={styles.buttonText}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};
