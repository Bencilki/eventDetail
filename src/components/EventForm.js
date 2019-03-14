import React from "react";


function EventForm (props) {
        // console.log(props.values)
        // console.log(props.onSubmit)
        // console.log(state)

    return (
        <form onSubmit={props.onSubmit}>
            <label>
                Name:
                <input type="text" name="name" value={props.values.name} onChange={props.onChange} />
                Description:
                <input type="text" name="description" value={props.values.description} onChange={props.onChange} />
                Date:
                <input type={Date} name="date" value={props.values.date} onChange={props.onChange} />
            </label>
            <input type="submit" value="Submit" />
        </form>
        )
}


export default EventForm