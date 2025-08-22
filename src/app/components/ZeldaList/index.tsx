import { StyleSheet, View } from 'react-native';
import Text from '@/components/Text';
import { FlashList } from '@shopify/flash-list';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IApiResponse } from '~/app/api/types';
import { NormalizedError } from '~/utils/rtkQueryErrorNormalizer';

interface ZeldaListProps<T> {
  data: IApiResponse<T> | undefined;
  isLoading: boolean;
  error: NormalizedError | undefined;
  renderItem: (item: T) => React.ReactElement;
  emptyMessage?: string;
}

const ZeldaList = <T extends { id: number }>({
  data,
  isLoading,
  error,
  renderItem,
  emptyMessage = 'List Empty',
}: ZeldaListProps<T>) => {
  if (isLoading) return <Text>Loading...</Text>;
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
