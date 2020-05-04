import React, { Component } from 'react';
import { TextField, Button, ButtonGroup  } from '@material-ui/core';

import './FindFilm.css';

class FindFilm extends Component {
	state = {
		value: '',
	};

	handleChange = (event) => {
		this.setState({ value: event.target.value });
	};

	handleSubmit = (event) => {
		console.log(this.state.value);
		event.preventDefault();
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<TextField
						id="outlined-basic"
						variant="outlined"
						type="text"
						label="Search film"
						value={this.state.value}
						onChange={this.handleChange}
					/>
					<Button variant="contained" color="primary">
						Find
					</Button>
				</form>
				<div>
					Search by
					<ButtonGroup
						disableElevation
						variant="contained"
						color="primary"
					>
						<Button>Title</Button>
						<Button>Gengre</Button>
					</ButtonGroup>
				</div>
			</div>
		);
	}
}

export { FindFilm };
