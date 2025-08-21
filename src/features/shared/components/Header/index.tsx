import { NativeStackHeaderProps } from "@react-navigation/native-stack";
// import { useRouter, useSegments } from "expo-router";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import BackButton from "~/assets/images/back.svg";
import Text from "@/components/Text";

const Header = ({route, navigation}: NativeStackHeaderProps) => {
  return (
    <SafeAreaView edges={["top", "left", "right"]}>
      <View style={{ height: 70, flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={style.backButtonContainer}>
          <BackButton height={30} width={30} />
        </TouchableOpacity>
        <Text type="subtitle">{route.name}</Text>
        <View style={{ width: 50 }}/>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  backButtonContainer: {
    marginLeft: 20
  }
})

export default Header;
