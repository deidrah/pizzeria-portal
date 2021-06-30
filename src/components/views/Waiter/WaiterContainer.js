import { connect } from 'react-redux';
import Waiter from './Waiter';
import { getAll, fetchFromAPI, getLoadingState, getTableStatus, fetchStatusFromAPI } from '../../../redux/tablesRedux';

const mapStateToProps = (state) => ({
  tables: getAll(state),
  loading: getLoadingState(state),
  status: getTableStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchTables: () => dispatch(fetchFromAPI()),
  fetchStatus: (tableId, status) => dispatch(fetchStatusFromAPI(tableId, status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Waiter);