import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import uuid from 'react-native-uuid';
import { styles } from '../style/Style';
import Input from '../components/Input';
import Buttons from '../components/PrimaryButton';
import List from '../components/List';

export interface TodoItem {
  id: string;
  text: string;
}

function HomeScreen(): React.JSX.Element {
  const [text, onChangeText] = React.useState<string>('');
  const [data, setData] = React.useState<TodoItem[]>([]);
  const [editedId, setEditedId] = React.useState<string>('');
  const [showUpdateButton, setShowUpdateButton] = React.useState<boolean>(false);
  const [showAddButton, setShowAddButton] = React.useState<boolean>(true);

  const Add = () => {
    if (text.trim() !== '') {
      const newId = uuid.v4().toString();
      setData(prevData => [...prevData, { id: newId, text }]);
      onChangeText('');
    }
  };

  const Delete = (itemId: string) => {
    setData(prevData => prevData.filter(item => item.id !== itemId));
  };

  const Edit = (itemId: string, itemText: string) => {
    onChangeText(itemText);
    setEditedId(itemId);
    setShowUpdateButton(true);
    setShowAddButton(false);
  };

  const update = () => {
    console.log('update', text);
    if (text.trim() !== '') {
      setData(prevData =>
        prevData.map(item => {
          if (item.id === editedId) {
            return { ...item, text };
          }
          return item;
        }),
      );
      onChangeText('');
      setShowUpdateButton(false);
      setShowAddButton(true);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Todo APP</Text>
      <Input
        style={styles.input}
        placeholder="Enter Text"
        onChangeText={onChangeText}
        value={text}
      />

      <View style={styles.button}>
        <Buttons
          showButton={showAddButton}
          onPress={Add}
          title="Add"
          color="gray"
        />
        <Buttons
          showButton={showUpdateButton}
          onPress={update}
          title="Update"
          color="green"
        />
      </View>

      <List data={data} onDelete={Delete} onEdit={Edit} />

    </SafeAreaView>
  );
}

export default HomeScreen;
