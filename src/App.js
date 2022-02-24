import { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { API, routes } from './utils/utils';

const App = () => {
	const [username, setUsername] = useState("");
	let navigate = useNavigate();

	const onSubmitForm = (e, login, password) => {
		e.preventDefault();
		if (login !== "" && password !== "") {
			axios
				.post(`${API.address}${API.endpoints.login}`, { login, password })
				.then(res => {
					axios
						.get(`${API.address}${API.endpoints.me}`, { headers: { Authorization: `Bearer ${res.data}` } })
						.then(res => {
							setUsername(res.data.username);
							navigate(routes.dashboard);
						})
						.catch(err => {
							console.log('err', err)
						})
				})
				.catch(err => {
					console.log('err', err.status)
				})
		}
	}

	return (
		<div className="app__container">
			<Routes>
				<Route exact path={routes.base} element={<Login onSubmitForm={onSubmitForm} />} />
				<Route path={routes.dashboard} element={<Dashboard username={username} />} />
			</Routes>
		</div>
	);
}

export default App;
