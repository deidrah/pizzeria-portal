import Axios from 'axios';
import { api } from '../settings';

/* selectors */
export const getAll = ({ tables }) => tables.data;
export const getLoadingState = ({ tables }) => tables.loading;
export const getTableStatus = ({ tables }) => tables.status;
export const getTableId = ({ tables }) => tables.data.id;

/* action name creator */
const reducerName = 'tables';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const FETCH_TABLE_STATUS = createActionName('FETCH_TABLE_STATUS');

/* action creators */
export const fetchStarted = (payload) => ({ payload, type: FETCH_START });
export const fetchSuccess = (payload) => ({ payload, type: FETCH_SUCCESS });
export const fetchError = (payload) => ({ payload, type: FETCH_ERROR });
export const fetchTableStatus = (payload) => ({
  payload,
  type: FETCH_TABLE_STATUS,
});

/* thunk creators */
export const fetchFromAPI = () => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());

    Axios.get(`${api.url}/api/${api.tables}`)
      .then((res) => {
        dispatch(fetchSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchError(err.message || true));
      });
  };
};
export const fetchStatusFromAPI = (tableId, status) => {
  return (dispatch, getState) => {
    Axios.put(`${api.url}/api/${api.tables}/${tableId}`, { status })
      .then((res) => {
        dispatch(
          fetchTableStatus({ id: res.data.id, status: res.data.status })
        );
      })
      .catch((err) => {
        dispatch(fetchError(err.message || true));
      });
  };
};
/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    case FETCH_TABLE_STATUS: {
      return {
        ...statePart,
        data: statePart.data.map((state) => state.id === action.payload.id ? { ...state, status: action.payload.status } : state),
      };
    }
    default:
      return statePart;
  }
}