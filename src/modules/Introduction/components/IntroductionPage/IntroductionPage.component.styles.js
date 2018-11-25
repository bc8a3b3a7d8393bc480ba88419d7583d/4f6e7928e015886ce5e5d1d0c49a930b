import { StyleSheet } from 'react-native';
import { METRICS, TEXT_STYLES } from '../../../../themes/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 50,
    paddingHorizontal: METRICS.spacing.large,
  },
  image: {
    width: 282,
    height: 217,
  },
  title: {
    ...TEXT_STYLES.h3,
    textAlign: 'center',
    marginTop: METRICS.spacing.normal,
    marginBottom: METRICS.spacing.large,
  },
  text: {
    ...TEXT_STYLES.h4,
    textAlign: 'center',
    marginBottom: METRICS.spacing.large,
  },
});

export default styles;
