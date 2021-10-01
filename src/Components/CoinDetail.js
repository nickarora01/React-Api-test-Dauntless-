import React,{useRef,useState} from 'react'
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
const CoinDetail = (props) => {
  const name=useRef();
  const [pageLink, setpageLink] = useState({symbol:''});
  const onClickHandler=()=>{
    const value=name.current;
    const res=value.getAttribute("value");
    setpageLink((state)=>state.symbol=res);
    localStorage.setItem("symbol",pageLink.symbol);
    window.open(`/currency/${localStorage.getItem('symbol')}`,'_self');
  }
    return (
        <>
              <Grid item key={Math.random()} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={props.coin.image}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Currency Name :<span ref={name}>{props.coin.name}</span>
                    </Typography>
                    <Typography>
                      <ul>
                        <li>Current Price:{props.coin.current_price}</li>
                        <li>24h High: {props.coin.high_24h}</li>
                        <li>24h Low:  {props.coin.low_24h}</li>
                        <input type="hidden" ref={name} value={props.coin.symbol}/>
                      </ul>
                    </Typography>
                  </CardContent>
                    <Button size="small" onClick={onClickHandler}>More</Button>
                </Card>
              </Grid>
        </>
    )
}

export default CoinDetail
