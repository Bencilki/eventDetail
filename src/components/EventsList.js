import { Link } from 'react-router-dom';
import React, {Component} from "react";

class EventsList extends Component {
    render(){
        // console.log(this.props)
        if (this.props.events === null){
            return "Loading..."
        } else {
            return (
                <ul>
                    {this.props.events.map(event => {
                        // console.log(event.id)
                        return <li key={event.id}>
                            <Link to="/events/:id">{event.name}</Link></li>
                    })}                 
                </ul>
            )    
        }
    }
}


export default EventsList