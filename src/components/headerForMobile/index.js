import { 
  Text, 
  View, 
  TextInput } from 'react-native';
import { colors } from '../../modal/color'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles'


const HeaderMobile = () => {

    return (
        <View style={styles.headerWrap}>
            <View style={styles.searchByTextWrap}>
            <Ionicons name="ios-search" size={24} color={colors.black} />
            <TextInput 
            placeholder="Search in Rent.com" 
            style={styles.searchPlaceholder}
            multiline={false}
            />
            </View>
            <View style={styles.locationCategorySearchWrap}>
            <View style={styles.locationSearchWrap}>
            <MaterialIcons name="location-pin" size={24} color="black" />
            <Text style={styles.locationText}>Location</Text>
            <Text style={styles.locationSearchText}>New York</Text>
            
          </View>
          <View style={styles.categorySearchWrap}>
          <MaterialIcons name="category" size={24} color={colors.black} />
          <Text style={styles.categoryText}>Category</Text>
            <Text style={styles.categorySearchText}>Vehicle</Text>
          </View>
          </View>
          
          </View>
    )

    
}

export default HeaderMobile;