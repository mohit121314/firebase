import React, { Component } from 'react'
import "./App.css";
import { Link } from "react-router-dom";
import firebase from './firebase'

export default class Addlead extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "",
			address: "",
			pincode: "",
			age: "",
			phone: "",
			income: "",
		};
	}
	handlesubmit = (event) => {
		event.preventDefault();

		firebase.firestore().collection('data').add({

			name: this.state.name,
			address: this.state.address,
			pincode: this.state.pincode,
			age: this.state.age,
			phone: this.state.phone,
			income: this.state.income,


		})
		this.props.history.push("/");

	}
	render() {
		return (
			<div className="mian">
				<div className="Header">
					<Link to="/"><img src={require('./baseline_keyboard_backspace_black_18dp.png')} /></Link>
					<h1 className="formh">Add a New Lead</h1>
				</div>
				<form onSubmit={this.handlesubmit}>
					<p>Name:</p>
					<input
						type="text"
						placeholder="Enter Name"
						id="name"
						value={this.state.name}
						onChange={(value) => this.setState({ name: value.target.value })}
						pattern="^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$"
						required />
					<p>Address:</p>
					<input
						type="text"
						placeholder="Enter Address"
						id="address"
						value={this.state.address}
						onChange={(value) => this.setState({ address: value.target.value })}
						required />
					<p>Pincode:</p>
					<input
						type="text"
						placeholder="Enter Pincode"
						id="pincode"
						onChange={(value) => this.setState({ pincode: value.target.value })}
						value={this.state.pincode}
						maxLength="6"
						minLength="6"
						pattern="^[1-9][0-9]{5}$"
						required />
					<p>Age:</p>
					<input
						type="text"
						placeholder="Enter Age"
						id="age"
						onChange={(value) => this.setState({ age: value.target.value })}
						value={this.state.age}
						maxLength="2"
						minLength="2"
					/>
					<p>Phone Number:</p>
					<input
						type="text"
						placeholder="Enter PhoneNo."
						id="phone"
						onChange={(value) => this.setState({ phone: value.target.value })}
						value={this.state.phone}
						maxLength="10"
						minLength="10"
					/>
					<p>Income:</p>
					<input
						type="text"
						placeholder="Enter Income Range."
						id="income"
						onChange={(value) => this.setState({ income: value.target.value })}
						value={this.state.income}
						pattern="^[1-9][0-9]{5}$"
					/>
					<input type="submit" value="Add Lead" />
				</form>
			</div>
		);
	}
}
