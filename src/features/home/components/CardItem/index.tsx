import { StyleSheet, TouchableOpacity, View } from "react-native";
import Text from "@/components/Text";
import { useNavigation } from "@react-navigation/native";

type CardItemProps = {
  title: string,
  color: string,
  linkTo?: string,
}
const CardItem = ({title, color, linkTo}: CardItemProps) => {
  const navigator = useNavigation();

  const handleOnPress = () => {
    // TODO: correctly type the linkTo prop
    if (linkTo) {
      navigator.navigate('Monsters');
    }
  }
  return (
    <TouchableOpacity onPress={handleOnPress}>
      <View style={[styles.buttonContainer, {backgroundColor: color}]}>
        <Text type="subtitle">{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    height: 70,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default CardItem;
