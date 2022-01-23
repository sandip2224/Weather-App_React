import './App.css';
import Weather from './components/Weather';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'weather-icons/css/weather-icons.css'

function App() {
	return (
		<div className="App">
			<h1>Weather App</h1>
			<Weather />
		</div>
	);
}

export default App;
