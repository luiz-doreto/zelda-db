import { HooksApi, hooksApi } from '~/api/hooks';
import { normalizeError } from '~/utils/rtkQueryErrorNormalizer';

const useMaterialsViewModel = (hooks: HooksApi = hooksApi) => {
  const { data, isLoading, error } = hooks.useGetAllMaterialsQuery();

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
