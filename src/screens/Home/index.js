import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  SafeAreaView, 
  Platform, 
} from 'react-native';
import PostItems from '../../components/postItems';
import {colors} from '../../modal/color'
import HeaderMobile from '../../components/headerForMobile'

export default function Home() {
  return (
        <>
        <HeaderMobile />
            <PostItems/>
        </>
  );
}

const styles = StyleSheet.create({
  SafeAreaViewForDroid: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25:0,
    backgroundColor: colors.background
  }
});