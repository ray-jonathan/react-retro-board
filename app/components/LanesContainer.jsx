import { connect } from 'react-redux';
import Lanes from './lanes';

const mapStateToLanesProps = (state) => ({
	lanes: state.lanes
});

const LanesContainer = connect(
	mapStateToLanesProps,
	null
)(Lanes);

export default LanesContainer;
