import { normalizeError } from '~/utils/rtkQueryErrorNormalizer';
import { useGetAllMaterialsQuery } from '@/api/zeldaApi';

const useMaterialsViewModel = () => {
  const { data, isLoading, error } = useGetAllMaterialsQuery();

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

export default useMaterialsViewModel;
