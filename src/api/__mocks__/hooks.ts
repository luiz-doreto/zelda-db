export const mockApiHooks = {
  useGetAllMonstersQuery: () => ({
    data: [{ id: '1', name: 'Lynel' }],
    isLoading: false,
    error: undefined,
  }),
  useGetAllMaterialsQuery: () => ({
    data: [{ id: '1', name: 'Apple' }],
    isLoading: false,
    error: undefined,
  }),
  useGetAllEquipmentsQuery: () => ({
    data: [{ id: '1', name: 'Sword' }],
    isLoading: false,
    error: undefined,
  }),
  useGetAllCreaturesQuery: () => ({
    data: [{ id: '1', name: 'Horse' }],
    isLoading: false,
    error: undefined,
  }),
};
