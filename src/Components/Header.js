import React from 'react'
import { AppBar } from '@mui/material'
import BarChartIcon from "@mui/icons-material/BarChart";
import { Typography } from '@mui/material';
import { Toolbar } from '@mui/material';
const Header = () => {
    return (
        <AppBar position="relative">
        <Toolbar>
          <BarChartIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            CoinGecko Market Pairs (USD)
          </Typography>
        </Toolbar>
      </AppBar>
    )
}

export default Header
