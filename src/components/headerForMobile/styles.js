import { StyleSheet } from 'react-native'
import { colors } from '../../modal/color'

const styles = StyleSheet.create({
  headerWrap: {
    padding:10, 
    backgroundColor: colors.primary, 
    flexDirection: "column", 
    justifyContent: "center", 
    alignItems: "center",
    borderBottomLeftRadius:20, 
    borderBottomRightRadius:20
  },
  searchByTextWrap: {
    marginTop:30,
    backgroundColor: colors.white,
    flexDirection: "row",
    padding: 10,
    borderRadius: 5
  },
  searchPlaceholder: { 
    width: "100%", 
    marginLeft: 5 
  },
  locationCategorySearchWrap: {
    flexDirection: "row", 
    justifyContent: "space-between", 
    width: "100%", 
    marginTop:10,
    paddingVertical:10
  },
  locationSearchWrap: {flexDirection: "row"},
  categorySearchWrap: {flexDirection: "row"},
  locationSearchText: {fontWeight: "bold", marginLeft: 5},
  categorySearchText: {fontWeight: "bold", marginLeft: 5},
  categoryText: {marginLeft: 5},
  locationText: {marginLeft: 5}
})

export default styles;