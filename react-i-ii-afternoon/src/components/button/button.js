import React from 'react'
import './button.css'

function Button (props) {
    return (
        <button className={props.class} name={props.name} onClick={props.switchPerson}>{props.name}</button>
    )
}

export default Button