import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';

import AddPallet from './AddPallet.js'
import AddMaster from './AddMaster.js'


class Add extends Component {


	constructor() {
		super();
		this.state = {
			selectedOption: 'Pallet'
		}
		this.handleOptionChange = this.handleOptionChange.bind(this);
	}

	handleOptionChange(event) {
		this.setState({
			selectedOption: event.target.name
		})
	}


	render() {
		return (
				<div className="float-center">
					<div className="container">
						<div className="row">
							<div className="col-sm-6 col-sm-offset-3">

								<div className="col-sm-3">
									<div className="form-check">
										<label className="form-check-label">
											<input type="radio" class="form-check-input"
												name="Pallet"
												checked={this.state.selectedOption === 'Pallet'}
												onChange={this.handleOptionChange}
											/>Pallet
		 								</label>
									</div>
								</div>

								<div className="col-sm-3">
									<div className="form-check">
										<label className="form-check-label">
											<input type="radio" class="form-check-input"
												name="Master Bay"
												checked={this.state.selectedOption === 'Master Bay'}
												onChange={this.handleOptionChange}
											/>Master Bay
										</label>
									</div>
								</div>

							</div>
						</div>

						<div>
							<form>
								<br />
								<br />
								{ this.state.selectedOption === 'Pallet' &&
									<AddPallet /> }
								{ this.state.selectedOption === 'Master Bay' &&
									<AddMaster /> }
							</form>
						</div>
					</div>
				</div>
		)
	}
}

export default Add