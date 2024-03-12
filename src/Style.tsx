import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
    marginLeft: 30,
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


