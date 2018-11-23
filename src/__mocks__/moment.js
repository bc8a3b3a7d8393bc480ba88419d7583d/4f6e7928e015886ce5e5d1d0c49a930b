const origin = require.requireActual('moment');

const mockMoment = (...args) => {
  const mock = origin(...args);
  mock.fromNow = jest.fn(() => `${args} to fromNow`);

  return mock;
};

Object.entries(origin).forEach(([key, val]) => {
  mockMoment[key] = val;
});

export { origin };

export default mockMoment;
