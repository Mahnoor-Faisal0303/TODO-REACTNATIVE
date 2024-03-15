import React, { useState } from 'react';
import { Button, Image, SafeAreaView, Text, View } from 'react-native';
import uuid from 'react-native-uuid';
import { styles } from '../style/Style';
import Input from '../components/Input';
import Buttons from '../components/PrimaryButton';
import List from '../components/List';
import useHideOrDisplayButton from '../hooks/HideOrDisplayButton';
//import ImagePicker from 'react-native-image-picker'; 

export interface TodoItem {
  id: string;
  text: string;
}

function HomeScreen(): React.JSX.Element {
  const [text, onChangeText] = React.useState<string>('');
  const [data, setData] = React.useState<TodoItem[]>([]);
  const [editedId, setEditedId] = React.useState<string>('');
  const { showUpdateButton, setShowUpdateButton, showAddButton, setShowAddButton } = useHideOrDisplayButton(false, true);
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

  //const [selectedImage, setSelectedImage] = useState(null);

  // const selectImage = () => {
  //   const options = {
  //     title: 'Select Image',
  //     storageOptions: {
  //       skipBackup: true,
  //       path: 'images',
  //     },
  //   };

  //    ImagePicker.showImagePicker(options, (response) => {
  //     if (response.didCancel) {
  //       console.log('User cancelled image picker');
  //     } else if (response.error) {
  //       console.log('ImagePicker Error: ', response.error);
  //     } else if (response.customButton) {
  //       console.log('User tapped custom button: ', response.customButton);
  //     } else {
  //       setSelectedImage(response.uri);
  //     }
  //   });
   //};

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
      
      {/* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {selectedImage && <Image source={{ uri: selectedImage }} style={{ width: 200, height: 200 }} />}
      <Button title="Select Image" onPress={selectImage} />
    </View> */}

      <View style={styles.imagecontainer}>
        <Text>
             hello
        </Text>
      </View>

    </SafeAreaView>
  );
}

export default HomeScreen;
