import { useNavigation } from '@react-navigation/native';
import { NativeStackHeaderLeftProps } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native';

import BackButton from '~/assets/images/back.svg';

const HeaderBackButton = ({ canGoBack }: NativeStackHeaderLeftProps) => {
  const navigation = useNavigation();
  return canGoBack ? (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <BackButton height={30} width={30} />
    </TouchableOpacity>
  ) : null;
};

export default HeaderBackButton;
