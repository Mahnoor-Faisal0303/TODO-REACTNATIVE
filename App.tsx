/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// import {Typography} from '@mui/material';
import React from 'react';
import {Button, SafeAreaView, StyleSheet, Text, TextInput} from 'react-native';

function App(): React.JSX.Element {
  const [text, onChangeText] = React.useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Todo APP</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Text"
        onChangeText={onChangeText}
        value={text}
      />
      <Button
        title="Add"
        color="green"
        accessibilityLabel="Learn more about this purple button"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    display: 'flex',
    marginTop: 130,
    fontSize: 30,
  },
  input: {
    height: 40,
    width: 300,
    margin: 30,
    borderWidth: 1,
    padding: 10,
  },
});

export default App;
