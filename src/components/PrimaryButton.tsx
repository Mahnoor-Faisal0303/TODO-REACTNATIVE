import React from 'react';
import {Button, View} from 'react-native';

interface ButtonProps {
  onPress: () => void;
  title: string;
  color: string;
  showButton: boolean;
}
const Buttons: React.FC<ButtonProps> = ({onPress, title, color, showButton}) => {
  return (
        <View>
      {showButton && <Button onPress={onPress} title={title} color={color} />}
        </View>
    )
}
export default Buttons;