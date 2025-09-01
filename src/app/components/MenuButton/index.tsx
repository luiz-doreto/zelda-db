import Text from '@/components/Text';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { MenuButtonProps } from './types';

const MenuButton = ({ title, color, linkTo }: MenuButtonProps) => {
  const navigator = useNavigation<any>();

  const handleOnPress = () => {
    if (linkTo) {
      navigator.navigate(linkTo);
    }
  };
  return (
    <TouchableOpacity onPress={handleOnPress}>
      <View style={[styles.buttonContainer, { backgroundColor: color }]}>
        <Text type="subtitle">{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    height: 70,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MenuButton;
