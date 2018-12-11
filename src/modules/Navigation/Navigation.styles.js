import { COLORS, TEXT_STYLES } from '../../themes';

const defaultHeaderStyle = {
  backgroundColor: COLORS.background,
  borderBottomWidth: 0,
};

const defaultTitleStyle = {
  ...TEXT_STYLES.h3,
};

export {
  // eslint-disable-next-line import/prefer-default-export
  defaultHeaderStyle,
  defaultTitleStyle,
};
