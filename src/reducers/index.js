import {combineReducers} from 'redux'
import {eventFetched, eventsFetched} from './events'

export default combineReducers({
    eventFetched: eventFetched, 
    events: eventsFetched
})