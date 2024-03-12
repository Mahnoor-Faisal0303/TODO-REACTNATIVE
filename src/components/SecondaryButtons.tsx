import React from 'react';
import {Button} from 'react-native';

interface ButtonProps {
  onPress: () => void;
  title: string;
  color: string;
}
const SecButtons: React.FC<ButtonProps> = ({onPress, title, color}) => {
  return (
      <Button onPress={onPress} title={title} color={color} />
    )
}
export default SecButtons;