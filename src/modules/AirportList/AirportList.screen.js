import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions as AirportListActions } from './AirportList.reducer';
import AirportListView from './components/AirportList.view';

class AirportListScreen extends React.Component {
  static navigationOptions = () => ({
    header: null,
  });

  render() {
    return <AirportListView {...this.props} />;
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch =>
  bindActionCreators(AirportListActions, dispatch);

AirportListScreen.propTypes = {};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AirportListScreen);
