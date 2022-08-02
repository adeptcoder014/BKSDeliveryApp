import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home';
import OrderDetails from './screens/OrderDetails';
import PendingOrders from './screens/PendingOrders';
import PickupDetails from './screens/PickupDetails';

const Stack = createNativeStackNavigator();

const theme = {
  colors: {
    background: '#FFFDFA',
    card: '#FFFDFA',
  },
};

export default function App() {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen name="Pending Orders" component={PendingOrders} />
        <Stack.Screen name="Order Details" component={OrderDetails} />
        <Stack.Screen name="Pickup Details" component={PickupDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
