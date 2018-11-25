import { translateWithNamespace } from '../../../i18n';
import { COLORS, METRICS } from '../../../themes';

const i18n = translateWithNamespace('onboarding.swiper');
const buttonStyle = {
  flex: 0,
  backgroundColor: COLORS.white,
  borderRadius: METRICS.borderRadius.normal,
  minWidth: 100,
};

const pages = [
  {
    id: 1,
    image: 'page1',
    title: i18n('page1.title'),
    text: i18n('page1.text'),
  },
  {
    id: 2,
    image: 'page2',
    title: i18n('page2.title'),
    text: i18n('page2.text'),
  },
  {
    id: 3,
    image: 'page3',
    title: i18n('page3.title'),
    text: i18n('page3.text'),
  },
  {
    id: 4,
    image: 'page4',
    title: i18n('page4.title'),
    text: i18n('page4.text'),
  },
  {
    id: 5,
    image: 'page5',
    title: i18n('page5.title'),
    text: i18n('page5.text'),
    button: {
      title: i18n('page5.button.title'),
      handler: 'onPressTurnOnNotification',
      style: buttonStyle,
    },
  },
  {
    id: 6,
    image: 'page6',
    title: i18n('page6.title'),
    text: i18n('page6.text'),
    button: {
      title: i18n('page6.button.title'),
      handler: 'onPressImIn',
      style: buttonStyle,
    },
  },
];

export default pages;
