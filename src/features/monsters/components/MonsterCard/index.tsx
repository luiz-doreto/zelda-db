import { Monster } from "~/features/monsters/models/monster.model";
import { Image, StyleSheet, View } from "react-native";
import Text from "@/components/Text";

const MonsterCard = ({monster}: {monster: Monster}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: monster.image}}/>
      <View style={styles.rightContainer}>
        <Text type="subtitle" style={styles.monsterName}>{monster.name}</Text>
        <Text ellipsizeMode="tail" numberOfLines={3}>{monster.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2a5879',
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 20,
    height: 120,
  },
  rightContainer: {
    flex: 1,
    height: 100,
    width: '100%',
    marginLeft: 12,
  },
  image: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    width: 118,
    height: 118,
  },
  monsterName: {
    marginBottom: 6,
  }
})

export default MonsterCard;
