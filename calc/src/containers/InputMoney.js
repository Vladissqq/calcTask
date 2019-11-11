import React from 'react';

export default function InputMoney({ handler, money }) {
  return (
    <div>
      <h2>Рублей:{money}</h2>
      <input name="money" type="range" min="0" max="100" step="1" onChange={handler} />
    </div>
  )
}