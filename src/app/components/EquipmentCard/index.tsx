import Text from '@/components/Text';
import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Equipment } from '~/app/models/equipment.model';

import colors from '~/constants/colors';
import EffectBox from '../EffectBox';

const EquipmentCard = ({ equipment }: { equipment: Equipment }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('EquipmentDetails', { equipment });
  };

  const renderEquipEffects = () => {
    const { attack, defense, effect } = equipment.properties;
    return (
      <View style={styles.effectsContainer}>
        {!!attack && <EffectBox type="attack" value={attack} />}
        {!!defense && <EffectBox type="defense" value={defense} />}
        {/* Tears of the Kingdom only */}
        {!!effect && <EffectBox type="bonus" value={effect} />}
      </View>
    );
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <Image style={styles.image} source={{ uri: equipment.image }} />
      <View style={styles.rightContainer}>
        <Text type="subtitle" style={styles.materialName}>
          {equipment.name}
        </Text>
        <Text ellipsizeMode="tail" numberOfLines={3}>
          {equipment.description}
        </Text>
        {renderEquipEffects()}
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
  image: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    width: 118,
    height: 'auto',
  },
  materialName: {
    marginBottom: 6,
  },
  effectsContainer: {
    marginTop: 12,
    flexDirection: 'row',
    width: '100%',
  },
});

export default EquipmentCard;
