import { normalizeError } from '~/utils/rtkQueryErrorNormalizer';
import { hooksApi, HooksApi } from '~/api/hooks';

const useMonsterViewModel = (hooks: HooksApi = hooksApi) => {
  const { data, isLoading, error } = hooks.useGetAllMonstersQuery();

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
