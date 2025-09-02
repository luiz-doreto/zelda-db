import Text from '@/components/Text';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Equipment } from '~/app/models/equipment.model';
import colors from '~/constants/colors';
import EffectBoxGroup from '../EffectBoxGroup';
import Image from '../Image';

const EquipmentCard = ({ equipment }: { equipment: Equipment }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('EquipmentDetails', { equipment });
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <Image imageUrl={equipment.image} type="small" />
      <View style={styles.rightContainer}>
        <Text type="subtitle" style={styles.materialName}>
          {equipment.name}
        </Text>
        <Text ellipsizeMode="tail" numberOfLines={3}>
          {equipment.description}
        </Text>
        <EffectBoxGroup equipProps={equipment.properties} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.palette3,
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 20,
    height: 150,
  },
  rightContainer: {
    flex: 1,
    height: 100,
    width: '100%',
    marginHorizontal: 12,
  },
  materialName: {
    marginBottom: 6,
  },
});

export default EquipmentCard;
