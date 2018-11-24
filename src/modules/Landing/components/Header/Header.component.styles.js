import { StyleSheet } from 'react-native';
import { METRICS, TEXT_STYLES } from '../../../../themes/index';

const styles = StyleSheet.create({
  container: {},
  logo: {
    width: 60,
    height: 60,
  },
  welcomeText: {
    ...TEXT_STYLES.h1,
    marginVertical: 30,
    textAlign: 'center',
  },
  detectedLanguageText: {
    ...TEXT_STYLES.h4,
    textAlign: 'center',
  },
  languageItem: {
    marginVertical: METRICS.spacing.medium,
  },
});

export default styles;
