
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Bai4 from './src/Bai4';
import Bai5 from './src/Bai5';
import Bai6 from './src/Bai6';
import Pan1 from './src/Pan1';
import Pan2 from './src/Pan2';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='pan2'
      screenOptions={{
        headerShown: false
      }}>
        <Tab.Screen name="pan1" component={Pan1} />
        <Tab.Screen name="pan2" component={Pan2} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

