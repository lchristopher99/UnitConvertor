import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Unit1: "nautical",
      Unit2: "nautical",
      defVal: null,
    }
  }

  handleChange(e) {
    let num = e.target.value;
    let unit1 = this.state.Unit1;
    let unit2 = this.state.Unit2;

    if (unit1 === "nautical" && unit2 === "miles") {
      num = num * 1.15078;
    } else if (unit1 === "nautical" && unit2 === "kilometers") {
      num = num * 1.852;
    } else if (unit1 === "nautical" && unit2 === "feet") {
      num = num * 6076.11548556;
    } else if (unit1 === "miles" && unit2 === "nautical") {
      num = num / 1.15078;
    } else if (unit1 === "miles" && unit2 === "kilometers") {
      num = num * 1.609344;
    } else if (unit1 === "miles" && unit2 === "feet") {
      num = num * 5280;
    } else if (unit1 === "kilometers" && unit2 === "nautical") {
      num = num / 1.852;
    } else if (unit1 === "kilometers" && unit2 === "miles") {
      num = num / 1.609344;
    } else if (unit1 === "kilometers" && unit2 === "feet") {
      num = num / 0.0003048;
    } else if (unit1 === "feet" && unit2 === "nautical") {
      num = num / 6076.11549;
    } else if (unit1 === "feet" && unit2 === "miles") {
      num = num / 5280;
    } else if (unit1 === "feet" && unit2 === "kilometers") {
      num = num * 0.0003048;
    }
    this.setState({ defVal: num });
  }

  handleDrop = (e, unitNum) => {
    this.setState({[unitNum]: e.target.value});
  }

  UnitBox = (props) => {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>{props.unitNum}</h1>
          <select onChange={(e) => this.handleDrop(e, props.unitNum)}>
            <option value="nautical">Nautical</option>
            <option value="miles">Miles</option>
            <option value="kilometers">Kilometers</option>
            <option value="feet">Feet</option>
          </select>
          <label>
            <input readOnly={props.readonly} type="text" defaultValue={props.value} onChange={(e) => this.handleChange(e, props.unitNum)} />
          </label>
        </form>
      </div>
    )
  }

  render() {
    let val = this.state.defVal;

    return (
      <div>
        <h3>Welcome to the "Nos is a scrub" unit convertor.</h3>
        <this.UnitBox unitNum={"Unit1"}/>
        <this.UnitBox readonly="readonly" unitNum={"Unit2"} value={val}/>
      </div>
    );
  }
}

export default App;
