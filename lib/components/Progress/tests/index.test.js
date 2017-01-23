var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

/**
 * Testing our Progress component
 */
import { ThemeProvider } from 'styled-components';
import { shallow, mount } from 'enzyme';
import React from 'react';

import Progress from '../index';
import theme from '../../../config';

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return shallow(_jsx(Progress, {
    value: props.value,
    max: props.max,
    className: props.className
  }));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return mount(_jsx(ThemeProvider, {
    theme: theme
  }, void 0, _jsx(Progress, {
    value: props.value,
    max: props.max,
    className: props.className
  })));
};

describe('<Progress />', function () {
  it('should render an <Progress> tag without a theme', function () {
    var renderedComponent = renderComponent();
    expect(renderedComponent.find('Progress').length).toBe(1);
  });
  it('should have an attribute value without a theme', function () {
    var renderedComponent = renderComponent({
      value: '42'
    });
    expect(renderedComponent.props().value).toEqual('42');
  });
  it('should have an attribute max without a theme', function () {
    var renderedComponent = renderComponent({
      max: '420'
    });
    expect(renderedComponent.props().max).toEqual('420');
  });
  it('should render a <progress> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('progress').length).toBe(1);
    expect(renderedComponent.find('Progress').length).toBe(1);
  });
  it('should have class .pagination by default with a theme', function () {
    var renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('progress').hasClass('progress')).toBe(true);
  });
  it('should have an attribute value with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      value: '42'
    });
    expect(renderedComponent.find('progress').props().value).toEqual('42');
  });
  it('should have an attribute max with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      max: '420'
    });
    expect(renderedComponent.find('progress').props().max).toEqual('420');
  });
});