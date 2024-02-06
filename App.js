import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StopWatchView from './src/views/StopWatchView';
import CounterView from './src/views/CounterVIew';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      
      {/* <StatusBar style="auto" /> */}
      <StopWatchView />
      <CounterView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // backgroundColor: '#ffa600',
    backgroundColor: '#d98d00',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  }
});
