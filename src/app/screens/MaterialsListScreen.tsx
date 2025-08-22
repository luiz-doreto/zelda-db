import MaterialCard from '../components/MaterialCard';
import ZeldaList from '../components/ZeldaList';
import useMaterialsViewModel from '../viewModels/useMaterialsVM';

const MaterialsListScreen = () => {
  const { data, isLoading, error } = useMaterialsViewModel();

  return (
    <ZeldaList
      data={data}
      isLoading={isLoading}
      error={error}
      renderItem={item => <MaterialCard material={item} />}
    />
  );
};

export default MaterialsListScreen;
