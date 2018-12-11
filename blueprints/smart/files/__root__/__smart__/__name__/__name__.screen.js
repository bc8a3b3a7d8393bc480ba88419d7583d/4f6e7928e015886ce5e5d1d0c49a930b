import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions as <%= pascalEntityName %>Actions } from './<%= pascalEntityName %>.reducer';
import <%= pascalEntityName %>View from './components/<%= pascalEntityName %>.view';

const <%= pascalEntityName %>Screen = (props) => <<%= pascalEntityName %>View {...props} />;

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = dispatch =>
  bindActionCreators(<%= pascalEntityName %>Actions, dispatch);

<%= pascalEntityName %>Screen.propTypes = {

};
export default connect(
mapStateToProps,
mapDispatchToProps
)(<%= pascalEntityName %>Screen);

