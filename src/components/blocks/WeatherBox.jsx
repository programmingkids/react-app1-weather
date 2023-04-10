import { styled } from '@mui/material/styles';
import { Box, Stack, Button, Paper, Container, Typography, } from '@mui/material';
import { Divider } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import { extractDataForWeatherBox } from './../providers/DataParser';

const MyGrid = styled(Grid)(({theme}) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const MainPaper = styled(Paper)(({theme}) => ({
  borderRadius: theme.spacing(5),
  marginBottom: theme.spacing(10),
  padding : theme.spacing(5),
  textAlign: 'center',
}));

const TempStack = styled(Stack)(({theme}) => ({
  justifyContent: 'center',
  gap: theme.spacing(5),
  marginTop: theme.spacing(1),
}));

const BottomStack = styled(Stack)(({theme}) => ({
  justifyContent: 'center',
  gap: theme.spacing(5),
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(1),
}));

export const WeatherBox = ({data}) => {
  const { 
    city, iconURL, dateTimeString, description, 
    tempMax, tempMin, rain, humid, wind,
    nextData,
  } = extractDataForWeatherBox(data);
  
  return (
    <Container>
      <MyGrid container>
        <Grid xs={12} sm={12} md={6} mdOffset={3}>
          <MainPaper elevation={4}>
            <Typography variant="h5">{city.name}</Typography>
            <Typography variant="subtitle1">{dateTimeString}</Typography>
            <img src={iconURL} width='30%' />
            <Typography variant="subtitle1">{description}</Typography>
            <TempStack direction="row">
              <Typography variant="tempMax">{tempMax}℃</Typography>
              <Typography variant="tempMin">{tempMin}℃</Typography>
            </TempStack>
            <BottomStack direction="row">
              <Box>
                <Typography>降水</Typography>
                <Typography>{rain}%</Typography>
              </Box>
              <Divider orientation="vertical" flexItem />
              <Box>
                <Typography>湿度</Typography>
                <Typography>{humid}％</Typography>
              </Box>
              <Divider orientation="vertical" flexItem />
              <Box>
                <Typography>風速</Typography>
                <Typography>{wind}M</Typography>
              </Box>
            </BottomStack>
            <Divider sx={{m:4}}/>
            <BottomStack direction="row">
            {nextData.map(d => (
              <Box>
                <Typography>{d.dateTimeString}</Typography>
                <img src={d.iconURL} />
                <Typography>{d.pop}%</Typography>
                <Typography>{d.temp}℃</Typography>
              </Box>
            ))}
            </BottomStack>
          </MainPaper>
        </Grid>
      </MyGrid>
    </Container>
  );
};
