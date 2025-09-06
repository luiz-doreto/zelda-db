import { FlashList } from '@shopify/flash-list';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Text from '~/components/Text';
import Loading from '../Loading';
import { ZeldaListProps } from './types';

const ZeldaList = <T extends { id: number }>({
  data,
  isLoading,
  error,
  renderItem,
  emptyMessage = 'List Empty',
}: ZeldaListProps<T>) => {
  if (isLoading) return <Loading />;
  if (error)
    return (
      <Text>
        Error: {error?.status} {JSON.stringify(error?.message)}
      </Text>
    );

  return (
    <SafeAreaView edges={['bottom', 'left', 'right']} style={{ flex: 1 }}>
      {data?.data.length === 0 ? (
        <Text>{emptyMessage}</Text>
      ) : (
        <FlashList
          contentContainerStyle={styles.listContentContainer}
          data={data?.data}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => renderItem(item)}
          ItemSeparatorComponent={() => <View style={styles.listSeparator} />}
        />
      )}
    </SafeAreaView>
  );
};

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

export default ZeldaList;
