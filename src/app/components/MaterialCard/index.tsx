import Text from '@/components/Text';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'expo-image';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Material } from '~/app/models/material.model';
import colors from '~/constants/colors';

const MaterialCard = ({ material }: { material: Material }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('MaterialDetails', { material });
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <Image
        key={material.image}
        source={{ uri: material.image }}
        style={styles.image}
        contentFit="cover"
        placeholder={require('~/assets/images/placeholder.png')}
        placeholderContentFit="contain"
        transition={200}
      />
      <View style={styles.rightContainer}>
        <Text type="subtitle" style={styles.materialName}>
          {material.name}
        </Text>
        <Text ellipsizeMode="tail" numberOfLines={3}>
          {material.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.palette2,
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
  image: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    width: 118,
    height: 118,
  },
  materialName: {
    marginBottom: 6,
  },
});

export default MaterialCard;
