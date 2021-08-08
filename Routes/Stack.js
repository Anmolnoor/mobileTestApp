import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

// --- components ---
import HomeScreen from '../Src/Screens/Home';
import ProfileScreen from '../Src/Screens/Profile';
import LoginScreen from '../Src/Screens/Login';
import RegisterScreen from '../Src/Screens/Register';

const Screen = {
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  Profile: {
    screen: ProfileScreen,
  },
  Login: {
    screen: LoginScreen,
  },
  Register: {
    screen: RegisterScreen,
  },
};

const Stack = createStackNavigator(Screen);

export default createAppContainer(Stack);
