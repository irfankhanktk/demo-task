import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  lables: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
  time: {
    position: 'absolute',
    right: 5,
    color: 'blue',
  },
  pinchableImage: {
    backgroundColor: 'red',
    height: 150,
    width: 150,
    alignSelf: 'center',
    marginVertical: 100,
  },
});
