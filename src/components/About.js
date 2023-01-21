import React,{useState} from 'react'

export default function (props) {
  return (
    <div className="height: 23px" style={{color :props.mode =="dark"?"white":"black" }}> 
        <h2>About us</h2>
        <p>It is a text utility website with lots of features in it, If having any problem please contact us...</p>
    </div>
  )
}
