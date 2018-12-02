import { translateWithNamespace } from '../../../../i18n';

const i18n = translateWithNamespace('home.bookingMenu');
export default [
  {
    title: i18n('flights'),
    image: 'flight',
    onPress: 'onPressFlight',
  },
  {
    title: i18n('hotels'),
    image: 'hotel',
    onPress: 'onPressFlight',
  },
  {
    title: i18n('airportTransport'),
    image: 'flight',
    onPress: 'onPressFlight',
  },
  {
    title: i18n('priceAlerts'),
    image: 'flight',
    onPress: 'onPressFlight',
  },
  {
    title: i18n('myPoints'),
    image: 'flight',
    onPress: 'onPressFlight',
  },
];
