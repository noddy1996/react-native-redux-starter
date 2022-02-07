import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { toggleDarkMode } from './appStateAction';
 

export const mapStateToProps = (state) => ({
  ...state
});

export const mapDispatchToProps = {
  //setLogin$:setLogin, here you can import your action
  toggleDarkMode$:toggleDarkMode
   
};

export const ReduxWrapper = (WrappedComponent) => {
  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />;

  hocComponent.propTypes = {};

  return hocComponent;
};

/**
 * @description HOC component to connect redux to any Valid JSX component
 * @param {Component}
 * @returns {Component}
 */
export default (WrapperComponent) =>
  connect(mapStateToProps, mapDispatchToProps)(ReduxWrapper(WrapperComponent));
