import React from 'react'
import InputDays from '../../containers/InputDays/InputDays'
import InputMoney from '../../containers/InputMoney/InputMoney'
import Sum from '../../containers/Sum/Sum'
import './Calc.scss'

export default class Calc extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      days: 50,
      money: 50,
      sum: 100,
    }
  }

  inputHandler = event => {
    const name = event.target.name

    this.setState({
      [name]: event.target.value,
    })
  }

  render() {
    const sum = Number(this.state.days) + Number(this.state.money)

    return (
      <div className="calc-container">
        <InputDays handler={this.inputHandler} days={this.state.days} />
        <InputMoney handler={this.inputHandler} money={this.state.money} />
        <Sum sum={sum} />
      </div>
    )
  }
}
