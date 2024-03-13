import React from 'react';
import {Button, View} from 'react-native';
import { styles } from '../style/Style';

interface ButtonProps {
  onPress: () => void;
  title: string;
  color: string;
}
const SecButtons: React.FC<ButtonProps> = ({onPress, title, color}) => {
  return (
    <View style={styles.actionButtonSpacing}>
      <Button onPress={onPress} title={title} color={color} />
    </View>
    )
}
export default SecButtons;