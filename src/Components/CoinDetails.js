import React,{useEffect,useState} from 'react'
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
const CoinDetails = () => {
const [coinDetail, setcoinDetail] = useState({});
useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=45&page=1").
       then((response)=>response.json())
      .then((data)=>findCoin(data))
}, [])
const findCoin=(data)=>{
    for(let i=0;i<data.length;i++){
        if(data[i].symbol===localStorage.getItem('symbol')){
            setcoinDetail(data[i]);
        }
    }
}
    return (
        <>
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
          color="blue"
          paragraph
        >
        The following is the valid details of cryptoCurrency :{coinDetail.name}
        </Typography>
      </Container>
      </Box>
        <Card sx={{height: "100%",display: "flex",flexDirection: "column",}}>
            <CardContent sx={{ flexGrow: 1 }}>
         <Typography gutterBottom variant="h5" component="h2">
           </Typography>
          <Typography>
         <ul>
         <li>Currency Nam:{coinDetail.name}</li>
         <li>Current Price:{coinDetail.current_price}</li>
         <li>All time high price:{coinDetail.atl}</li>
         <li>Market Cap:{coinDetail.market_cap}</li>
         <li>Market Cap Rank:{coinDetail.market_cap_rank}</li>
         </ul>
         </Typography>
         </CardContent>
        </Card>
        
        </>
    )
}

export default CoinDetails
