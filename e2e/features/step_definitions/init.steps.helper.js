const logStep = testInfo => {
  const {
    pickle: { name },
    result: { status, duration },
  } = testInfo;
  console.log(
    `"Scenario: ${name}" --- ${duration / 1000}s --- ${
      status === 'passed' ? '\x1b[32m' : '\x1b[31m'
    }%s\x1b[0m`,
    status,
  );
};

export {
  // eslint-disable-next-line import/prefer-default-export
  logStep,
};
