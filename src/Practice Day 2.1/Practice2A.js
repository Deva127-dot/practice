import React, { useState } from 'react'
import styles from './practice2A.module.css'

function Practice2A() {

    const [txt, setTxt]=useState('')
    const changeChar =(e)=>{
        // console.log(e.target.value)
        setTxt(e.target.value)
    }
    const handleChange=()=>{
      let capital = txt.toUpperCase()
      setTxt(capital)
    }
    const handleChange2=()=>{
      let capital = txt.toLowerCase()
      setTxt(capital)
    }
    const handleChange3=()=>{
      let capital = <b>txt</b>
      setTxt(capital)
    }

  return (
    <div>
    <h3>Text Analyzer</h3>
      <textarea cols="80" rows="20" value={txt} onChange={changeChar}/>
      <button onClick={handleChange}>To Upper Case</button>
      <button onClick={handleChange2}>To Lower Case</button>
      <button onClick={handleChange3}>Bold</button>
    </div>
  )
}

export default Practice2A
