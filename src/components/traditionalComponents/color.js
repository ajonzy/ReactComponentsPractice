import React, { Component } from "react"

export default class Color extends Component {
    constructor() {
        super()

        this.state = {
            textColor: "black",
            textValue: "Color Me!",
            colorInputValue: "black",
            textInputValue: "Color Me!"
        }

        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleClick() {
        this.setState({
            textColor: this.state.colorInputValue,
            textValue: this.state.textInputValue
        })
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div className="color-wrapper">
                <h3 style={{ color: this.state.textColor }}>{this.state.textValue}</h3>
                <input type="text" name="colorInputValue" value={this.state.colorInputValue} onChange={this.handleChange}/>
                <input type="text" name="textInputValue" value={this.state.textInputValue} onChange={this.handleChange}/>
                <button onClick={this.handleClick}>Submit</button>
            </div>
        )
    }
}