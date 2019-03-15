import {EVENT_CREATE_SUCCESS, EVENTS_FETCHED, EVENT_DELETE_SUCCESS} from '../actions/events'

 const eventsFetched = (state = null, action) => {
    switch (action.type) {
      case EVENTS_FETCHED:
        return action.events;
      case EVENT_CREATE_SUCCESS:
        return  state.concat(action.event);
      case EVENT_DELETE_SUCCESS:
        return state && state.filter(item =>item.id !== action.event)

      default:
        return state;
    }
  }

  export default eventsFetched
