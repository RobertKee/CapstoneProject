import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import AddCommon from './AddCommon.js'

class AddSub extends Component {
    
    constructor() {
		super();
		this.clickHandler = this.clickHandler.bind(this)
 }

	clickHandler(event) {
        event.preventDefault();
        //push to spring
        // const query = event.target[0].value
        const query = 'b101'
		this.props.history.push(`/search/${query}`)
}

	render() {
		return (
            <form onSubmit={this.clickHandler}>
            <AddCommon />
				<button className="btn btn-primary" type="submit">Submit</button>
			</form>
        )
    }
}

export default AddSub