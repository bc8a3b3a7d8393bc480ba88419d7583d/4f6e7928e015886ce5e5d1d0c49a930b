import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './LanguageList.styles';
import languages from './Language.data';

import { translateWithNamespace } from '../../../../i18n';
import LanguageItem from './LanguageItem/LanguageItem.component';

const i18n = translateWithNamespace('landing.content');

class LanguageList extends Component {
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

  render() {
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
};

export default LanguageList;
