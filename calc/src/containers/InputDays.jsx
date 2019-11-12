import React from 'react';

export default function InputDays({ handler, days }) {
  return (
    <div>
      <h2>Дней:{days}</h2>
      <input name="days" type="range" min="0" max="100" step="1" onChange={handler} />
    </div>
  )
}