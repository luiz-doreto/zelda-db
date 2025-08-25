import { normalizeError } from '~/utils/rtkQueryErrorNormalizer';
import { useGetAllEquipmentsQuery } from '../api/zeldaApi';

const useEquipmentVM = () => {
  const { data, isLoading, error } = useGetAllEquipmentsQuery();

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

export default useEquipmentVM;
