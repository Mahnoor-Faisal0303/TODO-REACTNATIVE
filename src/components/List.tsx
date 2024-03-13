import React from 'react';
import { FlatList, Text, View } from 'react-native';
import SecondaryButtons from './SecondaryButtons';
import { styles } from '../style/Style';
interface TodoItem {
  id: string;
  text: string;
}

interface ListProps {
  data: TodoItem[];
  onDelete: (id: string) => void;
  onEdit: (id: string, text: string) => void;
}

const List: React.FC<ListProps> = ({ data, onDelete, onEdit }) => {
  return (
    <FlatList
      keyExtractor={item => item.id}
      data={data}
      renderItem={({ item }) => (
        <View style={styles.container}>
          <View style={styles.list}>
            <Text style={styles.font}>{item.text}</Text>
            <View style={styles.actionButton} key={item.id}>
              <SecondaryButtons
                onPress={() => onDelete(item.id)}
                title="Delete"
                color="gray"
              />
              <SecondaryButtons
                onPress={() => onEdit(item.id, item.text)}
                title="Edit"
                color="gray"
              />
            </View>
          </View>
        </View>
      )}
    />
  );
};

export default List;
