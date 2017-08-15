// patching ReactDOM and ReactTestRenderer
//
// issues :https://github.com/airbnb/react-dates/issues/528
// source : https://gist.github.com/renanvalentin/0472aa5ac4769ce5ec1b2f91f60e78fc
/* eslint-disable */
const ReactDOM = require("react-dom");

const findDOMNode = ReactDOM.findDOMNode;

ReactDOM.findDOMNode = (component, ...args) => {
  if (findDOMNode) {
    return findDOMNode(...args);
  }

  if (!component.container) {
    return document.createElement("input");
  }

  const elementType = component.container
    .toString()
    .match(/^\[object HTML(.+)Element\]$/)[1];

  return document.createElement(elementType.toLowerCase());
};

const ReactTestRenderer = require("react-test-renderer");

const create = ReactTestRenderer.create;

ReactTestRenderer.create = function(element) {
  return create(element, {
    createNodeMock(element) {
      return document.createElement(element.type);
    }
  });
};
