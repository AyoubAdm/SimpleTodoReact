import React from 'react'

export default function Todo(props) {
  return (
    <li >
        {props.content}
        {props.done ? <span className="span" onClick={()=>props.clickFun(props.content)}>Delete &#10060;</span> 
        :<span className="span" onClick={()=>props.clickFun(props.content)}>Done &#9989;</span>}
    </li>
  )
}
