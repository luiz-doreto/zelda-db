import { normalizeError } from '~/utils/rtkQueryErrorNormalizer';
import { useGetAllMonstersQuery } from '@/api/zeldaApi';

const useMonsterViewModel = () => {
  const { data, isLoading, error } = useGetAllMonstersQuery();

  /**
   * Place all the logic with data.
   * connects with a secondary slice if needed
   */

  return {
    data,
    isLoading,
    error: normalizeError(error),
  };
};

export default useMonsterViewModel;
