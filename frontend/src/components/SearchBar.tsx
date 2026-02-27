import React from 'react'

export default function SearchBar({ query, setQuery, letter, setLetter }: { query: string; setQuery: (s: string)=>void; letter: string; setLetter: (l: string)=>void }){
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
  return (
    <div style={{marginBottom:18}}>
      <input aria-label="search" placeholder="Search names..." value={query} onChange={e=>setQuery(e.target.value)} style={{padding:8,width:'60%',maxWidth:420}} />
      <div style={{marginTop:8,display:'flex',flexWrap:'wrap',gap:6,justifyContent:'center'}}>
        <button onClick={()=>{setLetter(''); setQuery('')}} style={{padding:'6px 8px'}}>All</button>
        {letters.map(l=> (
          <button key={l} onClick={()=>{setLetter(l); setQuery('')}} style={{padding:'6px 8px',background: letter===l? '#0366d6':'transparent',color: letter===l? '#fff':'#000'}}>{l}</button>
        ))}
      </div>
    </div>
  )
}
