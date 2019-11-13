import React from 'react'
import './Sum.css'

export default function Sum({ sum }) {
  return (
    <div className="sum-container">
      <h2 className="sum-header">Итого:{sum}</h2>
    </div>
  )
}
