import React from 'react'

export default function ChildComponent(props) {
  return (
    <div>
        <h1>Quiz Programming</h1>
        <p>What programming for build cross-platform app?</p>
        <button onClick={()=>props.onQuiz('react')}>React</button>
        <button onClick={()=>props.onQuiz('python')}>Python</button>
        <button onClick={()=>props.onQuiz('golang')}>Golang</button>
        <h2>{props.yourAnswer}</h2>
    </div>
  )
}
