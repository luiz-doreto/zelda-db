import { StyleSheet, Text } from 'react-native';
import colors from '~/constants/colors';
import { CustomTextProps } from './types';

const CustomText = ({ style, type = 'default', ...rest }: CustomTextProps) => {
  return (
    <Text
      style={[
        { fontFamily: 'HyliaSerifBeta-Regular', color: colors.text },
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        style,
      ]}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'default',
  },
  title: {
    fontSize: 32,
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
  },
});

export default CustomText;
