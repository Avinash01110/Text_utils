import React from 'react'

export default function Alert(props) {
    const cap = (word)=>{
        let capitalize = word.toLowerCase()
        return capitalize.charAt(0).toUpperCase() + capitalize.slice(1)
    }

  return (
    props.alert &&<div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{cap(props.alert.type)}</strong> : {props.alert.msg}
    </div>
  )
}
