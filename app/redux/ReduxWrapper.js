import React from 'react';
import { connect } from 'react-redux'; 
 

export const mapStateToProps = (state) => ({
  ...state
});

export const mapDispatchToProps = {
  //setLogin$:setLogin, here you can import your action
   
};

export const ReduxWrapper = (WrappedComponent) => {
  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />;

  hocComponent.propTypes = {};

  return hocComponent;
};

export default (WrapperComponent) =>
  connect(mapStateToProps, mapDispatchToProps)(ReduxWrapper(WrapperComponent));
