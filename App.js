import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Application from './src/Container/Auth/Navigation/Application';
import { Provider } from 'react-redux';
import { store } from './utilities/MyStore/Store';

export default function App() {
  return (
    <Provider store={store}>
       <Application />
    </Provider>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
