import Text from '@/components/Text';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Creature } from '~/app/models/creature.model';
import colors from '~/constants/colors';
import Image from '../Image';

const CreatureCard = ({ creature }: { creature: Creature }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('CreatureDetails', { creature });
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <Image imageUrl={creature.image} type="small" />
      <View style={styles.rightContainer}>
        <Text type="subtitle" style={styles.name}>
          {creature.name}
        </Text>
        <Text ellipsizeMode="tail" numberOfLines={3}>
          {creature.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.palette4,
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 20,
    height: 120,
  },
  rightContainer: {
    flex: 1,
    height: 100,
    width: '100%',
    marginHorizontal: 12,
  },
  name: {
    marginBottom: 6,
  },
});

export default CreatureCard;
