import React from 'react'

function Alert(props) {

    const caps = (word) =>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

  return (
   props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{caps(props.alert.type) }</strong> : {props.alert.msg}
    </div>
  )
}

export default Alert
