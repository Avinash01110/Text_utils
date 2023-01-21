import React from 'react'
import propTypes  from "prop-types";
import { Link } from 'react-router-dom';

export default function Contactus(props) {
  return (
    <>
    <h1 className={`text-${props.mode == 'dark'?'light':'black'}`}>Contact us :</h1>
    <h5 className={`text-${props.mode == 'dark'?'light':'black'}`}>Phone no. : +916599756134</h5>
    <h5 className={`text-${props.mode == 'dark'?'light':'black'}`}>Insta : @Textutils</h5>
    <h5 className={`text-${props.mode == 'dark'?'light':'black'}`}>Email : textutils@gmail.com</h5>
    </>
  )
}
