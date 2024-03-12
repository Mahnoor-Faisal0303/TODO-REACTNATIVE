/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import uuid from 'react-native-uuid';

interface TodoItem {
  id: string;
  text: string;
}

function App(): React.JSX.Element {
  const [text, onChangeText] = React.useState<string>('');
  const [data, setData] = React.useState<TodoItem[]>([]);
  const [editedId, setEditedId] = React.useState<string>('');
  const [showUpdateButton, setShowUpdateButton] = React.useState<boolean>(false);
  const [showAddButton, setShowAddButton] = React.useState<boolean>(true);

  const Add = () => {
    if (text.trim() !== '') {
      const newId = uuid.v4().toString();
      setData(prevData => [...prevData, {id: newId, text}]);
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
            return {...item, text};
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
      <TextInput
        style={styles.input}
        placeholder="Enter Text"
        onChangeText={onChangeText}
        value={text}
      />
      <View style={styles.button}>
        <View>
          {showAddButton && <Button onPress={Add} title="Add" color="gray" />}
        </View>
        <View>
          {showUpdateButton && (
            <Button onPress={update} title="Update" color="gray" />
          )}
        </View>
      </View>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        key={data.length}
        data={data}
        renderItem={({item}) => (
          <View style={styles.container}>
            <Text style={styles.list}>
              {item.text}
              <View style={styles.actionButton} key={item.id}>
                <Button
                  onPress={() => Delete(item.id)}
                  title="Delete"
                  color="gray"
                />
                <Button
                  onPress={() => Edit(item.id, item.text)}
                  title="Edit"
                  color="gray"
                />
              </View>
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  title: {
    marginTop: 130,
    fontSize: 30,
    textAlign: 'center',
  },
  button: {
    fontSize: 90,
    marginBottom: 15,
    marginLeft: 45,
    flexDirection: 'row',
  },
  input: {
    height: 50,
    width: 300,
    margin: 30,
    borderWidth: 1,
    padding: 10,
  },
  list: {
    fontSize: 20,
    margin: 10,
    width: 300,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    padding: 10,
    alignSelf: 'center',
  },
  actionButton: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default App;
