import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Logo from '~/assets/images/logo.svg';
import CardItem from '../components/CardItem';
import Text from "@/components/Text";
import colors from '~/constants/colors';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Logo style={styles.image} height={250} width={300}/>
      <View style={styles.titleContainer}>
        <Text type="title">Database</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <CardItem title="Monsters" color={colors.palette1} linkTo="Monsters"/>
        <CardItem title="Items" color={colors.palette2}/>
        <CardItem title="Regions" color={colors.palette3}/>
        <CardItem title="Characters" color={colors.palette4}/>
     </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20
  },
  image: {
    alignSelf: 'center',
  },
  titleContainer: {
    alignItems: 'center',
    gap: 8,
    marginVertical: 20,
  },
  buttonsContainer: {
    gap: 12,
  },
});

export default HomeScreen;
