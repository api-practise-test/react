import React, {Component} from 'react';
import EventEmitter from "../utils/EventEmitter";


export default class SearchBar extends Component
{
    onChange(event)
    {
        this.raiseSearchEvent(event.target.value);
    }

    raiseSearchEvent(keyword)
    {
        EventEmitter.emit('search-event', {
            keyword: keyword
        })
    }

    render() {
        return(
            <div >
                <input id={"search"} type="text" name="search" onChange={(event) => this.onChange(event)} />
            </div>
        )
    }
}