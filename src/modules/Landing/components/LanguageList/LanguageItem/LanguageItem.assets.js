import { flagIcons } from '../../../../../assets/images';

const getFlagIconByCountryCode = countryCode => flagIcons[countryCode];

// eslint-disable-next-line import/prefer-default-export
export { getFlagIconByCountryCode };
