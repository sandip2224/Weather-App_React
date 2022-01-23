import { Container, TextField } from '@mui/material';

const Search = ({ setLocation, setResponse }) => {
    const handleLocation = (e) => {
        setLocation(e.target.value)
    }

    const handleSubmit = (e) => {
        const city = e.target.value.trim();
        if (e.key === 'Enter' && city.length !== 0) {
            const URL = process.env.REACT_APP_API_URL + "?q=" + city + "&appid=" + process.env.REACT_APP_API_KEY
            fetch(URL)
                .then(res => res.json())
                .then(result => {
                    setResponse(result)
                })
        }
        setLocation('')
    }
    return (
        <Container style={{
            display: 'flex', justifyContent: 'center', marginTop: '5%', maxWidth: 1000
        }}>
            < TextField fullWidth id="outlined-basic" label="Enter city name (Example: Pune)" variant="outlined" onChange={handleLocation} onKeyPress={handleSubmit} />
        </Container>
    );
}

export default Search;