import { useNavigation } from '@react-navigation/native';
import {
  NativeStackHeaderLeftProps,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { StyleSheet, TouchableOpacity } from 'react-native';

import BackButton from '~/assets/images/back.svg';
import { RootStackParamList } from '~/navigation';

const HeaderBackButton = ({ canGoBack }: NativeStackHeaderLeftProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return canGoBack ? (
    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.margin}>
      <BackButton height={30} width={30} />
    </TouchableOpacity>
  ) : null;
};

const styles = StyleSheet.create({
  margin: {
    marginRight: 16,
  },
});

export default HeaderBackButton;
