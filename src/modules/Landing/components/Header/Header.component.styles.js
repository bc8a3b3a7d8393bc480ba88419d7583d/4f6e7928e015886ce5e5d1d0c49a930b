import { StyleSheet } from 'react-native';
import { METRICS, TEXT_STYLES } from '../../../../themes/index';

const styles = StyleSheet.create({
  container: {},
  logo: {
    marginTop: 50,
    width: 180,
    height: 52,
    alignSelf: 'center',
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
