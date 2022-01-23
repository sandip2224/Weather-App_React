import './App.css';
import Search from './components/Search';
import Weather from './components/Weather';

function App() {
	return (
		<div className="App">
			<h1>Weather App</h1>
			<Search />
			<Weather />
		</div>
	);
}

export default App;
