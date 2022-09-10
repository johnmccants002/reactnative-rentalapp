import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from "react-native";
import { 
  StyleSheet, 
  Platform, 
} from 'react-native';
import Route from './src/navigation/Router'
import {colors} from './src/modal/color'
import 'react-native-gesture-handler'; 




export default function App() {
  return (
    <SafeAreaView style={styles.SafeAreaViewForDroid}>
        <StatusBar barStyle="dark-content" backgroundColor={colors.secondary} />
        <Route />
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  SafeAreaViewForDroid: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25:0,
    backgroundColor: colors.background
  }
});
