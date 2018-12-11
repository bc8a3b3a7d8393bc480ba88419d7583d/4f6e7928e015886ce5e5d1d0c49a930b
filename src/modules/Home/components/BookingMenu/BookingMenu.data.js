import { translateWithNamespace } from '../../../../i18n';

const i18n = translateWithNamespace('home.bookingMenu');
const defaultMenuItems = [
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
    title: i18n('attractionsAndActivities'),
    image: 'attractionsAndActivities',
    onPress: 'onPressFlight',
  },
  {
    title: i18n('airportTransport'),
    image: 'airportTransport',
    onPress: 'onPressFlight',
  },
];
export default [
  ...defaultMenuItems,
  {
    title: i18n('flightStatus'),
    image: 'flightStatus',
    onPress: 'onPressFlight',
  },
  {
    title: i18n('priceAlerts'),
    image: 'priceAlerts',
    onPress: 'onPressFlight',
  },
  {
    title: i18n('myPoints'),
    image: 'myPoints',
    onPress: 'onPressFlight',
  },
];

export { defaultMenuItems };
