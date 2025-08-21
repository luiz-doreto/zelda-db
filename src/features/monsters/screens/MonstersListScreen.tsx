import { StyleSheet, View } from 'react-native';

import MonsterCard from '../components/MonsterCard';
import Text from "@/components/Text";
import { FlashList } from '@shopify/flash-list';
import { SafeAreaView } from 'react-native-safe-area-context';
import useMonsterViewModel from '../viewModels/useMonstersViewModel';

const MonstersScreen = () => {

  const { data, isLoading, error } = useMonsterViewModel();

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error?.status} {JSON.stringify(error?.message)}</Text>;

  return (
    <SafeAreaView edges={['bottom', 'left', 'right']} style={{flex: 1}}>
        {
          data?.data.length === 0
            ? <Text>No Monsters</Text>
            : <FlashList
                contentContainerStyle={styles.listContentContainer}
                data={data?.data}
                renderItem={({ item }) => <MonsterCard key={item.id} monster={item}/>}
                ItemSeparatorComponent={() => <View style={styles.listSeparator}/>}
              />
        }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    gap: 8,
    marginVertical: 20,
  },
  listContentContainer: {
    marginTop: 12,
  },
  listSeparator: {
    height: 12,
  },
});

export default MonstersScreen;
