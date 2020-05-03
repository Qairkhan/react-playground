import React, { Component } from 'react';
import { TextField } from '@material-ui/core';

import './App.css';
import { FindFilm } from './component/FindFilm/FindFilm';

class App extends Component {
	render() {
		return (
			<FindFilm />
		);
	}
}

export default App;
