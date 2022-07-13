import React, {Component} from 'react';
import EventEmitter from "../utils/EventEmitter";
import '../asset/css/productCard.css'

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
                <label htmlFor="search">
                    <input className='input__style' id={"search"} type="text" name="search" placeholder='search' onChange={(event) => this.onChange(event)} />
                </label>
            </div>
        )
    }
}