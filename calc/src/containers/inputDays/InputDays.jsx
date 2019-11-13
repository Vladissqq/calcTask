import React from 'react'
import './InputDays.scss'

export default function InputDays({ handler, days }) {
  return (
    <div className="inputDays-container">
      <h2 className="inputDays-header">Дней:{days}</h2>
      <input
        className="inputDays"
        name="days"
        type="range"
        min="0"
        max="100"
        step="1"
        onChange={handler}
      />
    </div>
  )
}
