import './App.css';

import { useState } from 'react';

// Components
import Search from './components/Search';
import Weather from './components/Weather';

function App() {
	const [location, setLocation] = useState('')
	const [response, setResponse] = useState('')

	return (
		<div className="App">
			<h1>Weather App</h1>
			<Search setLocation={setLocation} setResponse={setResponse} />
			{(typeof response.main != 'undefined') ? (
				<Weather weatherData={response} />
			) : (<div></div>
			)}
		</div>
	);
}

export default App;
