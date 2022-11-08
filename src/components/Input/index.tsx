import React, {useState} from 'react';
import {TextInput, TextStyle} from 'react-native';
import {styles} from './styles';

interface Props {
  onChange: (value: string) => void;
  style?: TextStyle;
  placeholder?: string;
}
export const Input: React.FC<Props> = ({onChange, style, placeholder}) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <TextInput
      onChangeText={onChange}
      placeholder={placeholder}
      style={[styles.input, isFocused && styles.focus, style]}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    />
  );
};

export default Input;
