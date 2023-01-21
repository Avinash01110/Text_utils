import React from 'react'
import propTypes  from "prop-types";
import { Link } from 'react-router-dom';

export default function Suggest (props) {
  return (
    <>
    <label htmlFor="basic-url" className={`form-label text-${props.mode == 'dark'?'light':'black'}`}>Your Name :</label>
    <div className="input-group mb-3 w-80 p-3">
    <span className="input-group-text" id="basic-addon3">First Name :</span>
    <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3"/>
    <span className="input-group-text" id="basic-addon3">Last Name :</span>
    <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3"/>
    </div>
    
    <label htmlFor="basic-url" className={`form-label text-${props.mode == 'dark'?'light':'black'}`}>Email id :</label>
    <div className="input-group mb-3 p-3">
    <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
    <span className="input-group-text" id="basic-addon2">@example.com</span>
    </div>
    
    <div className="input-group p-3">
    <span className="input-group-text">Any Suggestion</span>
    <textarea class="form-control" aria-label="With textarea"></textarea>
    </div>
    </>
  )
}
