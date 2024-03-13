import React from 'react';
import {StyleProp, TextInput, TextStyle} from 'react-native';

interface InputProps {
  style: StyleProp<TextStyle>;
  placeholder: string;
  onChangeText: (text: string) => void;
  value: string;
}
const Input: React.FC<InputProps> = ({
  style,
  placeholder,
  onChangeText,
  value,
}) => {
  return (
    <TextInput
      style={style}
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
    />
  )
}
export default Input;