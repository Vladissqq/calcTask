import React from 'react'
import './InputMoney.scss'

export default function InputMoney({ handler, money }) {
  return (
    <div className="inputMoney-container">
      <h2 className="inputMoney-header">Рублей:{money}</h2>
      <input
        className="inputMoney"
        name="money"
        type="range"
        min="0"
        max="100"
        step="1"
        onChange={handler}
      />
    </div>
  )
}
