
import { 
  StyleSheet, 
  SafeAreaView, 
  Platform, 
} from 'react-native';
import PostItems from './src/components/postItems';
import {colors} from './src/modal/color'
import HeaderMobile from './src/components/headerForMobile/index'



export default function App() {
  return (
    <SafeAreaView styles={styles.SafeAreaViewForDroid}>
        <HeaderMobile />
        <PostItems/>
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
