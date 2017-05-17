'use strict';

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Testing our Filters components
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _BootstrapProvider = require('../../../../../BootstrapProvider');

var _BootstrapProvider2 = _interopRequireDefault(_BootstrapProvider);

var _index = require('../index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderComponent = function renderComponent() {
  var EffectComponent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _index.Blur;
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return (0, _enzyme.mount)(_jsx(_BootstrapProvider2.default, {}, void 0, _react2.default.createElement(EffectComponent, props)));
};

var _ref = _jsx('h1', {}, void 0, 'Test');

describe('filters', function () {
  var children = void 0;
  beforeAll(function () {
    children = _ref;
  });

  it('should render a <Blur> tag', function () {
    var renderedComponent = renderComponent(_index.Blur, {
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <Contrast> tag', function () {
    var renderedComponent = renderComponent(_index.Contrast, {
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <Brightness> tag', function () {
    var renderedComponent = renderComponent(_index.Brightness, {
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <Grayscale> tag', function () {
    var renderedComponent = renderComponent(_index.Grayscale, {
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <HueRotate> tag', function () {
    var renderedComponent = renderComponent(_index.HueRotate, {
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <Invert> tag', function () {
    var renderedComponent = renderComponent(_index.Invert, {
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <Opacity> tag', function () {
    var renderedComponent = renderComponent(_index.Opacity, {
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <Saturate> tag', function () {
    var renderedComponent = renderComponent(_index.Saturate, {
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <Sepia> tag', function () {
    var renderedComponent = renderComponent(_index.Sepia, {
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <Dropshadow> tag', function () {
    var renderedComponent = renderComponent(_index.Dropshadow, {
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
});