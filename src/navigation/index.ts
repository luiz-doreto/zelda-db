import { createStaticNavigation, StaticParamList } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '~/constants/colors';
import HomeScreen from '~/features/home/screens/HomeScreen';
import MonstersScreen from '~/features/monsters/screens/MonstersListScreen';
import Header from '~/features/shared/components/Header';

const RootStack = createNativeStackNavigator({
  screenOptions: {
    header: Header,
    contentStyle: {
      backgroundColor: colors.background,
    }
  },
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        headerShown: false
      }
    },
    Monsters: {
      screen: MonstersScreen,
    },
  },
});

const Navigation = createStaticNavigation(RootStack);
export default Navigation;

// type-check the useNavigation hook
type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
