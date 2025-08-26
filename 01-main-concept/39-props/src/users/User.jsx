import React from 'react'

export default function User(props) {
  console.log(props)  
  return (
    <div>
        <h1>Name: {props.name} - Age: {props.age}</h1>
    </div>
  )
}
