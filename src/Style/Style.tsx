import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  title: {
    marginTop: 130,
    fontSize: 50,
    textAlign: 'center',
  },
  button: {
    marginBottom: 15,
    marginLeft: 30,
    flexDirection: 'row',
    width: 140,
  },
  input: {
    height: 50,
    width: 300,
    margin: 30,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'green',
    padding: 10,
  },
  list: {
    //display: 'flex',
    flexDirection: 'row',
    margin: 6,
    width: 300,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    paddingHorizontal: 7,
    height: 'auto',
    alignSelf: 'center',
  },
  font: {
    flex: 1,
    fontSize: 20,
    textAlignVertical: 'center',
  },
  actionButton: {
    flexDirection: 'row',
    marginVertical: 3,
    alignItems: 'center',
  },
  actionButtonSpacing: {
    marginLeft: 4,
  }
});


