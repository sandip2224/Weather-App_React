import { Container, TextField } from '@mui/material';

const Search = () => {
    return (
        <Container>
            < TextField fullWidth id="outlined-basic" label="Enter city name (Example: Pune)" variant="outlined" />
        </Container>
    );
}

export default Search;