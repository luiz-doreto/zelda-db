import Text from '@/components/Text';
import { Material } from '@/models/material.model';
import { RouteProp, useRoute } from '@react-navigation/native';
import { Image } from 'expo-image';
import { ScrollView, StyleSheet, View } from 'react-native';
import HeartHalf from '~/assets/images/heart-half.svg';
import HeartQuarter from '~/assets/images/heart-quarter.svg';
import Heart from '~/assets/images/heart.svg';
import colors from '~/constants/colors';

type MaterialDetailsRouteProp = RouteProp<
  {
    MaterialDetails: { material: Material };
  },
  'MaterialDetails'
>;

const MaterialDetailsScreen = () => {
  const route = useRoute<MaterialDetailsRouteProp>();
  const { material } = route.params;

  const getHeartsRecovered = () => {
    const hearts = material.hearts_recovered;

    const integerPart = Math.floor(hearts);
    const decimalPart = hearts - integerPart;

    return { integerPart, decimalPart };
  };

  const renderHeartsRecovered = () => {
    const { integerPart, decimalPart } = getHeartsRecovered();

    return (
      <View style={styles.heartsContainer}>
        {Array.from({ length: integerPart }).map((_, index) => (
          <Heart width={20} height={20} key={index} />
        ))}
        {decimalPart > 0.25 ? (
          <HeartHalf width={25} height={25} />
        ) : (
          <HeartQuarter width={25} height={25} />
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          key={material.image}
          source={{ uri: material.image }}
          style={styles.image}
          contentFit="cover"
          placeholder={require('~/assets/images/placeholder.png')}
          placeholderContentFit="contain"
          transition={200}
        />

        <View style={styles.content}>
          <View style={styles.header}>
            <Text type="title" style={styles.name}>
              {material.name}
            </Text>
          </View>

          <View style={styles.section}>
            <Text type="subtitle" style={styles.sectionTitle}>
              Description
            </Text>
            <Text style={styles.description}>{material.description}</Text>
          </View>

          {material.hearts_recovered > 0 && (
            <View style={styles.section}>
              <Text type="subtitle" style={styles.sectionTitle}>
                Hearts Recovered
              </Text>
              {renderHeartsRecovered()}
            </View>
          )}

          {material.common_locations &&
            material.common_locations.length > 0 && (
              <View style={styles.section}>
                <Text type="subtitle" style={styles.sectionTitle}>
                  Common Locations
                </Text>
                {material.common_locations.map((location, index) => (
                  <View key={index} style={styles.itemContainer}>
                    <Text style={styles.itemText}>• {location}</Text>
                  </View>
                ))}
              </View>
            )}

          <View style={styles.section}>
            <Text type="subtitle" style={styles.sectionTitle}>
              Additional Info
            </Text>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>DLC Content:</Text>
              <Text style={styles.infoValue}>
                {material.dlc ? 'Yes' : 'No'}
              </Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>ID:</Text>
              <Text style={styles.infoValue}>{material.id}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  content: {
    padding: 20,
  },
  header: {
    marginBottom: 24,
  },
  name: {
    marginBottom: 8,
    color: colors.text,
  },
  categoryContainer: {
    backgroundColor: colors.palette1,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    alignSelf: 'flex-start',
  },
  category: {
    color: colors.text,
    fontSize: 14,
    fontWeight: '600',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    marginBottom: 12,
    color: colors.text,
  },
  description: {
    color: colors.text,
    lineHeight: 22,
  },
  itemContainer: {
    marginBottom: 8,
  },
  heartsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  itemText: {
    color: colors.text,
    lineHeight: 20,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: colors.palette1,
  },
  infoLabel: {
    color: colors.text,
    fontWeight: '600',
  },
  infoValue: {
    color: colors.text,
  },
});

export default MaterialDetailsScreen;
