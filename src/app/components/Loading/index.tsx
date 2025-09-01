import Text from '@/components/Text';
import { MotiText, MotiView, View } from 'moti';
import { StyleSheet } from 'react-native';
import LoadingIcon from '~/assets/images/loading.svg';

const Loading = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <MotiView
          from={{ rotate: '0deg' }}
          animate={{ rotate: '720deg' }}
          transition={{
            type: 'timing',
            loop: true,
            duration: 3000,
          }}
        >
          <LoadingIcon height={50} width={50} />
        </MotiView>
      </View>
      <View>
        <MotiText
          from={{ opacity: 0 }}
          style={styles.text}
          animate={{ opacity: 1 }}
          transition={{
            type: 'timing',
            loop: true,
            duration: 1000,
          }}
        >
          <Text type="subtitle">Loading...</Text>
        </MotiText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginLeft: 20,
  },
});

export default Loading;
