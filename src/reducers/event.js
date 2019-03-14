import EVENT_FETCHED from '../actions/events'

export const eventFetched = (state = null, action) => {
    switch (action.type) {
      case EVENT_FETCHED:
        return  action.event;
      default:
        return null;
    }
}
