import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import HomeScreen from "./screens/HomeScreen"
import ServiceDetailsScreen from "./screens/ServiceDetailsScreen"
import BookingScreen from "./screens/BookingScreen"

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Urban Services" }} />
        <Stack.Screen name="ServiceDetails" component={ServiceDetailsScreen} options={{ title: "Service Details" }} />
        <Stack.Screen name="Booking" component={BookingScreen} options={{ title: "Book Service" }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

