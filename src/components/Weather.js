import { Card, CardContent, Container, Grid, Typography } from '@mui/material';


const Weather = ({ weatherData }) => {
    var weatherdescription = weatherData.weather[0].description
    var temp = weatherData.main.temp
    var city = weatherData.name
    var icon = weatherData.weather[0].icon

    return (
        <Container style={{
            display: 'flex', justifyContent: 'center', marginTop: '5%', maxWidth: 800
        }}>
            <Card sx={{ padding: '7%' }}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <CardContent>
                            <Typography gutterBottom variant="h2" component="div">
                                {city}
                            </Typography>
                        </CardContent>
                    </Grid>
                    <Grid item xs={6}>
                        <CardContent>
                            <Typography gutterBottom variant="h4`" component="div">
                                <img src={`${process.env.REACT_APP_ICON_URL}/${icon}.png`} />
                            </Typography>
                        </CardContent>
                    </Grid>
                    <Grid item xs={6}>
                        <CardContent>
                            <Typography gutterBottom variant="h3" component="div">
                                {temp}&deg;
                            </Typography>
                        </CardContent>
                    </Grid>
                    <Grid item xs={6}>
                        <CardContent>
                            <Typography gutterBottom variant="h3" component="div">
                                {weatherdescription}
                            </Typography>
                        </CardContent>
                    </Grid>
                </Grid>
            </Card>
        </Container >
    );
}

export default Weather;