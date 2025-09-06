import { useGetAllMonstersQuery } from '~/api/zeldaApi';
import { normalizeError } from '~/utils/rtkQueryErrorNormalizer';

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
