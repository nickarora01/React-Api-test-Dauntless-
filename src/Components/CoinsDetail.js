import React,{useEffect,useState} from 'react'
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import CoinDetail from './CoinDetail';
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme();
const CoinsDetail = () => {
    const [cardArray, setcardArray] = useState([]);
    useEffect(() => {
       fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=45&page=1").
       then((response)=>response.json())
       .then((data)=>setcardArray(data))
    },[]);
    return (
        <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Market Pairs (USD)
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              The following is a list of crypto currencies with information
              related to the USD trading pair.
            </Typography>
          </Container>
        </Box>
        </main>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {cardArray.map((coin) => {
              return(
                <CoinDetail key={Math.random()} coin={coin}/>
              )})}
          </Grid>
        </Container>
    </ThemeProvider>
    </>
    )
}

export default CoinsDetail
