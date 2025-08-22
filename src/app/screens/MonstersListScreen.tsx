import useMonsterViewModel from '@/viewModels/useMonstersVM';
import MonsterCard from '../components/MonsterCard';
import ZeldaList from '../components/ZeldaList';

const MonstersListScreen = () => {
  const { data, isLoading, error } = useMonsterViewModel();

  return (
    <ZeldaList
      data={data}
      isLoading={isLoading}
      error={error}
      renderItem={item => <MonsterCard monster={item} />}
    />
  );
};

export default MonstersListScreen;
