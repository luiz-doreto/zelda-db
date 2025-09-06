import {
  createStaticNavigation,
  StaticParamList,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '~/components/Header';
import colors from '~/constants/colors';
import { Creature } from '~/models/creature.model';
import { Equipment } from '~/models/equipment.model';
import { Material } from '~/models/material.model';
import { Monster } from '~/models/monster.model';
import CreatureDetails from '~/screens/CreatureDetailsScreen';
import CreaturesListScreen from '~/screens/CreaturesListScreen';
import EquipmentDetailsScreen from '~/screens/EquipmentDetailsScreen';
import EquipmentsListScreen from '~/screens/EquipmentsListScreen';
import HomeScreen from '~/screens/HomeScreen';
import MaterialDetailsScreen from '~/screens/MaterialDetailsScreen';
import MaterialsListScreen from '~/screens/MaterialsListScreen';
import MonsterDetailsScreen from '~/screens/MonsterDetailsScreen';
import MonstersListScreen from '~/screens/MonstersListScreen';

const RootStack = createNativeStackNavigator({
  screenOptions: {
    header: Header,
    contentStyle: {
      backgroundColor: colors.background,
    },
  },
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        headerShown: false,
      },
    },
    Monsters: {
      screen: MonstersListScreen,
    },
    MonsterDetails: {
      screen: MonsterDetailsScreen,
    },
    Materials: {
      screen: MaterialsListScreen,
    },
    MaterialDetails: {
      screen: MaterialDetailsScreen,
    },
    Equipments: {
      screen: EquipmentsListScreen,
    },
    EquipmentDetails: {
      screen: EquipmentDetailsScreen,
    },
    Creatures: {
      screen: CreaturesListScreen,
    },
    CreatureDetails: {
      screen: CreatureDetails,
    },
  },
});

const Navigation = createStaticNavigation(RootStack);
export default Navigation;

// type-check the useNavigation hook
type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {
      MonsterDetails: { monster: Monster };
      MaterialDetails: { material: Material };
      EquipmentDetails: { equipment: Equipment };
      CreatureDetails: { creature: Creature };
    }
  }
}
