import COLORS from './colors';
import FONTS from './fonts';

const baseStyle = {
  fontFamily: FONTS.FAMILY.Oswald.Regular,
  color: COLORS.white,
};

const textStyles = {
  h1: {
    ...baseStyle,
    fontSize: FONTS.SIZE.h1,
  },
  h2: {
    ...baseStyle,
    fontSize: FONTS.SIZE.h2,
  },
  h3: {
    ...baseStyle,
    fontSize: FONTS.SIZE.h3,
  },
  h4: {
    ...baseStyle,
    fontSize: FONTS.SIZE.h4,
  },
  h5: {
    ...baseStyle,
    fontSize: FONTS.SIZE.h5,
  },
};

export default textStyles;
