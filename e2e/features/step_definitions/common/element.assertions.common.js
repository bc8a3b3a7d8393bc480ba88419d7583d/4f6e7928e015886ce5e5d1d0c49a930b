/* eslint-disable no-undef */
const assertElementIsVisible = async (elementId, parentId) => {
  let matcher = element(by.id(elementId));
  if (parentId) {
    matcher = matcher.withAncestor(by.id(parentId));
  }

  await expect(matcher).toBeVisible();
};

export {
  // eslint-disable-next-line import/prefer-default-export
  assertElementIsVisible,
};
