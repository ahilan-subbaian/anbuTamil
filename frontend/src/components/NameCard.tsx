import React from 'react'

type Props = {
  name: string
  meaning: string
}

export default function NameCard({ name, meaning }: Props) {
  return (
    <div className="name-card" style={{border:'1px solid #ddd',padding:12,borderRadius:6,margin:6,textAlign:'left'}}>
      <div style={{fontWeight:700,fontSize:18}}>{name}</div>
      <div style={{color:'#444',marginTop:6}}>{meaning || '—'}</div>
    </div>
  )
}
