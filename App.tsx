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
//import {v4 as uuidv4} from 'uuid';

function App(): React.JSX.Element {
  const [text, onChangeText] = React.useState('');
  const [data, setData] = React.useState<string[]>([]);
  //const [id, setId] = React.useState<string>('1');
  const Add = () => {
    if (text.trim() !== '') {
      setData(prevData => [...prevData, text]);
      onChangeText('');
      console.log('printiing');
      //setId(uuidv4());
    }
  };
  const Delete = () => {
    //console.log(id);
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
        <Button onPress={Add} title="Add" color="gray" />
      </View>
      <FlatList
        key={data.length}
        data={data}
        renderItem={({item}) => (
          <View style={styles.container}>
            <Text style={styles.list}>
              {item}
              <View style={styles.actionButton}>
                <Button onPress={Delete} title="Delete" color="gray" />
                <Button
                  onPress={() => console.log('Button for item:', item)}
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
    width: 80,
    fontSize: 90,
    marginBottom: 15,
    marginLeft: 30,
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
