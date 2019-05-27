import React from 'react';

function SearchCity(props) {
    return (
        <form onSubmit={(e) => {props.SearchCity}}>
            <input type='text' name='SearchCity'/>
            <input type='submit'>Submit</input>
        </form>
    )
}