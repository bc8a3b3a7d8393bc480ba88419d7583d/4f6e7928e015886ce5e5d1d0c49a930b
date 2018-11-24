import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './LanguageList.styles';
import LanguageData from './Language.data';

import { translateWithNamespace } from '../../../../i18n';
import LanguageItem from './LanguageItem/LanguageItem.component';

const i18n = translateWithNamespace('landing.content');

class LanguageList extends PureComponent {
  renderLanguageItem = item => {
    const { onSelectLanguage } = this.props;
    const { languageCode, languageName, countryCode, countryName } = item;
    return (
      <LanguageItem
        key={`${countryCode}-${languageCode}`}
        languageCode={languageCode}
        languageName={languageName}
        countryCode={countryCode}
        countryName={countryName}
        onPress={onSelectLanguage}
        containerStyle={styles.itemContainer}
      />
    );
  };

  getLanguageList = () => {
    const { languageCode, countryCode } = this.props;
    return LanguageData.filter(
      item =>
        item.countryCode !== countryCode || item.languageCode !== languageCode,
    );
  };

  render() {
    const languages = this.getLanguageList();
    return (
      <View>
        <Text style={styles.text}>{i18n('selectLanguage')}</Text>
        {languages.map(this.renderLanguageItem)}
      </View>
    );
  }
}

LanguageList.propTypes = {
  onSelectLanguage: PropTypes.func.isRequired,
  countryCode: PropTypes.string.isRequired,
  languageCode: PropTypes.string.isRequired,
};

export default LanguageList;
