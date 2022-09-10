import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"
import Home from '../screens/Home'
import PostDetails from '../screens/postDetails'

export default function Route() {

    const Stack = createStackNavigator()
    return (<>
        <NavigationContainer>
            <Stack.Navigator
            screenOptions= {{cardStyle: {
                backgroundColor:"#fec85c60",
            },
        }}>
                <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
                <Stack.Screen name="PostDetails" component={PostDetails} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    </>)
}