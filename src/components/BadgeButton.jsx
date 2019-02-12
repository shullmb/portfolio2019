import React from 'react';

export const BadgeButton = props => {
  let num = props.num ? <small>{props.num}</small> : ''; 
  return (
    <button onClick={props.onClick}>
      {props.value || "Button"}  {num}
    </button>
  )
}