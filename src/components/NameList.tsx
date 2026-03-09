import React from 'react'
import NameCard from './NameCard'

type Name = { name: string; meaning?: string }

export default function NameList({ names }: { names: Name[] }) {
  if (!names || names.length === 0) return <div>No names found.</div>

  return (
    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:12}}>
      {names.map((n, idx) => (
        <NameCard key={`${n.name}-${idx}`} name={n.name} meaning={n.meaning || ''} />
      ))}
    </div>
  )
}
