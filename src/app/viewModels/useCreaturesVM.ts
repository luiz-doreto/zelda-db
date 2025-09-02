import { normalizeError } from '~/utils/rtkQueryErrorNormalizer';
import { useGetAllCreaturesQuery } from '../api/zeldaApi';

const useCreaturesVM = () => {
  const { data, isLoading, error } = useGetAllCreaturesQuery();

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

export default useCreaturesVM;
