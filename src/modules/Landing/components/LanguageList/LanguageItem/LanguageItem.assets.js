import { FlagImages } from '../../../../../assets/images';

const getFlagIconByCountryCode = countryCode => FlagImages[countryCode];

// eslint-disable-next-line import/prefer-default-export
export { getFlagIconByCountryCode };
