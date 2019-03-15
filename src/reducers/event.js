import {EVENT_FETCHED,EVENT_UPDATE_SUCCESS} from '../actions/events'

const eventFetched = (state = null, action) => {
    switch (action.type) {
      case EVENT_FETCHED:
        return  action.event;
      case EVENT_UPDATE_SUCCESS:
        return action.event;
      default:
        return state;
    }
}

export default eventFetched