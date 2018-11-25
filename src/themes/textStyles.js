import { COLORS, FONTS } from './index';

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
};

export default textStyles;
