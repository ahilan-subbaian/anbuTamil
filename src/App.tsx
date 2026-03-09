import React, { useEffect, useState } from 'react'
import './App.css'
import NameList from './components/NameList'
import SearchBar from './components/SearchBar'

type Name = { name: string; meaning?: string }

function App(){
  const [data, setData] = useState<{boys: Name[]; girls: Name[]}>({boys:[],girls:[]})
  const [show, setShow] = useState<'boys'|'girls'>('boys')
  const [query, setQuery] = useState('')
  const [letter, setLetter] = useState('')

  useEffect(()=>{
    fetch('/names.json')
      .then(r=>r.json())
      .then(j=>setData(j))
      .catch(()=>console.warn('Failed to load names.json'))
  },[])

  const list = (show==='boys'? data.boys : data.girls) || []
  const filtered = list.filter(n => {
    // If a letter is selected, name must start with that letter
    if(letter) {
      const firstLetter = n.name.charAt(0).toUpperCase()
      if(firstLetter !== letter) return false
    }
    // If search query exists, name or meaning must include it
    if(query) {
      const q = query.toLowerCase()
      const nameMatch = n.name.toLowerCase().includes(q)
      const meaningMatch = (n.meaning || '').toLowerCase().includes(q)
      if(!nameMatch && !meaningMatch) return false
    }
    return true
  })

  return (
    <div id="root">
      <h1>Anbutamil — Tamil Baby Names</h1>
      <div style={{marginBottom:12}}>
        <button onClick={()=>setShow('boys')} style={{marginRight:8,background: show==='boys' ? '#0366d6':'transparent',color: show==='boys' ? '#fff':'#000'}}>Boys</button>
        <button onClick={()=>setShow('girls')} style={{background: show==='girls' ? '#0366d6':'transparent',color: show==='girls' ? '#fff':'#000'}}>Girls</button>
      </div>

      <SearchBar query={query} setQuery={setQuery} letter={letter} setLetter={setLetter} />

      <div style={{marginTop:12}}>
        <NameList names={filtered} />
      </div>
    </div>
  )
}

export default App
