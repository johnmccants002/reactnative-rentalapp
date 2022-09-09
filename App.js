import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  SafeAreaView, 
  Platform, 
  TextInput } from 'react-native';
import PostItems from './src/components/postItems';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 


export default function App() {
  return (
    <SafeAreaView styles={styles.SafeAreaViewForDroid}>
      <View style={{
        padding:10, 
        backgroundColor:"#fec85c", 
        flexDirection: "column", 
        justifyContent: "center", 
        alignItems: "center",
        borderBottomLeftRadius:20, 
        borderBottomRightRadius:20}}>
        <View style={{
            marginTop:30,
            backgroundColor: "white",
            flexDirection: "row",
            padding: 10,
            borderRadius: 5
            }}>
        <Ionicons name="ios-search" size={24} color="black" />
        <TextInput 
        placeholder="Search in Rent.com" 
        style={{ width: "100%", marginLeft: 5 }}
        multiline={false}
        />
        </View>
        <View style={{flexDirection: "row", justifyContent: "space-between", width: "100%", marginTop:10, paddingVertical:10}}>
        <View style={{flexDirection: "row"}}>
        <MaterialIcons name="location-pin" size={24} color="black" />
        <Text style={{marginLeft: 5}}>Location</Text>
        <Text style={{fontWeight: "bold", marginLeft: 5}}>New York</Text>
        
      </View>
      <View style={{flexDirection: "row"}}>
      <MaterialIcons name="category" size={24} color="black" />
      <Text style={{marginLeft: 5}}>Category</Text>
        <Text style={{fontWeight: "bold", marginLeft: 5}}>Vehicle</Text>
      </View>
      </View>
      
      </View>
        <PostItems/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SafeAreaViewForDroid: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25:0,
    backgroundColor: "#fec85c60"
  }
});
