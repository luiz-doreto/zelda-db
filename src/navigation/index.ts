import Header from '@/components/Header';
import { Monster } from '@/models/monster.model';
import HomeScreen from '@/screens/HomeScreen';
import MonsterDetailsScreen from '@/screens/MonsterDetailsScreen';
import MonstersListScreen from '@/screens/MonstersListScreen';
import {
  createStaticNavigation,
  StaticParamList,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Creature } from '~/app/models/creature.model';
import { Equipment } from '~/app/models/equipment.model';
import { Material } from '~/app/models/material.model';
import CreatureDetails from '~/app/screens/CreatureDetailsScreen';
import CreaturesListScreen from '~/app/screens/CreaturesListScreen';
import EquipmentDetailsScreen from '~/app/screens/EquipmentDetailsScreen';
import EquipmentsListScreen from '~/app/screens/EquipmentsListScreen';
import MaterialDetailsScreen from '~/app/screens/MaterialDetailsScreen';
import MaterialsListScreen from '~/app/screens/MaterialsListScreen';
import colors from '~/constants/colors';

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
