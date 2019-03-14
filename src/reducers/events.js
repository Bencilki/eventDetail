import {EVENTS_FETCHED, EVENT_CREATE_SUCCESS} from '../actions/events'

const eventsFetched = (state = null, action) => {
    switch (action.type) {
      case EVENTS_FETCHED:
        return action.events;
      case EVENT_CREATE_SUCCESS:
        return [...state.events, action.event]
      default:
        return null;
    }
  }

  // const eventCreated = (state = null, action) => {
  //   switch (action.type) {
  //     case EVENT_CREATE_SUCCESS:
  //       return  action.event;
    
  //     default:
  //       return null;
  //   }
  // }


export default eventsFetched