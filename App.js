import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, Platform } from 'react-native';

export default function App() {
  return (
    <SafeAreaView styles={styles.SafeAreaViewForDroid}>
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor="#fec85c" />
      <View style={styles.postWrap}>
      <Image 
        source={{uri: "https://picsum.photos/200/300"}}
        style={styles.postImage}
      ></Image>
      <View style={styles.postContentWrap}>
        <View>
          <Text style={{fontWeight: 'bold'}}>This is title for rent</Text>
          <Text style={{color: 'grey'}}>New York</Text>
        </View>
          <Text style={styles.postValue}>$100 / Day</Text>
        </View>
      </View>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SafeAreaViewForDroid: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 200:0
  },
  container: {

    backgroundColor: '#fec85c40',
  },
  postWrap: {
    display: 'flex', 
    flexDirection: 'row', 
    backgroundColor: 'white',
    marginVertical:10,
    marginHorizontal:10,
    borderRadius: 10,
    shadowColor: "#0000",
    shadowOffset:{width:0, height:1},
    shadowOpacity:0.8,
    shadowRadius:2,
    elevation: 5,
  },
  postImage: {
    height: 100, 
    width: 100, 
    borderRadius: 30, 
    marginLeft: 10, 
    marginRight: 20, 
    marginVertical: 10
  },
  postContentWrap: {
    justifyContent:"space-around", 
    paddingVertical:10
  },
  postValue: {
    color:"#fec85c", 
    backgroundColor: '#293241', 
    alignSelf: 'flex-start',
    padding: 5,
    borderRadius: 10
  }
});
