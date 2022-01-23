import { Card, CardContent, CardMedia, Container, Grid, TextField, Typography } from '@mui/material';


const Weather = () => {
    // var lon = weatherReport.coord.lon;
    // var lat = weatherReport.coord.lat;
    // var weathermain = weatherReport.weather[0].main;
    // var weatherdiscription = weatherReport.weather[0].description;
    // var temp = weatherReport.main.temp;
    // var pressure = weatherReport.main.pressure;
    // var humidity = weatherReport.main.humidity;
    // var wind = weatherReport.wind.speed;
    // var country = weatherReport.sys.country;
    // var city = weatherReport.name;
    var lon = 123.425;
    var lat = 1124.123;
    var weathermain = 'Clouds';
    var weatherdiscription = 'Scattered Clouds';
    var temp = 34;
    var pressure = 1014;
    var humidity = 47;
    var wind = 2.78;
    var country = 'India';
    var city = 'Siliguri';

    return (
        <Container style={{
            display: 'flex', justifyContent: 'center', marginTop: '5%', maxWidth: 800
        }}>
            <Card sx={{ padding: '7%' }}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <CardContent>
                            <Typography gutterBottom variant="h2" component="div">
                                Siliguri
                            </Typography>
                        </CardContent>
                    </Grid>
                    <Grid item xs={6}>
                        <CardContent>
                            <Typography gutterBottom variant="h4" component="div">
                                Icon
                            </Typography>
                        </CardContent>
                    </Grid>
                    <Grid item xs={6}>
                        <CardContent>
                            <Typography gutterBottom variant="h3" component="div">
                                25&deg;
                            </Typography>
                        </CardContent>
                    </Grid>
                    <Grid item xs={6}>
                        <CardContent>
                            <Typography gutterBottom variant="h3" component="div">
                                Light Rain
                            </Typography>
                        </CardContent>
                    </Grid>
                </Grid>
            </Card>
        </Container >
    );
}

export default Weather;