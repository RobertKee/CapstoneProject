import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import LoadPallet from './LoadPallet.js'
import LoadBay from './LoadBay.js'
import axios from 'axios'

class Search extends Component {

    constructor() {
        super();
        this.clickHandler = this.clickHandler.bind(this)

    }
    clickHandler(event) {
        event.preventDefault();
        const query = event.target[0].value

        if (query) {
            if (query[0].toUpperCase() === "P") {
                this.props.history.push(`/load/${query}`)
            }

            else if (query[0].toUpperCase() === "M" && query[1].toUpperCase() === "B") {
//MB ==> query[0] + query[1]..shortcut for this? 

                this.props.history.push(`/load/${query}`)
            }

        } else {
            document.querySelector('[data-error]').style.display = "block";
        }
    }


    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.clickHandler} className="bar">
                    <input type="text" />

                    {/* <LoadPallet palletInfo={this.props.palletInfo}/> */}
                    <button className="btn btn-primary" type="submit">Search</button>

                </form>
                <div style={{ display: "none" }} data-error>
                    <h3>Incorrect value. Please try again.</h3>
                </div>
            </React.Fragment>


        )
    }

}
export default Search