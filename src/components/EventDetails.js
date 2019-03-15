import React from 'react'
import EventForm from './EventForm'

function EventDetails (props) {
    console.log(props.event, "hett")
    if (props.event === null){
        return "Wait a Second Please!"
    }else{
        return (
        <div>
            {props.editMode && <EventForm 
                onSubmit={props.onSubmit} onChange={props.onChange} 
                values={props.formValues} /> }
                
            {!props.editMode &&
            <div>
                <h1>{props.event.name}</h1>
                <i>Date: {props.event.date}</i>
                <p>{props.event.description}</p>
                
                <button onClick={props.onDelete}>DELETE!</button>
                <button onClick={props.onEdit}>UPDATE!</button>
                
            </div> 
            }
        </div>
        )
    }
}


export default EventDetails