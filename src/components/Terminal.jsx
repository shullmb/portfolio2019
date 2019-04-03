import React, { useEffect, useState } from 'react';

const Terminal = props => {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')

  useEffect( () => {
      let arr = props.input.split('')
      let result = []
      arr.forEach((char, i) => {
        i < 1 ? result.push(char) : result.push(`${result[i - 1]}${char}`)
      })
  
      result.forEach( (word, i) => {
        setTimeout( () => {setInput(word)}, 500 + i*100)
      })
  
      setTimeout( () => { setOutput(props.output)}, (props.input.length*100 + 500))
  },[])

  return (
    <>
      <div style={{
        backgroundColor: 'rgba(238, 238, 238,.8)',
        width: '80%',
        minHeight: '1em',
        padding: '.25em 1em',
        margin: '0 auto',
        fontFamily: '"Fira Code",Consolas, monospace',
        border: '2px solid rgba(238, 238, 238, .8)'
      }}></div>
      <div style={{
          backgroundColor: 'rgba(20,20,20,.8)',
          color: '#efefef',
          width: '80%',
          minHeight: '50%',
          maxHeight: '80%',
          margin: '0 auto',
          padding: '1em',
          fontFamily: '"Fira Code",Consolas, monospace',
          border: '2px solid #eee'
        }}>
        <p><span style={{color: 'limegreen'}}>me@mbshull</span> ~ $ {input}</p>
        <p>{output}</p>
      </div>
    </>
  )
}

export default Terminal;